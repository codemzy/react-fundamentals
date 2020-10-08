// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {

    // // extra 1
    // const inputRef = React.useRef(null);

    // // extra 2
    // const [error, setError] = React.useState(null);

    // extra 3
    const [username, setUsername] = React.useState('');

    function handleChange(event) {
        const value = event.target.value;
        setUsername(value.toLowerCase());
    };

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).

  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  };

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" value={username} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
