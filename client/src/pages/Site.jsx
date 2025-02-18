import React, { useEffect, useState, useContext } from 'react'
import {commonContext} from '../context/utilContext'
import axios from 'axios'


const Site = () => {
    const [loading, setLoading] = useState(false);
    const {prompt, setPrompt} = useContext(commonContext);
    

    useEffect(() => {
        setLoading(true);
        async function makeSite() {
            const result = await axios.get(`http://localhost:3000/gen-site?prompt=${prompt}`);
            console.log(result);
            console.log(JSON.parse(result.data.data));
        }
        makeSite()
        setLoading(false);
    }, []);

    if(loading) {
        return (
            <div className="bg-black h-full w-full flex flex-col gap-2 justify-center items-center text-white">
                <div className="bg-white w-8 h-8 animate-spin"></div>
                <h1>Generating...</h1>
            </div>
        )
    }

    return (
        <div>Site</div>
    )
}

export default Site