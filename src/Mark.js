import React, { useState } from 'react'
import './Mark.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';


function Mark() {
  const [text,setText] = useState(`Enter Text Here`)
  return (
    <>
    <div className='MainC'>
        <h2>Text</h2>
        <h2>Markdown</h2>
    </div>
    <div className='MainD'>
        <textarea rows={40} onChange={e => setText(e.target.value)} >{text}</textarea>
        <div className='MainE'>
            <pre>
                <ReactMarkdown children={text}  remarkPlugins={[remarkGfm]} />
            </pre>
        </div>
        
    </div>
    </>
  )
}

export default Mark