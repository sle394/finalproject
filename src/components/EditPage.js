import React from 'react'
import { useParams } from 'react-router-dom';
import TextEdit from './TextEdit';
import HeadingEdit from './HeaderEdit';

export default function EditPage({ pageList, sectionList, onUpdatePage, onCreateSection, onUpdateSection }) {
    const params = useParams();
    const pageId = params.pageId;

    const page = pageList.find(page => page.id === pageId)
    const pageSections = sectionList.filter(section => section.pageId === pageId);

    return (
        
        <div className="container bg-body p-5">
            <div className="row">
                <div className="col my-3">
                    <HeadingEdit page ={page} onUpdate={onUpdatePage} />
                </div>
            </div>
            { pageSections.map(section => <TextEdit section={section} key={section.id} onUpdate={onUpdateSection} /> )}
        </div>
    )
}