import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("Text is converted to Uppercase","success");
    }
    const handleloClick = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
        props.showAlert("Text is converted to Lowercase", "success");
    }
    const handleOnClick = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        let NewText = "";
        setText(NewText);
        props.showAlert("Text is cleared", "success");
    }
    const handleSpaceClick = (event) => {
        // setText(text.trim());   wrong way 
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces from text are removed", "success");
    }
    const handleCopyToClipboard = (event) => {
        let txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Copied to clipboard", "success");
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnClick} style={{ backgroundColor: props.mode === 'dark' ? '#1e374a' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8">

                    </textarea>
                    {/* onchange is used in texarea so that we the user can write in the text box and the text variable can be updated. */}

                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpaceClick}>Remove Extra spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard}>Copy to clipboard</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>expected time to read: {0.008 * text.split(" ").length} minutes </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ?text : "Enter something in the text box to preview it. "}</p>
            </div>

        </>
    )
}


