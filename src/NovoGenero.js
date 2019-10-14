import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGeneros = () => {
    const [name, setName] = useState('')
    const [success, setSuccesse] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .post('/api/genres', {
            name
        })
        .then(res => {
            setSuccesse(true)
        })
    }
    if(success) {
        return <Redirect to='/generos' /> 
    }
    return (
       <div className='container'>
            <h1>Novo Gênero</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' onChange={onChange} className='form-control' id='name' placeholder='Novo Gênero' />
                </div>
                <button type='button' onClick={save} value={name}  className='btn btn-primary'>Salvar</button>
            </form>
       </div> 
    )
}

export default NovoGeneros
