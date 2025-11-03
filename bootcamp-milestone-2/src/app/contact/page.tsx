import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tobin's Site",
};

export default function Contact() {
  return (
    <>
      <p className="email-address">
        The easiest way to reach me is by email at{" "}
         <a href="mailto:tdiscoe@calpoly.edu">tdiscoe@calpoly.edu</a>. Or, you
        can use the form below.
      </p>
      <form id="contact-form">
        <input type="text" id="name" placeholder="Your Name" />
        <input type="email" id="email" placeholder="Your Email" />
        <textarea></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </>
  );
}
