import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  return (
    <div className="container" id="contact">
      <h1 className="Categories-title">Contact</h1>
      <form
        className="contact-form"
        action="https://formspree.io/f/mleyzorw"
        method="post"
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="Name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="_replyto"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="Message"
            rows="5"
            placeholder="Leave your comment here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Contact;
