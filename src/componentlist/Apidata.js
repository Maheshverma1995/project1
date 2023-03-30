import axios from 'axios';
import React from 'react'
import { useState } from 'react'


function Myaxiosdata() {
    const [apivariable, apifunction] = useState([]);


    const apidata = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            apifunction(res.data);

        })
    }
    return (
        <div>
            <button type='button' onClick={apidata} > apidata</button>
            <div className='container'>
                <div className='row'>
                    {apivariable.map((a) => {
                        return (
                            <div className='col-md-6'>
                                <section className='border m-1,p-1'>
                                    <h1>{a.id}</h1>
                                    <h3>{a.userId}</h3>
                                    <h5>{a.title}</h5>
                                    <p>{a.body}</p>
                                </section>
                            </div>
                        )
                    }
                    )}
                </div>

            </div>
        </div>
    )
}

export default Myaxiosdata
