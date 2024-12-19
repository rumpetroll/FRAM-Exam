README

FRAM Webshop Project

FRAM is a modern, responsive webshop connecting users with local farms, offering a sustainable and user-friendly shopping experience. Key functionalities include an AI-powered chatbot for real-time customer support, seamless navigation, and an integrated shopping cart feature.


Features

- Responsive Design: Fully optimized for mobile, tablet, and desktop devices.
- AI-Powered Chatbot: Real-time customer support powered by the OpenAI API to answer user queries about farm produce, delivery, and sustainability.
- Shopping Cart Functionality: Dynamic cart updates as users add products.
- Product Page: A clean, organized page showcasing seasonal produce.
- Partnering Farms Section: Highlighting farm locations, integrated with a placeholder map image.
- Interactive UI: Includes dynamic elements like toggling menus and real-time button feedback.
- WCAG Accessibility Standards: Ensures inclusive design.


Technologies Used

- Frontend: HTML5, CSS3 (Flexbox and Grid), JavaScript (ES6+).
- APIs: OpenAI API for the chatbot.
- Tools: Google Maps API (commented out for future implementation).
- Version Control: Git and GitHub for collaboration.


Setup Instructions

- Clone the Repository:
git clone [repository-url]
cd [repository-directory]
- Install Dependencies: No external dependencies are required. Ensure you have a text editor (e.g., VS Code) and a browser.


API Key Setup: 

Replace the API_KEY placeholder in the JavaScript file with your OpenAI API key.

Steps to Set Up the OpenAI API:
1. Obtain an API Key:
- Go to the OpenAI API website.
- Create an account if you don’t already have one.
- Obtain an API key from the OpenAI dashboard.

2. Replace the Placeholder API Key:
- Open the index.js file in your project.
- Locate the following line: const API_KEY = 'your-openai-api-key-here';

3. Keep Your API Key Secure:
Do NOT share your API key publicly or include it in your GitHub repository. Use .env files to manage sensitive information if you plan to deploy your project.

4. Test the Chatbot:
- Open the project in your browser.
- Click on the chatbot icon and test the interaction to ensure the API is working correctly.


Usage Guide

- Homepage: Learn about FRAM’s offerings and navigate to other sections.
- Product Page: Browse and add products to your cart dynamically.
- Chatbot: Click on the chatbot icon to open the AI-powered assistant. Use it to get answers related to farm produce, delivery, and sustainability.
- Navigation Menu: Toggle the menu to navigate between pages or sections.


Development Process

- Planning: Started by reviewing the design specifications and project requirements.

Implementation:
    - Developed the HTML structure with semantic elements.
    - Styled components using CSS, ensuring responsiveness.
    - Integrated OpenAI API for the chatbot functionality.
    - Implemented dynamic features like the cart and chatbot using JavaScript.
- Testing: Performed manual testing on different devices to ensure responsiveness and functionality.