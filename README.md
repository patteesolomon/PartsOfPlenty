
# "Parts O' Plenty"
--
About
-
This is a backend-application that lets a layman coder look at the middle ware, Front end, and back end of React, Express and Node.js. 
This allows the coder to look at CSS styling for each page.
This Shows off multiple pages with different but consistent stylings. Two different methods to be exact.
This Also allows for that user to send the data input from the frontend to a MongoDB server stored online.
Git Repo -> https://github.com/patteesolomon/PartsOfPlenty

"Project Requirements"
--
https://github.com/patteesolomon/PartsOfPlenty/blob/main/docs/requirements.md

Video Link Presentation
--
https://youtu.be/tSirkQ_svBo

ScreenShots
![pop1](https://user-images.githubusercontent.com/113143898/209063963-1af2916f-45f8-4caf-9356-96d62d680cda.PNG)
![pop2](https://user-images.githubusercontent.com/113143898/209063973-7d888396-b84c-4108-b0d5-405f448e9913.PNG)
![pop3](https://user-images.githubusercontent.com/113143898/209063978-366c839a-7597-498b-939e-b969f5042c4c.PNG)

Build Stats
--
It's housed on GitHub for now.

Code Style
--
Mostly Functional programming and some object oriented programming was used in the project.

Design
--
Color Palette was modified after obtaining a css file from Open AI ChatBot.

Technologies, Languages, Libraries & Platforms Used
--
MERN Stack = MongoDB, Express, React, NodeJS
HTML
CSS

Features
--
1. With the simple front end part of the application, anyone can use basic CRUD operations. 
Even add whatever they want to it using this GitHub as a template.

Project Directory
--
![image](https://user-images.githubusercontent.com/113143898/209065867-1c8e265c-90d8-4369-a996-0b83048c926c.png)

Files & Directories
--
server.js - The file for running the middleware where all routes are located
docs - screenshots, requirements in the readMe, and more
package.json - lists all the packages and the dependencies this app uses.
package-lock.json - tells where the installed package dependencies are.
models/ - 'itemType.js' file is located here with the itemType schema.
public/ - contains the stylesheet used in the project.
views - All pages being in jsx format are located here. 
.env - file for the database information
.gitignore - for the nodeModules so that that isn't tracked when git pushes as well as the .env

Routes
--
Index route: This route leads to the index using the |get| verb Home Route 
http://localhost:3001/itemType/
New route: This is for the new creation page. With the |get| It allows for the new creation of an item
http://localhost:3001/itemType/new 
Delete route: This is for the deletion. With the |get| verb it allows for deletion.
http://localhost:3001/itemType/:id/delete
Updtate route: The update route leads to the input submission for the itemType update using the |put| verb.
http://localhost:3001/itemType/:id/update
Create route: This Creates and add a new itemType to the index page using the |Post| verb.
http://localhost:3001/itemType < - this uses a forum submission 
Buy route: This Takes an item away from the itemType's quantity using the |Put|
http://localhost:3001/itemType/buy/:id < - this also uses a form submission.
Edit route: This returns an edited item using the |get| verb
http://localhost:3001/:id/edit
Show route: This returns a route that has the items id
http://localhost:3001/:id 

Installation Instructions
--
follow this guide.
https://www.lifewire.com/install-bash-on-windows-10-4101773  <----
![1](https://user-images.githubusercontent.com/113143898/211386261-1244c775-cfc2-49ca-8887-1d77f7b3498c.png)

Click here.
![2](https://user-images.githubusercontent.com/113143898/211386311-8fd78c79-c370-4dc6-8827-91b902ff0d43.png)

Click this.
![opening this folder click this pic3](https://user-images.githubusercontent.com/113143898/211386339-5c3a4739-d4f4-4647-b249-90bb2b0d1ecc.png)

![pic4](https://user-images.githubusercontent.com/113143898/211386366-dc977d4c-d4cc-4230-a815-cc040568136f.png)
Select an empty folder.
![pic5](https://user-images.githubusercontent.com/113143898/211386420-6c6380b8-2f22-437e-81cd-977a9bdc1d92.png)

Using the BASH terminal Type "git clone [URL]" then watch the magic of git.
![pic6](https://user-images.githubusercontent.com/113143898/211386453-a288ee06-e370-4637-adf7-4760e7ed88fb.png)

When its done go to the folder cloned.
![pic7](https://user-images.githubusercontent.com/113143898/211386473-66fedb6a-1599-4ec9-895a-38ca0aed2661.png)

Then Open it with VS Code
![popins8](https://user-images.githubusercontent.com/113143898/209275613-d2524dac-9e4e-4687-8ec5-983bec10481e.PNG)
then type into you terminal "touch .env"
![popins9](https://user-images.githubusercontent.com/113143898/209275968-beb8b9cc-cfbc-4b4d-9a60-1dfde22ac430.PNG)
create a free mongo db. Grab your URL URI and add it along with it's passkey pasted in.... Here
 ![popins10](https://user-images.githubusercontent.com/113143898/209276764-2cdd6008-a684-4f78-85df-e518a87d315d.PNG)
Save that then type "nodemon" into your terminal to run the app
![popins11](https://user-images.githubusercontent.com/113143898/209276844-82bac2a3-12b8-4dde-91d9-5a6a96456634.PNG)
the port number is 3001. http://localhost:3001/itemType < - and From here you should have it..
Store Functionality
--
1. anyone can use this for CRUD ops in a much more clearer sense.

Known Issuses
--
an unseeable type error keeps rising. But doesn't effect the fronend.
It's unknown if whether or not it effects the database or backend.

Roadmap
-- 
See if maybe db commands might fix the issue stated above.
Refactor with TypeScript
See about implementing Next.js

Acknowledgements
--
To Cycle 28

Resources
--
https://github.com/KasperKain/PerScholas-Fruits
https://github.com/glnewton/storeApp 
https://chat.openai.com/chat
https://www.lifewire.com/install-bash-on-windows-10-4101773

Disclaimer
-- 
I do not own any of the images found from the links I have given in the source code.
I do not own their respective products featured in those images or thier intellectual properties.

Click here to go back to my Git 
--
https://github.com/patteesolomon <--
