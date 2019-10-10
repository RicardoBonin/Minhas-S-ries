import React, { useState, useEffect} from 'react'
import axios from 'axios'
const Generos = () => {
const [data, setData] = useState([])
useEffect(() => {
    axios
        .get('/api/genres')
        .then(res => {
            setData(res.data.data)
        })
}, [])
    return (
        <div>
            <h1>Generos</h1>
            <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
            <pre>{JSON.stringify(data)} </pre>
        </div>
    )
  }
export default Generos