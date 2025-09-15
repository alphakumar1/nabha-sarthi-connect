// src/components/patient/sections/SmartHealth.jsx
import React from 'react';
import { ShieldPlus, CreditCard } from 'lucide-react';
import Card from '../../common/Card';
import { useLanguage } from '../../../context/LanguageContext';

export default function SmartHealth({ data = [] }) {
  const { t } = useLanguage();

  // data prop is an array of items {title, description, icon}
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <ShieldPlus className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">{t.smartHealth}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CreditCard className="h-8 w-8 mb-3 text-primary" />
          <h3 className="font-semibold">{t.govSchemes}</h3>
          <p className="text-sm text-muted-foreground mt-2">Access schemes, eligibility checks and resources.</p>
        </Card>

        <Card>
          <ShieldPlus className="h-8 w-8 mb-3 text-secondary" />
          <h3 className="font-semibold">{t.insurance}</h3>
          <p className="text-sm text-muted-foreground mt-2">Explore health insurance options and documents.</p>
        </Card>

        <Card>
          <CreditCard className="h-8 w-8 mb-3 text-primary" />
          <h3 className="font-semibold">{t.loans}</h3>
          <p className="text-sm text-muted-foreground mt-2">Find loans designed for medical needs.</p>
        </Card>
      </div>
    </section>
  );
}
