import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL, getStorage, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    const url = URL.createObjectURL(file);


    try {
     const res = await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(collection(db, "users"), {
        uid: res.user.uid,
        displayName,
        email,
        PhotoURL: url
      });

      await addDoc(collection(db,"userChats"), {
        uid: res.user.uid
      });
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Private Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
        </form>
        <p>
          You do have an account? <Link to="/register">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;