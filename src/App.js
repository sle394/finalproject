import React from 'react'
import {useState} from 'react';
import { TEST_PAGES, TEST_SECTIONS } from './TEST_DATA'
import { v4 as uuid } from 'uuid'
import { Route, Routes } from 'react-router-dom'
import TopNav from './components/TopNav';
import HomePage from './components/HomePage';
import EditPage from './components/EditPage';
import ViewPage from './components/ViewPage';

function App() {
  const [pageList, setPageList] = useState(TEST_PAGES)
  const [sectionList, setSectionList] = useState(TEST_SECTIONS)

  //create page
  const createPage = () => {
    const newPage = {
      id: uuid(), //generates a unique string id
      title: "Untitled"
    }
    setPageList([...pageList, newPage])
    createSection({type: "text", pageId: newPage.id, content : ""  })
  }

  //delete page
  const deletePage = (idToDelete) => {
    setPageList(pageList.filter(page => page.id !== idToDelete))
  }

  //update page
  const updatePage = (title, page) => {
    page = page.page;
    page.title = title.title;
  }

  //create section
  const createSection = (sectionData) => {
    const newSection = {
      id: uuid(), //generates a unique string id
      ...sectionData
    }
    setSectionList([...sectionList, newSection])
  }

  //delete section
  const deleteSection = (idToDelete) => {
    setSectionList(sectionList.filter(s => s.id !== idToDelete))
  }

  //update section
  const updateSection = (content, section) => {
    console.log("update section debug");

    section = section.section;
    section.content = content.content;
  }


  return (
    <div>
      <TopNav/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage pageList={pageList} onCreate={createPage} onDelete={deletePage} />}/>
          <Route path="/pages/:pageId/edit" element={<EditPage pageList={pageList} sectionList={sectionList} onUpdatePage={updatePage} onCreateSection={createSection} onUpdateSection={updateSection} />} />
          <Route path="/pages/:pageId/view" element={<ViewPage pageList={pageList} sectionList={sectionList} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
