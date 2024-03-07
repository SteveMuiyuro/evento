import TransactionItem from "./TransactionItem";

export default function TransactionList({apiData}) {
  return (
    <div className="border-gray-400 border-2 h-[600px] mr-10 rounded-md p-5"  >

      <h2 className="text-center font-semibold">Transaction History</h2>


      {apiData.map(api =>
      <TransactionItem key={api["transaction_id"]}  api={api}/>
        )}


      </div>
  )
}
