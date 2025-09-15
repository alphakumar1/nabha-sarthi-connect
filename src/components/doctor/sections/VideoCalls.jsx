// src/components/doctor/sections/VideoCalls.jsx
import React from 'react';
import { Video, UserCircle } from 'lucide-react';
import Card from '../../common/Card';

export default function VideoCalls({ calls = [] }) {
  const sample = calls.length ? calls : [
    { id: 'c1', patient: 'John Doe', time: '10:30 AM', status: 'Scheduled' },
    { id: 'c2', patient: 'Jane Smith', time: '02:00 PM', status: 'Waiting' },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <Video className="h-8 w-8 text-secondary" />
        <h2 className="text-2xl font-bold">Video Calls</h2>
      </div>

      <div className="space-y-3">
        {sample.map(c => (
          <Card key={c.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <UserCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="font-semibold">{c.patient}</div>
                <div className="text-sm text-muted-foreground">{c.time}</div>
              </div>
            </div>
            <div>
              <button className="px-3 py-1 rounded-md bg-primary text-white">Join</button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
