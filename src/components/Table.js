import React, {useState} from "react";
import Search from "./Search";
import Form from "./Form";
import Row from "./Row";

const myTransactions = [
    {
        date: "2024-01-05",
        description: "Paycheck from YouTube",
        category: "Income",
        amount: "50,000.00"

    },
    {
        date: "2024-03-29",
        description: "Phillips Airfryer",
        category: "Electronics",
        amount: "5,000.00"

    },
    {
        date: "2023-12-11",
        description: "Shopping Spree at Harrods",
        category: "Fashion",
        amount: "125,000.00"

    },
    {
        date: "2023-12-31",
        description: "Uber Payments",
        category: "Transportation",
        amount: "10,000.00"

    },
    {
        date: "2023-12-17",
        description: "Burna Boy's London concert",
        category: "Entertainment",
        amount: "30,000.00"

    }
]


function Table() {
   
    const [transactions, setTransactions] = useState(myTransactions)

    return (
        <>
            <Search transactionArr={myTransactions} transactions={transactions} setTransactions={setTransactions} />
            <Form transactions={transactions} setTransactions={setTransactions}/>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <Row transactions={transactions}/>
                </tbody>
            </table>
        </>
    )
}

export default Table