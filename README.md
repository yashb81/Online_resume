
This repository includes the following files:

Mandatory: 
* **index.html**: The main HTML document. It contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: It contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. 
* **js/resumeBuilder.js**: The javascript code for the interactive resume. 
* **js/jQuery.js**: The jQuery library. 
* **css/style.css**: It contains all of the CSS.
* **README.md**: Explains the process of how the resume was written.
* **images**: Contains the images of the repository. 

Additional: 
* **js/asteroids.min.js**: The javascript for an easter egg, a game based interactivity written in javascript. Look out for Fry's spaceship and help him to defend the galaxy!


### I went through the following process:
* The resume has four distinct sections: work, education, projects and a header with biographical information. 
* The JSONs are structured according to the requirements and have been tested using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.
* The javascript iterates through each JSON and append its information to index.html in the correct section.
* The resume includes an interactive map. 
* Update: The code for adding elements to the resume is within functions. And all of the functions are now encapsulated within the same objects containing the resumes data. 
* The resume holds `console.log()` information about click locations. 
