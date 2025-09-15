// src/components/language/LanguageSelector.jsx
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSelector() {
  const { t, lang, setLang } = useLanguage();

  const langs = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'pb', label: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  ];

  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <Globe className="mx-auto h-10 w-10 text-primary" />
      <h2 className="text-xl font-semibold">{t.selectLanguage}</h2>
      <div className="grid grid-cols-3 gap-3">
        {langs.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`p-3 rounded-xl border transition hover:scale-105 ${lang === l.code ? 'ring-2 ring-primary' : 'bg-card'}`}
          >
            <div className="text-2xl">{l.flag}</div>
            <div className="text-sm mt-1">{l.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
