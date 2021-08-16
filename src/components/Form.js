import React from 'react'

function FormContainer(props) {


    const handleSubmit=props.submit
    return (
       <form  className="formcontainer"onSubmit={handleSubmit}>
           <input type="text" placeholder="city......."></input>
           <input type="text" placeholder="country....."></input>
           <button type="submit"> Get Weather</button>
           
       </form>
    )
}

export default FormContainer
