// src/components/doctor/sections/Appointments.jsx
import React from 'react';
import { Calendar } from 'lucide-react';
import Card from '../../common/Card';
import { appointments } from '../../../data/mockData';

export default function Appointments({ list = appointments }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <Calendar className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Appointments</h2>
      </div>

      <div className="space-y-3">
        {list.map(a => (
          <Card key={a.id} className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{a.time} - {a.patient}</div>
              <div className="text-sm text-muted-foreground">{a.type}</div>
            </div>
            <div className="text-sm text-muted-foreground">Details</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
