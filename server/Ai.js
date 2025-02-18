const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");
require("dotenv").config();
  
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
model: "gemini-2.0-flash",
});

const generationConfig = {
temperature: 1,
topP: 0.95,
topK: 40,
maxOutputTokens: 8192,
responseMimeType: "text/plain",
};
  
const chatSession = model.startChat({
    generationConfig,
    history: [
    {
        role: "user",
        parts: [
        {text: "generate a website for given prompt using tailwind and react .... enclose everything in a div so i'll append it in another div.. return an object conataing \"code\" key with the value being the code .... make a beautiful single page application using react in a div.. start with div .. don't enclose it in a component give the div and it's child that makeup the website directly\n\nthe response should be like this\n\n{ \ncode: \"<div classname=\"....\"> website </div>\"\n}\n "},
        ],
    },
    {
        role: "model",
        parts: [
        {text: "```json\n{\n  \"code\": \"<div className=\\\"bg-gray-100 min-h-screen font-sans\\\">\\n  <div className=\\\"container mx-auto px-4\\\">\\n    {/* Header */}\\n    <header className=\\\"py-6\\\">\\n      <nav className=\\\"flex items-center justify-between\\\">\\n        <a href=\\\"#\\\" className=\\\"text-2xl font-bold text-gray-800\\\">My Awesome Website</a>\\n        <ul className=\\\"flex space-x-6\\\">\\n          <li><a href=\\\"#about\\\" className=\\\"hover:text-blue-500\\\">About</a></li>\\n          <li><a href=\\\"#services\\\" className=\\\"hover:text-blue-500\\\">Services</a></li>\\n          <li><a href=\\\"#portfolio\\\" className=\\\"hover:text-blue-500\\\">Portfolio</a></li>\\n          <li><a href=\\\"#contact\\\" className=\\\"hover:text-blue-500\\\">Contact</a></li>\\n        </ul>\\n      </nav>\\n    </header>\\n\\n    {/* Hero Section */}\\n    <section className=\\\"py-20 text-center\\\">\\n      <h1 className=\\\"text-5xl font-extrabold text-gray-900 mb-4\\\">Welcome to My Digital World</h1>\\n      <p className=\\\"text-xl text-gray-700 mb-8\\\">Crafting beautiful and functional web experiences.</p>\\n      <button className=\\\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\\\">Get Started</button>\\n    </section>\\n\\n    {/* About Section */}\\n    <section id=\\\"about\\\" className=\\\"py-12\\\">\\n      <h2 className=\\\"text-3xl font-bold text-gray-800 mb-6\\\">About Me</h2>\\n      <div className=\\\"grid grid-cols-1 md:grid-cols-2 gap-8\\\">\\n        <div>\\n          <img src=\\\"https://images.unsplash.com/photo-1503023345310-154369579dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80\\\" alt=\\\"About Me\\\" className=\\\"rounded-lg shadow-md\\\" />\\n        </div>\\n        <div>\\n          <p className=\\\"text-gray-700 mb-4\\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\\n          <p className=\\\"text-gray-700\\\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\\n        </div>\\n      </div>\\n    </section>\\n\\n    {/* Services Section */}\\n    <section id=\\\"services\\\" className=\\\"py-12 bg-gray-50\\\">\\n      <h2 className=\\\"text-3xl font-bold text-gray-800 mb-6 text-center\\\">My Services</h2>\\n      <div className=\\\"grid grid-cols-1 md:grid-cols-3 gap-8\\\">\\n        <div className=\\\"p-6 bg-white rounded-lg shadow-md\\\">\\n          <h3 className=\\\"text-xl font-semibold text-gray-800 mb-2\\\">Web Design</h3>\\n          <p className=\\\"text-gray-700\\\">Creating visually appealing and user-friendly websites.</p>\\n        </div>\\n        <div className=\\\"p-6 bg-white rounded-lg shadow-md\\\">\\n          <h3 className=\\\"text-xl font-semibold text-gray-800 mb-2\\\">Web Development</h3>\\n          <p className=\\\"text-gray-700\\\">Building robust and scalable web applications.</p>\\n        </div>\\n        <div className=\\\"p-6 bg-white rounded-lg shadow-md\\\">\\n          <h3 className=\\\"text-xl font-semibold text-gray-800 mb-2\\\">SEO Optimization</h3>\\n          <p className=\\\"text-gray-700\\\">Improving website visibility and search engine ranking.</p>\\n        </div>\\n      </div>\\n    </section>\\n\\n    {/* Portfolio Section */}\\n    <section id=\\\"portfolio\\\" className=\\\"py-12\\\">\\n      <h2 className=\\\"text-3xl font-bold text-gray-800 mb-6 text-center\\\">My Portfolio</h2>\\n      <div className=\\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\\\">\\n        <div className=\\\"rounded-lg shadow-md overflow-hidden\\\">\\n          <img src=\\\"https://images.unsplash.com/photo-1496181133206-80fa9e743401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80\\\" alt=\\\"Project 1\\\" className=\\\"w-full h-48 object-cover\\\" />\\n          <div className=\\\"p-4\\\">\\n            <h3 className=\\\"text-xl font-semibold text-gray-800 mb-2\\\">Project Title 1</h3>\\n            <p className=\\\"text-gray-700\\\">Brief description of the project.</p>\\n          </div>\\n        </div>\\n        <div className=\\\"rounded-lg shadow-md overflow-hidden\\\">\\n          <img src=\\\"https://images.unsplash.com/photo-1517694712202-14f9bc8d26f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80\\\" alt=\\\"Project 2\\\" className=\\\"w-full h-48 object-cover\\\" />\\n          <div className=\\\"p-4\\\">\\n            <h3 className=\\\"text-xl font-semibold text-gray-800 mb-2\\\">Project Title 2</h3>\\n            <p className=\\\"text-gray-700\\\">Brief description of the project.</p>\\n          </div>\\n        </div>\\n         <div className=\\\"rounded-lg shadow-md overflow-hidden\\\">\\n          <img src=\\\"https://images.unsplash.com/photo-1580927511526-594e9f005318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80\\\" alt=\\\"Project 3\\\" className=\\\"w-full h-48 object-cover\\\" />\\n          <div className=\\\"p-4\\\">\\n            <h3 className=\\\"text-xl font-semibold text-gray-800 mb-2\\\">Project Title 3</h3>\\n            <p className=\\\"text-gray-700\\\">Brief description of the project.</p>\\n          </div>\\n        </div>\\n      </div>\\n    </section>\\n\\n    {/* Contact Section */}\\n    <section id=\\\"contact\\\" className=\\\"py-12 bg-gray-50\\\">\\n      <h2 className=\\\"text-3xl font-bold text-gray-800 mb-6 text-center\\\">Contact Me</h2>\\n      <div className=\\\"max-w-md mx-auto\\\">\\n        <form>\\n          <div className=\\\"mb-4\\\">\\n            <label htmlFor=\\\"name\\\" className=\\\"block text-gray-700 text-sm font-bold mb-2\\\">Name</label>\\n            <input type=\\\"text\\\" id=\\\"name\\\" className=\\\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\\\" placeholder=\\\"Your Name\\\" />\\n          </div>\\n          <div className=\\\"mb-4\\\">\\n            <label htmlFor=\\\"email\\\" className=\\\"block text-gray-700 text-sm font-bold mb-2\\\">Email</label>\\n            <input type=\\\"email\\\" id=\\\"email\\\" className=\\\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\\\" placeholder=\\\"Your Email\\\" />\\n          </div>\\n          <div className=\\\"mb-6\\\">\\n            <label htmlFor=\\\"message\\\" className=\\\"block text-gray-700 text-sm font-bold mb-2\\\">Message</label>\\n            <textarea id=\\\"message\\\" rows=\\\"4\\\" className=\\\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\\\" placeholder=\\\"Your Message\\\"></textarea>\\n          </div>\\n          <button className=\\\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\\\">Send Message</button>\\n        </form>\\n      </div>\\n    </section>\\n\\n    {/* Footer */}\\n    <footer className=\\\"py-4 text-center text-gray-600\\\">\\n      &copy; 2023 My Awesome Website\\n    </footer>\\n  </div>\\n</div>\"\n}\n```"},
        ],
    },
    ],
});

module.exports = {chatSession}


  
// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
