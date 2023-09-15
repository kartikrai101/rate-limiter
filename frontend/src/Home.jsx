import {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {

    const [number, setNumber] = useState(-1);
    const [luckNumber, setLuckNumber] = useState(-1);
    const [result, setResult] = useState(false);
    const [overheat, setOverheat] = useState(false);

    const handleClick = () => {
        const num = Math.floor(Math.random()*10);
        console.log(num);
        setNumber(num);
    }

    const handleLuck = async () => {
        const num = Math.floor(Math.random()*10);
        console.log(num);
        setLuckNumber(num);

        await axios.get('http://localhost:8000/ping',{
            headers: {
                user_id: 2
            }
        })
        .then(res => {
            setOverheat(false);
            console.log("Cool!")
        })
        .catch(err => {
            setOverheat(true);
            console.log("Server hot!");

            // run the countdown clock
            setTimeout(() => {
                setOverheat(false);
            }, 60*1000);
        })

        if(number === luckNumber && overheat==false){
            setResult(true);
        }else{
            //console.log(response);
            setResult(false);
        }
    }

    return (
        <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center">
            <div className="mt-[0]">
                <p className="font-semibold text-[42px]">rateLimiter</p>
            </div>

            {
                overheat ? (
                    <div>
                        <p className='text-[18px] font-medium'>Sorry for the inconvinience! Over servers need to cool down! <span className='scale-[2]'>🧊</span></p>
                    </div>
                ) : null
            }

            {
                number === -1 && !overheat ? (
                    <div className="mt-[30px] w-[250px] flex justify-center transition-all bg-[#023e8a] rounded-[10px] h-[50px] hover:shadow-2xl hover:scale-[1.1] ">
                        <button onClick={() => handleClick()} className="text-white font-medium">Generate my lucky number</button>
                    </div>
                ) : null
            }

            {
                number !== -1 && !overheat ? (
                    <div className='mt-[30px] flex flex-col items-center'>
                        <div className='border-[1px] border-grey rounded-[5px] px-[10px] py-[4px]'>
                            <p className='text-[18px] font-medium'>Your lucky number is {number}</p>
                        </div>
                        <div className="mt-[30px] w-[250px] flex justify-center transition-all bg-[#023e8a] rounded-[10px] h-[50px] hover:shadow-2xl hover:scale-[1.1] ">
                            <button onClick={() => handleLuck()} className="text-white font-medium">Check my luck!</button>
                        </div>
                    </div>
                ) : null
            }

            {
                number === -1 && !overheat ? null : (result === true && !overheat ? (
                    <div className='mt-[10px] text-[18px] font-medium'>
                        <span className='text-[#2b9348] font-medium'>Congratulations!</span> You just moved to the next level ⚡
                    </div>
                ) : ( !overheat ?
                    <div className='mt-[10px]'>
                        <span className='text-[#d00000] font-medium'>You got {luckNumber}!</span> Might wanna try again! 🦭
                    </div> : null
                ))
            }
        </div>
    )
}

export default Home;