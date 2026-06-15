"use client";

import { useState } from "react";
import { contactSection } from "@/data/contact";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      `*Nova solicitação de orçamento — Volpe Soluções Digitais*`,
      ``,
      `*Nome:* ${formData.name}`,
      `*E-mail:* ${formData.email}`,
      `*Telefone:* ${formData.phone}`,
      ``,
      `*Mensagem:*`,
      formData.message,
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  const inputClasses =
    "w-full rounded-xl border border-volpe-gray-medium/50 bg-volpe-black-secondary px-4 py-3 text-sm text-white placeholder:text-volpe-text-secondary/50 transition-colors focus:border-volpe-primary/60 focus:outline-none focus:ring-2 focus:ring-volpe-primary/20";

  if (isSubmitted) {
    return (
      <div
        className="rounded-2xl border border-volpe-primary/30 bg-volpe-primary/10 p-8 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-white">
          {contactSection.form.successMessage}
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-volpe-text-secondary">
          {contactSection.form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={contactSection.form.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-volpe-text-secondary">
            {contactSection.form.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={contactSection.form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-volpe-text-secondary">
            {contactSection.form.phoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={contactSection.form.phonePlaceholder}
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-volpe-text-secondary">
          {contactSection.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={contactSection.form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" showArrow className="w-full sm:w-auto">
        {contactSection.form.submitLabel}
      </Button>
    </form>
  );
}
