import React from 'react'
import { useParams } from 'react-router-dom'
import TextView from './TextView';
import HeadingView from './HeadingView';

export default function ViewPage({ pageList, sectionList }) {
    const params = useParams();
    const pageId = params.pageId;

    const page = pageList.find(page => page.id === pageId)
    const pageSections = sectionList.filter(section => section.pageId === pageId);

    return (
        <div className="container bg-body p-5">
            <div className="row">
                <div className="col">
                    <h2>{ page.title }</h2>
                </div>
            </div>
            { pageSections.map(section => (section.type === "text") ? <TextView section={section} key={section.id} /> : <HeadingView section ={section} key={section.id} /> )}
        </div>
    )
}