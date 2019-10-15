import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const InfoSerie = ({ match }) => {
    const [name, setName] = useState('')
    const [success, setSuccesse] = useState(false)

    const [data, setData] = useState ({})
    useEffect(() => {
        axios.get('/api/series/' + match.params.id)
        .then(res => {
            setData(res.data)
        })
    }, [match.params.id])

    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .post('/api/series', {
            name
        })
        .then(res => {
            setSuccesse(true)
        })
    }
    if(success) {
        return <Redirect to='/series' /> 
    }
    return (
        <div>
        <header>
            <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)'}}>
            
            </div>
        </header>
        <div className='container'>
                <h1>Nova série</h1>
                <pre>{JSON.stringify(data)}</pre>
                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Nome</label>
                        <input type='text' onChange={onChange} className='form-control' id='name' placeholder='Novo Gênero' />
                    </div>
                    <button type='button' onClick={save} value={name}  className='btn btn-primary'>Salvar</button>
                </form>
            </div>
        </div> 
    )
}

export default InfoSerie