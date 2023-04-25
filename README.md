## Private chat app using React and Firebase
#### I created a chat app using react and firebase hooks. For the design I used SCSS.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users needs to authenticate with email and password and they are also required to choose a username and upload a profile picture upon registration. Once logged in, you can start a chat by typing a username, and if it matches a window of that user will pop up in which will display the last message he sent. Other features of the app are
uploading images in chat, displaying the date when each message was sent, and a logout button.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I set up Firebase using a ``.env`` file to hide my API key, then I enabled authentification via email and password, a storage for the uploaded images and a firestore database. There are three collections which are being created in the database: one for the registered users (displaying their username, email, uid and the URL of the profile picture), one for the user chats (displaying each separate chat a user has) and one for the chats (displaying the messages). The logic for creating these collections is written within the app.
