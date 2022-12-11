import React from 'react'

export default function TextEdit({ section, onUpdate }) {
    return (
        <div className="row">
            <div className="col">
                <textarea className="form-control" defaultValue={section.content} onChange={(event) => onUpdate({ content: event.target.value }, { section })}/>
            </div>
        </div>
    )
}