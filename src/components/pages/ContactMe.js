import { useState } from "react";


function ContactMe() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }


  function EmptyReminder() {
    return <span>Please enter you message.</span>;
  }

  function MessageReminder() {
    const isEmpty = inputs.message;
    if (!isEmpty) { return <EmptyReminder />}}

  return (
    <form onSubmit={handleSubmit} className='pl-6 ml-6'>
      <label className="align-self-start">Username:
      <input 
      className="w-100"
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        placeholder='John Doe'
      />
      </label>
      <br/>
      <br/>
      <label className="align-self-start">Email:
        <input 
        className="w-100"
          type="email" 
          name="Email" 
          value={inputs.Email || ""} 
          onChange={handleChange}
          placeholder='e.g. mail@email.com'
        />
        </label>
        <br/>
        <br/>
        <label className="align-self-start">Message:
        <textarea
        className="w-100"
          type="text" 
          name="message" 
          value={inputs.message || ""} 
          onChange={handleChange}
          placeholder='Enter message here' 
          
        />
        </label>
        <br/>
        <MessageReminder isEmpty={true}/>
        <br/>
        <input className="col-2 ml-6" type="submit" />
    </form>
  )
}

export default ContactMe;