export default function TransactionItem(api) {

  return (
    <div
        data-type="transaction"
        data-account-id="${transaction-account-id}"
        data-amount="${transaction-amount}"
        data-balance="${current-account-balance}"
        className=" flex border-2 rounded-md border-gray-300 m-5 w-[600px] h-[100px]"

        >

    <div className="flex flex-col justify-center items-center px-5">
      {api.api.amount < 0 ? (
          <>
          <p>{`Sent $ ${api.api.amount} to ${api.api.account_id}`}</p>
          <p>{`The current balance is $ ${0 + api.api.amount}`}</p>

          </> ):

          (
          <>
          <p>{`Received $ ${api.api.amount} from ${api.api.account_id}`}</p>
          <p>{`The current balance is $ ${0+ api.api.amount}`}</p>

          </>

     )

      }
    </div>


  </div>
  )
}
