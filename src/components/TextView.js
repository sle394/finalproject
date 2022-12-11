import React from 'react'

export default function TextView({ section, onUpdate }) {
    return (
        <div className="row">
            <div className="col">
                <textarea className="form-control" value={section.content}/>
            </div>
        </div>
    )
}