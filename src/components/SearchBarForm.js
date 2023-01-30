import { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:8080/foodplace"

const SearchBarForm = ({filterRestaurants}) => {

    const [userInputs, setUserInputs] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        filterRestaurants(userInputs)
    }



    return (
        <>
        <form onSubmit={handleFormSubmit}>
        <input 
        type="search" 
        placeholder="Enter Food Type" 
        onChange={event => setUserInputs(event.target.value)}
        value={userInputs}/>
        <button  type="submit"
                value="submit"> 
                Submit </button>
        </form>
        </>
    )
}

export default SearchBarForm;