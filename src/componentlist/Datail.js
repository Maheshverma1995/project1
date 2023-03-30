import React from 'react'
import { Link } from 'react-router-dom';

function Datail() {
    const mydata = [
        {
            ids: 1,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 2,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 3,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 4,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 5,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 6,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 7,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 8,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
        {
            ids: 9,
            name: 'picname1',
            url: 'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
            title: 'pppppppppppppppp',
            pragraph: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
        },
    ];


        return (
            <div className='container-fluid'>
                <div className='row'>
                    {
                        mydata.map((u) => {
                            return (
                                <div className='col-md-3'>
                                    <div className="card">
                                        <img src={u.url} alt="noimage" />
                                        <div className="card-body">
                                            <h5 className="card-title">{u.title}</h5>
                                            <p className="card-text">{u.pragraph}</p>
                                            <Link to="#" className="btn btn-primary">{u.ids},{u.name}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        )
    }

export default Datail
