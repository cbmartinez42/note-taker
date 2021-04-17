# Note Taker

This is an application to create reminder notes utilizing Express.js, JavaScript, and Node

Link to deployed site: [https://glacial-sands-34212.herokuapp.com/](https://glacial-sands-34212.herokuapp.com/)  
Screenshot of sample: <img src="./assets/images/note-taker-sample.PNG">    


## Features
* Utilizes JavaScript, Express.js and Node.js to provide a simple user interface
    * Utilizes Node.js as the runtime environment
    * Utilizes Express.js for http functionality
    
* Utilizes separate routes for HTML and API paths
* Incorporates json database file to store persisting input from the user

### Challenges
* The biggest challenge overall was in handling the data going to and from the `db.json` file, such as when to parse it and how to manipulate the data with JavaScript and the `fs` package to enable read/write functionality. 
* In addition, deleting notes was a unique learning experience as there are multiple ways to handle this. I found that by utilizing more arguments in the `splice` method than I had previously, I was able to achieve the desired results in an efficient way. 


## Credits
Many thanks to the below individuals who provided input and suggestions
* Mim Armand
* Stephen Simone
* And last, but not least - *Grogu*
        
<img src="./assets/images/grogu.png">


If any additional issues are found, or if there are any suggestions for improvement, please send an email to developer Chris Martinez at cbmartinez42@gmail.com

---

### <ins>Installation</ins>
1.  Clone or download .zip file from Github to your local computer
2.  In Git Bash or Terminal, type `npm install` to install the necessary modules
3.  When ready, type `node .` to launch `server.js`

#### <ins>Cloning</ins>
1. From Github, select the "Code" button, choose either HTTPS or SSH as appropriate
2. Click the copy button <img src="./assets/images/copy-button.PNG"> to add it to your clipboard
3. In your preferred command line (terminal, bash, etc), navigate to the folder you'd like to download the repository into
4. Type `git clone [pasted url from clipboard]` and press enter


#### <ins>Zip file</ins>
1. From Github, select the "Code" button, then select "Download ZIP"
2. Choose which folder to download the repository into via the dialog box that appears
3. After downloading, open the .zip file and select "Extract All" from the top of the window that appears


---

This application is covered under [MIT License](./LICENSE)

