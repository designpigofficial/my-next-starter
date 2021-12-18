export default function MyForm() {
  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    const res = await fetch(
         'https://hooks.zapier.com/hooks/catch/123456/abcde',
         {
           body: JSON.stringify({
             name: event.target.name.value
           }),
           headers: {
             'Content-Type': 'application/json'
           },
           method: 'POST'
         }
       )

       const result = await res.json()
       // result.user => 'Ada Lovelace'
     }
  }
  return (
    <form action="http://www.acme.com/register" method="POST">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  )
}
