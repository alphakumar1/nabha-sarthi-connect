// src/components/doctor/sections/VoiceCalls.jsx
import React from 'react';
import { Phone } from 'lucide-react';
import Card from '../../common/Card';

export default function VoiceCalls({ calls = [] }) {
  const sample = calls.length ? calls : [
    { id: 'v1', patient: 'Ramesh', time: '11:00 AM', status: 'Scheduled' },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <Phone className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Voice Calls</h2>
      </div>

      <div className="space-y-3">
        {sample.map(c => (
          <Card key={c.id} className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{c.patient}</div>
              <div className="text-sm text-muted-foreground">{c.time}</div>
            </div>
            <div><button className="px-3 py-1 rounded-md bg-secondary text-white">Call</button></div>
          </Card>
        ))}
      </div>
    </section>
  );
}
