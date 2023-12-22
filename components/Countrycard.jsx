import { useState,useEffect } from 'react'
import PlayerTable from './PlayerTable'
import Modal from './modal'


export default function Countrycard(props) { 
  // console.log(props.data)
  const[team,setTeam]=useState([])
  useEffect(() => {
    setTeam(props.data)
    }, [])
    const [resData,setResData]=useState(false)

    const getData=(resData)=>{
      // setTeam(props.data,resData)
      setResData(resData)
    }
  return (
    <>
      {
        team.map((data,key) => (
        <div key={key} className="relative overflow-x-auto">
            <section className="bg-gray-50 dark:bg-gray-900 flex items-center">
              <div className=" px-0 mx-auto lg:px-0 w-full">
                <div className="relative bg-white shadow-md dark:bg-gray-800">
                  <div className="flex  items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2 text-left">
                      <h5>Team:- {data.team_name}</h5>
                    </div>
                      <Modal data={data} getData={getData}/>
                  </div>
                </div>
              </div>
            </section>
            <PlayerTable player={data.players}/>
        </div> 
        ))}
    </>
  )
}
