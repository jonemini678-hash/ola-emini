import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dressType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_e2e3xwu",       // Service ID
      "template_ordh0q7",      // Template ID
      formData,                 // Kjo dërgon të gjitha fushat
      "kFwrpQS5ftBlhOs1u"      // User ID / Public Key
    ).then(
      () => alert("Email sent successfully!"),
      (err) => alert("Email failed to send: " + err.text)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input name="dressType" value={formData.dressType} onChange={handleChange} placeholder="Dress Type" />
      <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget" />
      <input name="timeline" value={formData.timeline} onChange={handleChange} placeholder="Timeline" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactSection;