import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }),
  phone: z.string().trim().optional(),
  dressType: z.string().nonempty({ message: "Please select a dress type" }),
  budget: z.string().nonempty({ message: "Please select a budget range" }),
  timeline: z.string().nonempty({ message: "Please select your timeline" }),
  message: z.string().trim().nonempty({ message: "Please tell us about your vision" }).max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast({
        title: "Appointment Request Sent",
        description: "Thank you for your interest. We'll contact you within 24 hours to discuss your vision.",
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
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-pure-white luxury-texture">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-pure-black mb-6 tracking-tight">
            Begin Your <span className="italic text-dragon-fire">Journey</span>
          </h2>
          <p className="body-text text-lg text-gray-800 max-w-2xl mx-auto">
            Ready to create your bespoke masterpiece? Let's discuss your vision 
            and craft something truly extraordinary together.
          </p>
        </div>

        <div className="bg-gradient-luxury rounded-lg shadow-dragon p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-pure-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pure-black focus:border-transparent transition-swift ${
                    errors.name ? "border-destructive" : "border-gray-200"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-pure-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pure-black focus:border-transparent transition-swift ${
                    errors.email ? "border-destructive" : "border-gray-200"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-pure-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pure-black focus:border-transparent transition-swift"
                placeholder="(Optional) Your phone number"
              />
            </div>

            {/* Dress Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="dressType" className="block text-sm font-medium text-pure-black mb-2">
                  Dress Type *
                </label>
                <select
                  id="dressType"
                  name="dressType"
                  value={formData.dressType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pure-black focus:border-transparent transition-swift ${
                    errors.dressType ? "border-destructive" : "border-gray-200"
                  }`}
                >
                  <option value="">Select type</option>
                  <option value="evening">Evening Gown</option>
                  <option value="wedding">Wedding Dress</option>
                  <option value="cocktail">Cocktail Dress</option>
                  <option value="custom">Custom Design</option>
                </select>
                {errors.dressType && <p className="text-destructive text-sm mt-1">{errors.dressType}</p>}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-pure-black mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pure-black focus:border-transparent transition-swift ${
                    errors.budget ? "border-destructive" : "border-gray-200"
                  }`}
                >
                  <option value="">Select budget</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000+">$20,000+</option>
                </select>
                {errors.budget && <p className="text-destructive text-sm mt-1">{errors.budget}</p>}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-pure-black mb-2">
                  Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pure-black focus:border-transparent transition-swift ${
                    errors.timeline ? "border-destructive" : "border-gray-200"
                  }`}
                >
                  <option value="">Select timeline</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="1-year+">1 year+</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.timeline && <p className="text-destructive text-sm mt-1">{errors.timeline}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-pure-black mb-2">
                Your Vision *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pure-black focus:border-transparent transition-swift resize-none ${
                  errors.message ? "border-destructive" : "border-gray-200"
                }`}
                placeholder="Tell us about your dream dress, the occasion, style preferences, and any special details you envision..."
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                variant="fire"
                size="lg"
                disabled={isSubmitting}
                className="px-12 py-4 text-lg"
              >
                {isSubmitting ? "Sending..." : "Request Consultation"}
              </Button>
              
              <p className="text-sm text-gray-600 mt-4">
                We'll respond within 24 hours to schedule your personal consultation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;