import { TextField } from "@mui/material";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Pattern from "../../styled/Pattern";
import Paragraph from "../../styled/Paragraph";
import { HOME_QUERY } from "../../App";
import {useQuery} from '@apollo/client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactWrapper = styled.section`
  position: relative;
  padding: 5%;
  background: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  .contact-inner {
    background: rgba(255, 255, 255, 0.9);
    width: 95%;
    padding: 10% 0% 10% 10%;
    @media (min-width: 768px) {
      padding-left: 7%;
      display: flex;

      justify-content: space-between;
    }
    @media (min-width: 992px) {
      padding-right: 7%;
      width: unset;
    }
    h2 {
      font-size: 30px;
      img {
        width: 126px;
        height: 7px;
      }
    }
    span {
      font-family: ${(props) => props.theme.fam.alegreya};
      font-size: 15px;
      font-weight: 900;
    }
  }
  form {
    padding-right: 5%;
    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-width: 992px) {
      max-width: 500px;
      width: 45%;
    }
    .MuiTextField-root {
      width: 100%;
      margin-bottom: 20px;
      .MuiOutlinedInput-root {
        border-radius: 0;
      }
      label {
        text-transform: uppercase;
        color: #757171c7;
      }
      input {
        background: transparent;
        border: none;
        border-bottom: 1px solid #c4c4c4;
      }
      .css-5xn5lu-MuiInputBase-root-MuiInput-root:after,
      .css-1480iag-MuiInputBase-root-MuiInput-root:after {
        border-bottom-color: #db2a27 !important;
      }
    }
    button {
      height: 40px;
      width: 100px;
      border: none;
      background: #000;
      color: #fff;
      text-transform: uppercase;
      font-family: ${(props) => props.theme.fam.alegreya};
      line-height: 29px;
      letter-spacing: 0.2em;
    }
  }
`;


  

function Contact() {
  const { data } = useQuery(HOME_QUERY);
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_92t9v6n', 'template_qv26rrg', form.current, 'user_L7z7YdEWv5XH0eqKsPJhm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setUserName("");
      setEmail("");
      setMessage("")
  };
  return (
    <ContactWrapper bgImage={data.pages.edges[1].node.blocks[19].attributes.url}>
      <Pattern bgColor="#DB2A27" />
      <div className="contact-inner">
        <div className="contact-item">
          <span>{data.pages.edges[1].node.blocks[13].attributes.content}</span>
          <Heading text={data.pages.edges[1].node.blocks[14].attributes.content} />

          <Paragraph>
            {data.pages.edges[1].node.blocks[15].attributes.content} <br /> 
            {data.pages.edges[1].node.blocks[16].attributes.content}
          </Paragraph>
          <Paragraph>{data.pages.edges[1].node.blocks[17].attributes.content}</Paragraph>
          <Paragraph>{data.pages.edges[1].node.blocks[18].attributes.content}</Paragraph>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <TextField label="Name:" name="userName" value={userName} onChange={e => setUserName(e.target.value)} variant="standard" />
          <TextField label="Email:" name="email" value={email} onChange={e => setEmail(e.target.value)} variant="standard" />
          <TextField
            id="standard-multiline-static"
            label="Message"
            variant="standard"
            multiline
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={3}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
