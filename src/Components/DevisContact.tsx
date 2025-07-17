// components/DevisForm.tsx
'use client';

import { useState } from 'react';
import { init } from '@emailjs/browser';
import { useRouter } from 'next/navigation';

export default function DevisForm() {
  const [formData, setFormData] = useState({
    nom: '',
    societe: '',
    email: '',
    telephone: '',
    service: 'nettoyage',
    superficie: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Initialisation EmailJS (à faire une seule fois)
  if (typeof window !== 'undefined') {
    init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoi à EmailJS
      const response = await fetch('/api/send-devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/confirmation');
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Champs formulaire */}
        <div>
          <label className="block text-sm font-medium mb-1">Nom complet*</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.nom}
            onChange={(e) => setFormData({...formData, nom: e.target.value})}
          />
        </div>
        
        {/* Autres champs... */}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander un devis'}
      </button>
    </form>
  );
}
