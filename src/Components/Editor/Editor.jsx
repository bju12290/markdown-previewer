import React from 'react'
import './Editor.css'

export default function Editor(props) {
    return (
        <div className="editor--container form-floating">
            <textarea 
                className="editor--textarea form-control" 
                placeholder="" 
                id="editor" 
                value={props.editorContent}
                onChange={(value) => props.setEditorContent(value.target.value)}
                />

            <label htmlFor="editor">Markdown Editor</label>
        </div>
    )
}