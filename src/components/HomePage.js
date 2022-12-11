import React from 'react'
import PageRow from './PageRow';

export default function HomePage({ pageList, onCreate, onDelete }) {
    return (
        <div className="container bg-body p-5">
            <div className="row text-center">
                <div className="col p-0">
                    <h2>Books I've read in 2022</h2>
                </div>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-dark btn-lg" onClick={onCreate}>Create Book Log</button>
            </div>
            { pageList.map(page => <PageRow key={page.id} page={page} onDelete={onDelete} />)}
        </div>
    )
}