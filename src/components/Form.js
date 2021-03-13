import React, { useEffect, useState } from "react";
import '../App.css';
import './Form.css';
import { db } from "./Firebase";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);

      var letters = /(([^\s.,:;]+)\s?)+/gm;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if(name == ""||email ==""||phone==""|| message==""){
        alert("Porfavor ingresa un valor :(");
        }
        else
        {
        if(phone.length < 8 || phone==/^[A-Za-z]+$/)
        {
        alert("Tu numero de telefono no es valido :(");
        }
        else
        {
            if(!email.match(mailformat))
                {
                    alert("Tu email es invalido :(");
                }
                else
                {
                    if(!name.match(letters) || name.length < 7){
                        alert("Tu nombre no es valido :("); 
                    }
                    else
                    {
                        db.collection("contacts")
                        .add({
                          name: name,
                          email: email,
                          phone: phone,
                          message: message,
                        })
                        .then(() => {
                          setLoader(false);
                          alert("Tu mensaje ha sido enviado con exito👍");
                        })
                        .catch((error) => {
                          alert(error.message);
                          setLoader(false);
                        });
                        
                        setName("");
                        setEmail("");
                        setPhone("");
                        setMessage("");
                    }
                }             
            }
        }
    };
  
    return (
    <div id="contacts" className="formulario">
        <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contactame</h1>
  
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone Number</label>
        <input
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
  
        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
  
        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " #00a5c2" }}
        >
          Submit
        </button>
      </form>
      </div>
      </div>
    );
  };

export default Form;