import React from 'react';
import './App.css';
import {HTMLTable} from '@blueprintjs/core'

function App() {
  return (
    <div className="App">
      <HTMLTable striped={true} bordered={true}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Evan</td>
            <td>Feenstra</td> 
            <td>30</td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>Shmoe</td> 
            <td>31</td>
          </tr>
          <tr>
            <td>Josh</td>
            <td>Aharonoff</td> 
            <td>30</td>
          </tr>
        </tbody>
      </HTMLTable>
    </div>
  );
}

export default App;
