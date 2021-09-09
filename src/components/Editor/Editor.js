import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function EditorComp() {
  const [content, setContent] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setContent(
      editorState,
    );
  };

  return (
    <div>
      <Editor
        editorState={content}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(content.getCurrentContent()))}
      />
    </div>
  );
}

export default EditorComp;
