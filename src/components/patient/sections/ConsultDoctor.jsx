// src/components/patient/sections/ConsultDoctor.jsx
import React from 'react';
import { Stethoscope, Video, Phone, MessageCircle, Calendar } from 'lucide-react';
import Card from '../../common/Card';
import Button from '../../common/Button';
import { useLanguage } from '../../../context/LanguageContext';
import { doctors } from '../../../data/mockData';

export default function ConsultDoctor({ availableDoctors = doctors }) {
  const { t } = useLanguage();

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <Stethoscope className="h-8 w-8 text-secondary" />
        <h2 className="text-2xl font-bold">{t.consultDoctor}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <Calendar className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold">Book Appointment</h3>
          <p className="text-sm text-muted-foreground">Find nearby doctors and available slots.</p>
          <div className="mt-3 flex gap-2">
            <Button variant="primary">Book Now</Button>
            <Button variant="muted">View Slots</Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-2">Instant Consultation</h3>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="primary" className="flex-col py-3"><Video className="h-5 w-5" /><span className="text-xs mt-1">Video</span></Button>
            <Button variant="secondary" className="flex-col py-3"><Phone className="h-5 w-5" /><span className="text-xs mt-1">Call</span></Button>
            <Button variant="accent" className="flex-col py-3"><MessageCircle className="h-5 w-5" /><span className="text-xs mt-1">Chat</span></Button>
          </div>
        </Card>
      </div>

      <div className="space-y-3">
        {availableDoctors.map(d => (
          <Card key={d.id} className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{d.name}</div>
              <div className="text-sm text-muted-foreground">{d.speciality} • ⭐ {d.rating}</div>
            </div>
            <div className="flex gap-2">
              <Button variant="primary">Book</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
