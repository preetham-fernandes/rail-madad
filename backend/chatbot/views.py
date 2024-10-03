from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.http import HttpResponse
from PIL import Image
from .models import UploadedImage
import os
import google.generativeai as genai

#Django main page 
def home(request):
    return HttpResponse("Welcome to RailMadad!")

genai.configure(api_key="AIzaSyDlIUR1L8iXXamSN5nUyEQO52NlGd3fbvc")
model = genai.GenerativeModel(model_name="gemini-1.5-flash")

chatbot_state = {"step": "welcome", "user_data": {}}
ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png', 'gif', 'webp'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@csrf_exempt
def chat(request):
    user_input = request.POST.get('button_value', '')
    current_step = chatbot_state["step"]
    response = {}

    return JsonResponse(response)


def generate_text(input_data, prompt):
    response = model.generate_content([input_data, prompt])
    return response.candidates[0].content.parts[0].text if response.candidates and response.candidates[0].content.parts else "No data generated"


@csrf_exempt
def upload_image(request):
    if request.method == 'POST':
        if 'image' in request.FILES:
            image_file = request.FILES['image']
            
            # Save the uploaded image in the database
            uploaded_image = UploadedImage(image=image_file)
            uploaded_image.save()

            # Open the image using PIL for processing
            image_path = uploaded_image.image.path  # Get the path of the uploaded image
            image = Image.open(image_path)  # Open the image as a PIL object

            # Generate caption and category by passing the actual image (PIL object)
            caption_text = generate_text(image, "Give a Formal Complaint caption that is to be send to the railway department in 20-25 words. Dont specify [train number/name] on [date] at [station name]")
            category_text = generate_text(image, "Generate Category in this. Return answer in one word. If dirty, unsanitary, hazardous environment is shown then Cleanliness. If Broken Equipments is visible like Air Conditioner, Fans / Lights, Charging Point, Lift / Escalator then Electrical Equipments.")
            subcategory_text = generate_text(image, "Generate Sub Category for the category part. If Toilet, Railway Tracks / Railway Track, Platform, Waiting Room, Station Entrance / Building, Stalls is visible then give that as sub category only if {category_text} is Cleanliness.  If Air Conditioner, Fans / Light, Charging Point, Lift / Escalator, Display / Coach Indicator Board is visible and broken then give that as sub category only if {category_text} is Electrical Equipments. Return answer in one word.")

            # Update the image object in the database with generated caption & category
            uploaded_image.caption = caption_text
            uploaded_image.category = category_text
            uploaded_image.save()

            # Prepare the response to send back to the frontend
            response = {
                "message": f"Image uploaded successfully! Category: {category_text}Sub-category: {subcategory_text}Caption: {caption_text}",
                "image_url": uploaded_image.image.url  # Returns the URL of the uploaded image
            }
        else:
            # Handle case where no image is uploaded
            response = {
                "message": "No image file provided. Please upload an image."
            }
    else:
        # Handle non-POST requests
        response = {
            "message": "Invalid request method."
        }

    return JsonResponse(response)
