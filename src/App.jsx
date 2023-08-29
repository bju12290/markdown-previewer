import { useState } from 'react'
import Editor from './Components/Editor/Editor.jsx'
import Previewer from './Components/Previewer/Previewer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [editorContent, setEditorContent] = useState(`
  # Here's a Heading

  ---

  ## Here's a Smaller Heading

  ---

  ### And Even Smaller

  ---

  Magic Handled by [marked-react](https://github.com/sibiraj-s/marked-react)

  ---

  \`<div>Some Inline Code</div>\`

  ---

  \`\`\`
  <div>
    <p>A Block of Code</p>
  </div>
  \`\`\`

  ---

  * Here's a List
  * Of Some Random
  * Things
  
  ---

  1. We've Got Numbers Too
  1. You can be extra lazy and just spam 1s
  1. Just like I did here!

  ---
  The quote

  > Somewhere, something incredible is waiting to be known
  
  has been ascribed to Carl Sagan.

  ---

  **Selfie Monkey**

  ![Selfie Monkey](https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg)
  `)

  return (
    <>
      <Editor editorContent={editorContent} setEditorContent={setEditorContent}/>
      <Previewer editorContent={editorContent}/>
    </>
  )
}

export default App
