"use client";

import { useMemo, useState } from "react";
import { contactSection } from "@/data/contact";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormField = keyof FormData;
type FormErrors = Partial<Record<FormField, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function validateField(field: FormField, value: string): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case "name":
      if (!trimmed) return "Informe seu nome completo.";
      if (trimmed.length < 3) return "Nome deve ter pelo menos 3 caracteres.";
      if (!/^[\p{L}\s'-]+$/u.test(trimmed)) {
        return "Use apenas letras no nome.";
      }
      return undefined;
    case "email":
      if (!trimmed) return "Informe seu e-mail.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
        return "Informe um e-mail válido.";
      }
      return undefined;
    case "phone": {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Informe seu telefone.";
      if (digits.length < 10 || digits.length > 11) {
        return "Telefone inválido. Use DDD + número.";
      }
      return undefined;
    }
    case "message":
      if (!trimmed) return "Escreva sua mensagem.";
      if (trimmed.length < 10) {
        return "Mensagem muito curta (mínimo 10 caracteres).";
      }
      return undefined;
  }
}

function validateForm(data: FormData): FormErrors {
  return {
    name: validateField("name", data.name),
    email: validateField("email", data.email),
    phone: validateField("phone", data.phone),
    message: validateField("message", data.message),
  };
}

function isFormValid(errors: FormErrors) {
  return Object.values(errors).every((error) => !error);
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>(
    {},
  );
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = useMemo(() => validateForm(formData), [formData]);
  const canSubmit = isFormValid(errors);

  const showError = (field: FormField) =>
    Boolean(errors[field] && (touched[field] || submitAttempted));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as FormField;
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const currentErrors = validateForm(formData);
    if (!isFormValid(currentErrors)) return;

    const message = [
      `*Nova solicitação de orçamento — Volpe Soluções Digitais*`,
      ``,
      `*Nome:* ${formData.name.trim()}`,
      `*E-mail:* ${formData.email.trim()}`,
      `*Telefone:* ${formData.phone.trim()}`,
      ``,
      `*Mensagem:*`,
      formData.message.trim(),
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
    setFormData(initialFormData);
    setTouched({});
    setSubmitAttempted(false);
  };

  const inputClasses = (field: FormField) =>
    cn(
      "w-full rounded-xl border bg-volpe-black-secondary px-4 py-3 text-sm text-white placeholder:text-volpe-text-secondary/50 transition-colors focus:outline-none focus:ring-2",
      showError(field)
        ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
        : "border-volpe-gray-medium/50 focus:border-volpe-primary/60 focus:ring-volpe-primary/20",
    );

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
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-volpe-text-secondary"
        >
          {contactSection.form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={contactSection.form.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses("name")}
          aria-invalid={showError("name")}
          aria-describedby={showError("name") ? "name-error" : undefined}
        />
        {showError("name") && (
          <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-volpe-text-secondary"
          >
            {contactSection.form.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={contactSection.form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses("email")}
            aria-invalid={showError("email")}
            aria-describedby={showError("email") ? "email-error" : undefined}
          />
          {showError("email") && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-volpe-text-secondary"
          >
            {contactSection.form.phoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={contactSection.form.phonePlaceholder}
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses("phone")}
            aria-invalid={showError("phone")}
            aria-describedby={showError("phone") ? "phone-error" : undefined}
          />
          {showError("phone") && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-volpe-text-secondary"
        >
          {contactSection.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={contactSection.form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(inputClasses("message"), "resize-none")}
          aria-invalid={showError("message")}
          aria-describedby={showError("message") ? "message-error" : undefined}
        />
        {showError("message") && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" showArrow disabled={!canSubmit} className="w-full sm:w-auto">
        {contactSection.form.submitLabel}
      </Button>
    </form>
  );
}
