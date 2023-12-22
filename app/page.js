'use client';
import FrontCard from "@/components/FrontCard";
import BackCard from "@/components/BackCard";
import { useState,useEffect } from 'react'

export default function Home() {
  const [frontcard,setFrontCard]=useState([])
  const [backcard,setBackCard]=useState([])

  useEffect(() => {
    try{
    const fetchApi=async()=>{
        const url=`https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e`
        const resp=await fetch(url)
        // console.log(resp.json)
        const respData=await resp.json()
        // console.log(respData[0])
        // console.log(respData[1])
          setFrontCard(respData[0])
          setBackCard(respData[1])

        // setcard(respData)    
    }
    fetchApi();
    }
    catch(err){
        console.log(err)
    }
}, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="box lg:w-1/2 sm:w-full">
          <div className="lg:flex">
            <div className="front">
              {frontcard !='' &&
              <FrontCard GameData={frontcard}/>
              }
            </div>
            <div className="back">
              {backcard !='' &&
                <BackCard GameData={backcard}/>
              }
            </div>  
          </div>
        </div>
    </main>
  )
}
