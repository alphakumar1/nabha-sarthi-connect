// src/components/patient/sections/Biolocker.jsx
import React from 'react';
import { Lock, FileText } from 'lucide-react';
import Card from '../../common/Card';
import { useLanguage } from '../../../context/LanguageContext';

export default function Biolocker({ records = [] }) {
  const { t } = useLanguage();

  const sample = records.length ? records : [
    { id: 1, type: 'Blood Test', date: '2024-01-15', doctor: 'Dr. Meera' },
    { id: 2, type: 'X-Ray', date: '2024-01-10', doctor: 'Dr. Rajiv' },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <Lock className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">{t.biolocker}</h2>
      </div>

      <div className="space-y-3">
        {sample.map(r => (
          <Card key={r.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <div className="font-semibold">{r.type}</div>
                <div className="text-sm text-muted-foreground">{r.date} • {r.doctor}</div>
              </div>
            </div>
            <button className="px-3 py-1 rounded-md bg-primary text-white">View</button>
          </Card>
        ))}
      </div>
    </section>
  );
}
