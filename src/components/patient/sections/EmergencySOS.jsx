// src/components/patient/sections/EmergencySOS.jsx
import React from 'react';
import { AlertTriangle, Phone, MapPin, Heart } from 'lucide-react';
import Card from '../../common/Card';
import Button from '../../common/Button';
import { useLanguage } from '../../../context/LanguageContext';

export default function EmergencySOS({ nearby = [] }) {
  const { t } = useLanguage();

  const hospitals = nearby.length ? nearby : [
    { id: 'h1', name: 'City Hospital', distance: '2.3 km' },
    { id: 'h2', name: 'Emergency Care', distance: '3.1 km' },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{t.emergencySOS}</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="flex flex-col items-center">
          <Button variant="emergency" className="w-full flex items-center justify-center gap-2 mb-3"><Phone className="h-4 w-4" /> {t.emergencyCall || 'Emergency Call'}</Button>
          <div className="text-sm text-muted-foreground text-center">Call 108 for immediate help</div>
        </Card>

        <Card>
          <MapPin className="h-6 w-6 mb-3 text-primary" />
          <h3 className="font-semibold">Nearest Hospitals</h3>
          <div className="mt-2 space-y-2 text-sm text-muted-foreground">
            {hospitals.map(h => (
              <div key={h.id}>
                <div className="font-medium">{h.name}</div>
                <div>{h.distance}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col">
          <Heart className="h-6 w-6 mb-3 text-red-500" />
          <h3 className="font-semibold">First Aid Guide</h3>
          <p className="text-sm text-muted-foreground mt-2">Quick steps for common emergencies.</p>
          <div className="mt-3">
            <Button variant="primary">View Guide</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
