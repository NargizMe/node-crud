import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            suppliers && suppliers.map((item, key) => {
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
