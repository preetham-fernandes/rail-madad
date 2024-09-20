module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              railMadadNavbar: '#75002b', 
              hover: '#f48323',
              hover2: '#930b3e',
              login: '#DCDEF9',
              signup: '#EFE4E8',
          },
          fontFamily: {
            navbar: ['Poppins', 'sans-serif'],  
          }
      },
  },
  plugins: [],
};

