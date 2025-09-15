// src/components/auth/RoleSelection.jsx
import React from 'react';
import { UserCircle, Stethoscope, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';

export default function RoleSelection({ onBack, onSelectRole }) {
  const { t } = useLanguage();

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{t.selectRole}</h1>
        <p className="text-sm text-muted-foreground">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Button variant="primary" onClick={() => onSelectRole('patient')} className="flex items-center justify-center gap-3">
          <UserCircle className="h-5 w-5" /> {t.patient}
        </Button>
        <Button variant="secondary" onClick={() => onSelectRole('doctor')} className="flex items-center justify-center gap-3">
          <Stethoscope className="h-5 w-5" /> {t.doctor}
        </Button>
      </div>

      <div className="text-center">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {t.selectLanguage}
        </button>
      </div>
    </div>
  );
}
