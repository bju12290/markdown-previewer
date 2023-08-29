import React from 'react'
import './Previewer.css'
import { marked } from 'marked';
import Markdown from 'marked-react';

export default function Previewer(props) {

    marked.setOptions({
        breaks: true
      })

    return (
        <div className="previewer--container form-floating" id="preview">
            <label className={props.editorContent === "" ? "" : "previewer--contentful"} htmlFor="preview">Preview</label>
            <div className="previewer--paragraph">
                <Markdown gfm={true} breaks={true}>{props.editorContent}</Markdown>
                </div>
        </div>
    )
}