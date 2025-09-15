// src/components/patient/sections/SymptomChecker.jsx
import React from 'react';
import { Brain, Search } from 'lucide-react';
import Card from '../../common/Card';
import Button from '../../common/Button';
import { useLanguage } from '../../../context/LanguageContext';

export default function SymptomChecker() {
  const { t } = useLanguage();

  return (
    <section className="space-y-4 max-w-3xl">
      <div className="flex items-center gap-3">
        <Brain className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">{t.aiSymptomChecker}</h2>
      </div>

      <Card>
        <label className="block mb-2 font-medium">Describe your symptoms</label>
        <textarea className="w-full p-3 rounded-xl min-h-[120px] border border-muted focus:ring-2 focus:ring-primary" placeholder="e.g. fever, cough, started 3 days ago..." />
        <div className="mt-3 flex justify-end">
          <Button variant="primary"><Search className="h-4 w-4 mr-2" /> Analyze</Button>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold flex items-center gap-2"><span className="text-secondary">Suggested Actions</span></h3>
        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
          <li>• Stay hydrated and rest</li>
          <li>• Monitor temperature every 4 hours</li>
          <li>• Consult a doctor if symptoms worsen</li>
        </ul>
      </Card>
    </section>
  );
}
