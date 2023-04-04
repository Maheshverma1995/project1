import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Detailspage() {
    const [x ,y] = useState({});
    let { id } = useParams();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            console.log(res.data);
            y(res.data);
        })
    }, [])

    return (
        <div className='container bg-light shadow mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <Link class="btn btn-primary" to={`/apidata`}>Back</Link>
                </div>
                <div className='col-12'>
                    <h1>{x.id}</h1>
                </div>
                <div className='col-12'>
                    <h1>{x.userId}</h1>
                    <h4>{x.title}</h4>
                    <p className='text-info'>{x.body}</p>
                </div>
            </div>
        </div>
    )

}

export default Detailspage
