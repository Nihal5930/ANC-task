import { useState,useEffect } from 'react'


export default function Modal(props) {
  // console.log(props.getData)
    const [showModal, setShowModal] =useState(false);
    const [insertData,setInsertData]=useState({})
    const [renderTable, setRenderTable] = useState(false);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const nameChange = (event) => {
      setName(event.target.value);
    };
    const ageChange = (event) => {
      setAge(event.target.value);
    };

    const addRow=()=>{
      // console.log(age)     
      props.data.players.unshift(insertData)
      
    }
    // console.log(renderTable)
    if(renderTable){
      props.getData(renderTable)
      setShowModal(false)
    }
    useEffect(() => {
      setInsertData({name:name, age:age })
      }, [name,age])
    return (
      <>
        <button type="button" onClick={() => setShowModal(true)}>
          <svg viewBox="0 0 24 24" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="#bfbfc0"></path> </g></svg>
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-96  my-6 mx-auto max-w-96">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h5 className="text-3xl font-semibold">
                      Add Player
                    </h5>
                    <button className=""
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div> 
                  <div className="relative p-8 lg:flex">
                    <label htmlFor="Name" className="block text-sm m-2 font-medium leading-6 text-white">Name</label>
                    <div className="m-2">
                        <input type="text" name="Name" id="Name" onChange={nameChange} value={name}  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>

                    <label htmlFor="Age" className="block m-2 text-sm font-medium leading-6 text-white">Age</label>
                    <div className="m-2">
                        <input type="number" name="Age" id="Age" onChange={ageChange} value={age}  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-emerald-300 text-white active:bg-emerald-400 font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={()=>{addRow();setRenderTable(true)}}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
    </>
  )
}
