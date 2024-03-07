
import { useState, useEffect } from 'react';
import Form from '../components/Form';
import TransactionList from '../components/TransactionList';


export default function Home() {

  const [formData, setFormData] = useState({
    "account-id":"",
    "amount":""
  })

  const [apiData, setApiData] = useState([])

  useEffect(()=>{

    const controller = new AbortController();
    const signal = controller.signal;

    async function  fetchData(){

     const res = await  fetch("https://infra.devskills.app/api/accounting/transactions", {signal})
     if(!res.ok){
      throw new Error("There was an issue fetcjing data")
     }
     const data = await res.json()

     setApiData(data.slice(0,4))

    }

    fetchData()

    return () => controller.abort();

  }, [])

  console.log(apiData)

  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center min-h-[700px] w-[1100px] border-gray-400 border-2 rounded-md gap-10">
            <div className="max-w-[400px] px-10">
             <Form setFormData={setFormData} formData={formData}/>
            </div>
            <div className="flex-1">
            <TransactionList apiData={apiData}/>
            </div>


        </div>
    </div>
  )
}
