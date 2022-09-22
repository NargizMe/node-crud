import { useState } from 'react';


function Products() {
  return (
    <>
    <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            suppliers && suppliers.map((item, key) => {
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={() => handleEdit(item.id)}>Edit</button></td>
                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Products
