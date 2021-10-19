import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Pattern from "../../styled/Pattern";
import Paragraph from "../../styled/Paragraph";

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
  return (
    <ContactWrapper bgImage="./images/contact.png">
      <Pattern bgColor="#DB2A27" />
      <div className="contact-inner">
        <div className="contact-item">
          <span>Get in touch</span>
          <Heading text="CONTACT" />

          <Paragraph>
            Address: Cnr Samora Machel Ave West/Golden <br /> Quarry Road,
            Warren Park, Harare, Zimbabwe
          </Paragraph>
          <Paragraph>Phone number:</Paragraph>
          <Paragraph>Email address: Info@africanliberation.museum</Paragraph>
        </div>
        <form>
          <TextField label="Name:" variant="standard" />
          <TextField label="Email:" variant="standard" />
          <TextField
            id="standard-multiline-static"
            label="Message"
            variant="standard"
            multiline
            rows={3}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
