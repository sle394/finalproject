import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PageRow({ page, onDelete}) {
    const navigate = useNavigate();

    return (
        <div className="row border my-3 border-3">
            <div className="col">
                <h4>{ page.title }</h4>
            </div>
            <div className="col text-end py-3">
                <button className="btn btn-success mx-1" onClick={() => navigate(`/pages/${page.id}/view`)}>View Book</button>
                <button className="btn btn-primary mx-1" onClick={() => navigate(`/pages/${page.id}/edit`)}>Edit Book Details</button>
                <button className="btn btn-danger mx-1" onClick={() => onDelete(page.id)}>Delete Book</button>
            </div>
        </div>
    )
}