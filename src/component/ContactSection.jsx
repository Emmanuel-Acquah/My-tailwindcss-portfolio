import {
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React from "react";
import { cn } from "../lib/util";
import { useToast } from "../hook/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24  px-4 relative bg-secondary/30">
      <div className="contaner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text--muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          Have a project in mind or want to collaborate? Feel free to reach out
          I'm always open to discuss new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6  pr-70">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-8 justify-center">
              <div className="flex item-start space-x-4">
                <div className="p-3 rounded-fullbg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:acquahe580@gamil.com"
                    className="hover:text-primary text-muted-foreground transition-colors "
                  >
                    Acquahe580@gmail.com{" "}
                  </a>
                </div>
              </div>
              <div className="flex item-start space-x-4">
                <div className="p-3 rounded-fullbg-primary/10">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a
                    href="tel:+233509117509"
                    className="hover:text-primary text-muted-foreground transition-colors "
                  >
                    +233 509117509
                  </a>
                </div>
              </div>
              <div className="flex item-start space-x-4">
                <div className="p-3 rounded-fullbg-primary/10">
                  <Map size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="hover:text-primary text-muted-foreground transition-colors ">
                    Accra,Ghana
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="text-sm font-semibold mb-4">Connect Me With</h4>
              <div className="space-x-4 flex justify-center">
                <a href="" className="">
                  <Linkedin
                    size={20}
                    className="hover:tex-primary transition-colors"
                  />
                </a>
                <a href="" className="">
                  <Instagram size={20} />
                </a>
                <a href="" className="">
                  <Twitter
                    size={20}
                    className="hover:tex-primary transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Emmanuel Acquah..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com..."
                />
              </div>{" "}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Type Your Message
                </label>
                <textarea
                  name="maessage"
                  id="message"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello I'd like to talk about.."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send A Message"}
                <Send size={14} />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
