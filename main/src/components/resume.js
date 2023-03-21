import React from "react";

const Resume = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h3>Download a PDF file of my resume here</h3>
                <button onClick={onButtonClick}>
                    Download Resume
                </button>
            </center>
        </>
    );
};

export default Resume;
