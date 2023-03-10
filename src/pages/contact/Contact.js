import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contato</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Assunto</label>
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Messagem</label>
            <textarea
              cols="10"
              rows="5"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Enviar Messagem</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Informações Aqui</h3>
            <p>Duvidas ou sugestoes preencha os campos</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>094999727849</p>
              </span>
              <span>
                <FaEnvelope />
                <p>joseueslei@outlook.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Maraba-PA (Brasil)</p>
              </span>
              <span>
                <FaTwitter />
                <p>Ueslei</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;