'use client';
import { useState,useEffect } from 'react'
import Countrycard from './Countrycard';


export default function FrontCard(props) {
    // console.log(props.GameData)
    const[game,setGame]=useState([])
    const [teamData,setTeamData]=useState(props.GameData.teams)
    useEffect(() => {
        setGame(props.GameData.game)
    }, [])
const card = document.querySelector('.front');
const card2 = document.querySelector('.back');
const rotate=()=>{
  card.style.transform = 'rotateY(-180deg)','perspective(1000px)';  
  card2.style.transform = 'rotateY(0deg)','perspective(1000px)';  
}
  return (
    <>
    <div className='flex justify-between'>
      <h5 className="mb-2 m-3 text-3xl font-bold text-gray-900 text-center dark:text-white">{game} Players</h5>
      <div className="text-center m-2">
        <button onClick={rotate} className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2">
          Cricket Player
        </button>
      </div>
    </div>
    <div className="w-full p-4 lg:flex justify-around text-center bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <Countrycard data={teamData}/>
    </div>
    </>
  )
}
