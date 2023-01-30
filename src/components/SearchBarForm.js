import { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:8080/foodplace"

const SearchBarForm = () => {

    const [userInputs, setUserInputs] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let userInput = event.target.value;
        console.log("button has been clicked")

        
    }

    useEffect(() => {
        fetch (`${SERVER_URL}/foodtype?foodType=`)
    })




    return (
        <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter Food Type"/>
        <button type="submit"> Submit </button>
        </form>
    )
}

export default SearchBarForm;