import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {commonContext} from '../context/utilContext'

const Home = () => {

    const navigate = useNavigate();
    const [option, setOption] = useState(null);
    const [input, setInput] = useState(null);

    const {prompt, setPrompt} = useContext(commonContext);

    const handleSubmit= () => {
        if(input && option) {
            setPrompt(input);
            if(option === "website") {
                navigate('/site');
            }
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen gap-4">
            <div className="flex justify-center items-center gap-4">
                <div onClick={()=> setOption("ppt")} className={`rounded-lg hover:bg-gray-600 cursor-pointer flex justify-center items-center bg-gray-500 h-40 w-40 text-white text-3xl ${option === "ppt"? "border-2 border-white": null}`}>
                    <h1>PPT</h1>
                </div>
                <div onClick={()=> setOption("website")} className={` rounded-lg hover:bg-gray-600 cursor-pointer flex justify-center items-center bg-gray-500 h-40 w-40 text-white text-3xl ${option === "website"? "border-2 border-white": null}`}>
                    <h1>WEBSITE</h1>
                </div>
            </div>
            <div className='flex gap-2'>
                <input onChange={(e) => setInput(e.target.value)} type="text" name="prompt" id="prompt" className='outline-none focus:ring-2 focus:ring-red-500  text-lg font-semibold p-3 rounded-lg bg-white text-gray-700'/>
                <button onClick={handleSubmit} className='p-3 bg-red-500 rounded-md text-white text-center'>Generate</button>
            </div>
        </div>
    )
}

export default Home