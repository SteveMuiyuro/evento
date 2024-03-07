export default function Form({setFormData, formData}) {


 const handleSubmit = (e) => {
  e.preventDefault()
  postData()
  clearForm()
}


const clearForm = () => {
  setFormData({
    "account-id" : "",
    "amount" : ""
  })

}

 const postData = async () => {
 try{
   await fetch("https://infra.devskills.app/api/accounting/transaction", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData)
   })
 }
 catch(error){
      return error
 }
}






const handleChange = (e)=> {
  const { dataset, value} = e.target
  setFormData(prev => ({...prev, [dataset.type]:value}))

}






  return (

<form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
      <h2 className="text-center font-semibold">Submit New Transaction</h2>
      <div className="flex flex-col">
        <label htmlFor="accountid">AccountID</label>
        <input className="outline-none h-10 px-4 bg-black/10 rounded-md"id="accountid" data-type="account-id" onChange={handleChange} value={formData["account-id"]}/>
      </div>

      <div className="flex flex-col">
        <label htmlFor="accountid">Amount</label>
        <input  className="rounded-md outline-none h-10 px-4 bg-black/10 border-black" data-type="amount" required onChange={handleChange} value={formData.amount}/>
      </div>

  <input  className="bg-gray-600 h-10 rounded-md cursor-pointer" data-type="transaction-submit" type="submit"/>

</form>
  )
}
