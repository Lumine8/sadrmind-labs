import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const INITIAL = { name: "", email: "", message: "" };
const INITIAL_ERRORS = { name: "", email: "", message: "" };

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };

  if (!fields.name.trim()) errors.name = "Name is required.";
  else if (fields.name.trim().length < 2)
    errors.name = "At least 2 characters please.";

  if (!fields.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Enter a valid email.";

  if (!fields.message.trim()) errors.message = "Message is required.";
  else if (fields.message.trim().length < 20)
    errors.message = "At least 20 characters please.";

  return errors;
}

function hasErrors(e) {
  return Object.values(e).some((v) => v !== "");
}

const TIPS = [
  "Which product(s) you're interested in",
  "Your use case or research context",
  "Any collaboration or partnership ideas",
];

const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Studio",
    value: "Remote-first, globally distributed",
  },
  {
    icon: "📬",
    label: "Email",
    value: "atlas.adr11@gmail.com",
  },
  {
    icon: "⏱️",
    label: "Response time",
    value: "Within 48 hours",
  },
];

export default function Contact() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...fields, [name]: value };
    setFields(next);
    if (touched[name]) setErrors(validate(next));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });

    const errs = validate(fields);
    setErrors(errs);

    if (hasErrors(errs)) return;

    setLoading(true);

    emailjs
      .send(
        "service_q45u04e",
        "template_eftyxyk",
        {
          from_name: fields.name,
          senders_email: fields.email,
          reply_to: fields.email,
          message: fields.message,
          to_name: "SADRmind Labs",
        },
        "awZdKl5Fyd6M1AN6h"
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        setLoading(false);
        setSubmitted(true);
        setFields(INITIAL);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        alert(error.text || "Failed to send message.");
      });
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
        </div>

        <div className="container contact-hero-inner">
          <div className="section-label fade-up">Get In Touch</div>

          <h1 className="section-title fade-up delay-1">
            Let's build something
            <br />
            <span>remarkable together</span>
          </h1>

          <p className="section-body fade-up delay-2">
            Interested in our products, want to discuss research collaboration,
            or just want to say hello — we read every message.
          </p>
        </div>
      </section>

      {/* Layout */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* Info panel */}
            <div className="contact-info fade-up">
              <div className="section-label">Contact Details</div>

              <div className="contact-info__items">
                {CONTACT_INFO.map((item, i) => (
                  <div
                    key={item.label}
                    className={`contact-info__item fade-up delay-${i + 1}`}
                  >
                    <div className="contact-info__icon">{item.icon}</div>

                    <div>
                      <div className="contact-info__item-label">
                        {item.label}
                      </div>

                      <div className="contact-info__item-value">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-tips fade-up delay-4">
                <div className="contact-tips__title">What to include</div>

                {TIPS.map((tip, i) => (
                  <div key={i} className="contact-tips__row">
                    <span className="contact-tips__arrow">→</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="fade-up delay-2">
              {submitted ? (
                <div className="contact-form__success">
                  <div className="icon">✅</div>
                  <h3>Message received</h3>
                  <p>
                    Thanks for reaching out. We'll get back to you within 48
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >

                  {/* Name */}
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="name">
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`contact-form__input${errors.name && touched.name ? " error" : ""
                        }`}
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                    />

                    {errors.name && touched.name && (
                      <span className="contact-form__error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`contact-form__input${errors.email && touched.email ? " error" : ""
                        }`}
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                    />

                    {errors.email && touched.email && (
                      <span className="contact-form__error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      className={`contact-form__textarea${errors.message && touched.message ? " error" : ""
                        }`}
                      placeholder="Tell us what you're working on, what you need, or just say hi…"
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.message && touched.message && (
                      <span className="contact-form__error">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary contact-form__submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <span className="arrow">→</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}