import React from 'react'
import TextEdit from './TextEdit'

export default function HeaderEdit({ page, onUpdate}) {
    return (
        <div className="row">
            <div className="col">
                <textarea className="form-control" defaultValue={page.title} onChange={(event) => onUpdate({ title: event.target.value }, { page })}/>
            </div>
        </div>
    )
}