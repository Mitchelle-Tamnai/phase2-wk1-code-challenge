import React,{useState} from "react";
import Button from "./Button";
import Row from "./Row";


function Form({transactions, setTransactions}) {
    const [newTransaction, setNewTransaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
})

    function handleSubmit(event) {
        event.preventDefault()
        setTransactions([...transactions, newTransaction])

        setNewTransaction({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
        
    }

    function handleChange(event) {

        const { name, value } = event.target;
        setNewTransaction(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="container-fluid">
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="date" onChange={handleChange} value={newTransaction.date} placeholder="" name="date"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" onChange={handleChange} value={newTransaction.description} placeholder="Description" name="description"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" onChange={handleChange} value={newTransaction.category} placeholder="Category" name="category"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" onChange={handleChange} value={newTransaction.amount} placeholder="Amount" name="amount"/>
            </div>
            <Button onClick={handleSubmit} label="Submit"/>
        </form>
        <div className="row mt-4">
                {transactions.map((transaction, index) => (
                    <Row key={index} transaction={transaction} />
                ))}
        </div>
    </div>

    )
    
}

export default Form