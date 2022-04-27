import { useState } from "react";


function ContactMe() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
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
    if (!isEmpty) { return <EmptyReminder /> }
  }

  return (
    <div className="container  align-items-start">
      <br/>
      <form onSubmit={handleSubmit} className='container h-75'>
        <label className="align-self-start w-25">Username:
          <input
            className="w-100"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            placeholder='John Doe'
          />
        </label>
        <br />
        <br />
        <label className="align-self-start w-25">Email:
          <input
            className="w-100"
            type="email"
            name="Email"
            value={inputs.Email || ""}
            onChange={handleChange}
            placeholder='e.g. mail@email.com'
          />
        </label>
        <br />
        <br />
        <label className="align-self-start w-25">Message:
          <textarea
            className="w-100 v-100"
            type="text"
            name="message"
            value={inputs.message || ""}
            onChange={handleChange}
            placeholder='Enter message here'
            required='true'

          />
        </label>
        <br />
        <MessageReminder isEmpty={true} />
        <br />
        <br />
        <input className="col-2 ml-6" type="submit" />
      </form>
    </div>
  )
}

export default ContactMe;