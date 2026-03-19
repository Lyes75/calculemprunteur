"use client";

import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Veuillez entrer votre nom";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Veuillez entrer un email valide";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Veuillez préciser le sujet";
    }

    if (!form.message.trim()) {
      newErrors.message = "Veuillez écrire votre message";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Votre message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    try {
      const existingMessages = JSON.parse(
        localStorage.getItem("contact_messages") || "[]"
      );
      existingMessages.push({
        ...form,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem(
        "contact_messages",
        JSON.stringify(existingMessages)
      );
    } catch {
      // localStorage unavailable
    }

    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10">
          <div className="w-10 h-1 bg-accent-600 mb-4 rounded-full" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Contactez-nous
          </h1>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Une question sur notre simulateur, vos données ou l&apos;assurance
            emprunteur ? Écrivez-nous, nous vous répondons sous 48h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 mb-1 block"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className={`
                        w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                        placeholder:text-gray-400 transition-colors duration-150
                        ${errors.name ? "border-danger-500" : "border-gray-300"}
                        focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                      `}
                    />
                    {errors.name && (
                      <p className="text-sm text-danger-500 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-1 block"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.fr"
                      className={`
                        w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                        placeholder:text-gray-400 transition-colors duration-150
                        ${errors.email ? "border-danger-500" : "border-gray-300"}
                        focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                      `}
                    />
                    {errors.email && (
                      <p className="text-sm text-danger-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700 mb-1 block"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`
                        w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                        transition-colors duration-150 appearance-none
                        bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')]
                        bg-[position:right_12px_center] bg-no-repeat pr-10
                        ${errors.subject ? "border-danger-500" : "border-gray-300"}
                        focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                      `}
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="Question sur le simulateur">
                        Question sur le simulateur
                      </option>
                      <option value="Assurance emprunteur">
                        Assurance emprunteur
                      </option>
                      <option value="Données personnelles / RGPD">
                        Données personnelles / RGPD
                      </option>
                      <option value="Partenariat">Partenariat</option>
                      <option value="Autre">Autre</option>
                    </select>
                    {errors.subject && (
                      <p className="text-sm text-danger-500 mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700 mb-1 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Décrivez votre demande..."
                      className={`
                        w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                        placeholder:text-gray-400 transition-colors duration-150 resize-vertical
                        ${errors.message ? "border-danger-500" : "border-gray-300"}
                        focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                      `}
                    />
                    {errors.message && (
                      <p className="text-sm text-danger-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="
                      w-full bg-accent-600 hover:bg-accent-500 text-white font-semibold
                      rounded-xl px-8 py-4 text-base md:text-lg shadow-md hover:shadow-lg
                      transition-all duration-200 active:scale-[0.98] cursor-pointer
                    "
                  >
                    Envoyer le message →
                  </button>
                </form>
              ) : (
                <div className="bg-success-50 border border-success-500 rounded-2xl p-8 text-center">
                  <div className="text-success-600 text-4xl mb-3">✓</div>
                  <p className="text-success-600 font-semibold text-lg">
                    Message envoyé !
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Nous vous répondrons sous 48h à l&apos;adresse {form.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-accent-600 hover:text-accent-500 text-sm font-medium transition-colors cursor-pointer"
                  >
                    ← Envoyer un autre message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar infos */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@calculemprunteur.fr"
                    className="text-sm text-accent-600 hover:text-accent-500 transition-colors"
                  >
                    contact@calculemprunteur.fr
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Délai de réponse
                  </h3>
                  <p className="text-sm text-gray-500">Sous 48h ouvrées</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Adresse
                  </h3>
                  <p className="text-sm text-gray-500">
                    NETAUDIENCE
                    <br />8 rue Christian Dewet
                    <br />75012 Paris
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retour */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="inline-flex items-center text-accent-600 hover:text-accent-500 font-semibold transition-colors"
          >
            ← Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </section>
  );
}
