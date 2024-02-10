import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const recordsToShow = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage)
  const pageNumber = [...Array(nPage + 1).keys()].slice(1)


  // console.log(pageNumber)
  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPage = () => {

    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1)
    }
  }
  const changePage = (id) => {
    setCurrentPage(id)
  }

  return (
    <>
      <h1>Learn Pagination in React</h1>
      <table style={{ border: 'collapse' }}>
        <thead>
          <tr>
            <th>id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>

          {recordsToShow.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
          {currentPage > 1 ? 
        <li onClick={prevPage} style={{ width: 'max-content', backgroundColor: 'white', height: 'max-content', color: 'black', borderRadius: "10px", padding: '4px' }}>PrevPage</li> : ''  
        }
          {pageNumber.map((num, i) => (
            <li key={i} onClick={() => changePage(num)}
              style={currentPage === num ? { backgroundColor: 'red', width: '30px', height: 'max-content', borderRadius: "50%" } : { color: '' }}
            >{num}</li>
          ))}
         {currentPage < pageNumber.length ?  <li onClick={nextPage} style={{ width: 'max-content', backgroundColor: 'white', height: 'max-content', color: 'black', borderRadius: "10px", padding: '4px' }}>NextPage</li> : ''}
        </ul>
      </div>
    </>
  );
}

export default App;
