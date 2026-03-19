"use client";

import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const TOPICS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Question sur le simulateur",
    description:
      "Notre simulateur couvre la plupart des cas. Pour une situation complexe, consultez un courtier en assurance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135c-.117-1.903-.243-3.064-.7-3.64a1.46 1.46 0 00-.205-.218c-.728-.556-2.37-.556-5.15-.556-2.78 0-4.422 0-5.15.556a1.46 1.46 0 00-.205.218c-.457.576-.583 1.737-.7 3.64a23.91 23.91 0 01-1.152 6.135A24.067 24.067 0 0112 12.75z" />
      </svg>
    ),
    title: "Signaler un bug",
    description:
      "Vous avez trouvé une erreur de calcul ou un problème d'affichage ? Décrivez-le, nous corrigerons rapidement.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Partenariat",
    description:
      "Vous êtes courtier, assureur ou conseiller financier ? Discutons d'un partenariat ou d'une intégration.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error || "Erreur lors de l'envoi.");
        setSending(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Erreur réseau. Veuillez réessayer.");
    } finally {
      setSending(false);
    }
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Contactez-nous
          </h1>
        </div>

        {/* 3 topic cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {TOPICS.map((topic) => (
            <div
              key={topic.title}
              className="bg-white rounded-xl border border-gray-200 p-5 text-center"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary-100 text-primary-800 mb-3">
                {topic.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {topic.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={`
                    w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                    placeholder:text-gray-400 transition-colors duration-150
                    ${errors.name ? "border-danger-500" : "border-gray-300"}
                    focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                  `}
                />
                {errors.name && (
                  <p className="text-sm text-danger-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  Email <span className="text-accent-600">*</span>
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
                  <p className="text-sm text-danger-500 mt-1">{errors.email}</p>
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
                  <option value="Question sur le simulateur">Question sur le simulateur</option>
                  <option value="Signaler une erreur">Signaler une erreur</option>
                  <option value="Suggestion d'amélioration">Suggestion d&apos;amélioration</option>
                  <option value="Partenariat / Intégration">Partenariat / Intégration</option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.subject && (
                  <p className="text-sm text-danger-500 mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  Message <span className="text-accent-600">*</span>
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
                  <p className="text-sm text-danger-500 mt-1">{errors.message}</p>
                )}
              </div>

              {serverError && (
                <div className="bg-danger-100 border border-danger-500 rounded-lg p-3 text-sm text-danger-500">
                  {serverError}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className={`
                  w-full text-white font-semibold
                  rounded-xl px-8 py-4 text-base md:text-lg shadow-md
                  transition-all duration-200 active:scale-[0.98] cursor-pointer
                  ${sending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-accent-600 hover:bg-accent-500 hover:shadow-lg"
                  }
                `}
              >
                {sending ? "Envoi en cours..." : "Envoyer le message →"}
              </button>

              <p className="text-xs text-gray-400 text-center pt-2">
                Vos données sont utilisées uniquement pour répondre à votre message. Aucune utilisation commerciale.
              </p>
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

        {/* Retour */}
        <div className="mt-10 text-center">
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
