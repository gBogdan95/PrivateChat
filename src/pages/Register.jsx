
import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

     await updateProfile(res.user, {
      displayName,
      photoURL: url
     });

      await addDoc(collection(db, "users"), {
        uid: res.user.uid,
        displayName,
        email,
        PhotoURL: url
      });

      await addDoc(collection(db,"userChats"), {
        uid: res.user.uid
      });
      navigate("/");
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
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
          {loading && "Your account has been created sucesfully!"}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;