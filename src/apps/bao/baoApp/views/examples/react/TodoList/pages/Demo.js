import React, { useState, useEffect } from 'react';
import { authorData } from './authors'

function Demo() {

  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const copyAuthors = authorData.data.map((item) => item.attributes)
    const sortedData = sortByLastName(copyAuthors)
    console.log('copyAuthors', copyAuthors)
    console.log('sortedData', sortedData)
    setAuthors(sortedData)
  }, [])

  const sortByLastName = (data) => {
    // return data.sort((a, b) => parseInt(a.lastName) - parseInt(b.lastName))
    return data.sort((a, b) => a.lastName.localeCompare(b.lastName))
  }
  // kcooke@kqed.org

  const showAuthorsEle = () => authors.map((item, index) => {
      return (
        <tr key={index}>
          <th>
            {item.firstName}
          </th>
          <th>
            {item.lastName}
          </th>
          <th>
            {item.email}
          </th>
        </tr>
      )
  })
  
  return (
    <>
      <h2>Demo</h2>
      <table>
        <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {showAuthorsEle()}
        </tbody>
      </table>

    </>
  );
}

export default Demo;
