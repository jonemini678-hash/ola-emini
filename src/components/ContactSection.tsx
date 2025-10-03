// components/ContactSection.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../emailconfig";

type ContactForm = {
  name: string;
  email: string;
  phone?: string;
  dressType: string;
  budget: string;
  timeline: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    dressType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "N/A",
          dressType: formData.dressType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Appointment Request Sent",
        description: "Thank you! We'll contact you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dressType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: err?.text || err?.message || "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-10">Book Your Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
          <input
            name="phone"
            placeholder="Phone (Optional)"
            value={formData.phone || ""}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
          <select
            name="dressType"
            value={formData.dressType}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          >
            <option value="" disabled>Select Dress Type *</option>
            <option>Wedding Dress</option>
            <option>Evening Gown</option>
            <option>Custom Suit</option>
            <option>Other</option>
          </select>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          >
            <option value="" disabled>Select Budget Range *</option>
            <option>$1,000 - $3,000</option>
            <option>$3,000 - $6,000</option>
            <option>$6,000 - $10,000</option>
            <option>$10,000+</option>
          </select>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          >
            <option value="" disabled>Select Your Timeline *</option>
            <option>3-6 Months</option>
            <option>6-12 Months</option>
            <option>12+ Months</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your vision *"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full p-3 border rounded"
          ></textarea>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-pink-600 text-white py-3">
            {isSubmitting ? "Sending..." : "Request Appointment"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
