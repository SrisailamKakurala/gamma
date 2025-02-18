const express = require("express");
const BodyParser = require("body-parser");
const cors = require("cors");
const { chatSession } = require("./Ai");


const sysprompt = `Generate a website for the given prompt using Tailwind CSS and React. Return only the HTML and JSX code inside a div element. Ensure that the code is returned as a plain string and does not include any markdown, backticks, or code blocks.

For example:

<div className='p-4 bg-gray-100 text-center'>
    <h1 className='text-2xl font-bold text-blue-500'>Hello, Tailwind CSS with Sandpack!</h1>
    <p className='mt-2 text-gray-700'>This is a live code editor.</p>
</div>`;




const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(BodyParser.json());

app.get('/', (req,res) => {
    res.send("server running....")
})

app.get('/gen-site', async (req, res) => {
    try {
        const prompt = req.query.prompt;
        const fullPrompt = sysprompt + "-" + prompt;
        const result = await chatSession.sendMessage(fullPrompt);
        const obj = result.response.text();
        console.log(obj);
        res.json({ data: obj })
    } catch (error) {
        res.json(error);
    }
})

app.listen(3000, () =>{
    console.log("server started at 3000")
})