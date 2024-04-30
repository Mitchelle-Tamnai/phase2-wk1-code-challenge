import React from "react";
  

function Search({transactions, setTransactions}) {

    function filterItems(event){
        const change = event.target.value
         
        if (change.length > 0) {
            
            const filter = transactions.filter(transactions => {
                return transactions.category.toLowerCase().includes(change.toLowerCase())
            })
    
            setTransactions([...filter])
    
        } else {
            setTransactions([...transactions])
            
        }
    }

    return(
        <div className="p-3">
            <input onChange={filterItems} className="form-control me-2" type="search" placeholder="Search for Recent Transactions"/>
        </div>
    )
    
}

export default Search