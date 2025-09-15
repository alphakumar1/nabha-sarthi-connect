// src/components/doctor/sections/Chat.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import Card from '../../common/Card';

export default function Chat({ threads = [] }) {
  const sample = threads.length ? threads : [
    { id: 'm1', patient: 'John Doe', last: 'Please advise about medication' },
    { id: 'm2', patient: 'Jane Roe', last: 'Thank you doctor' },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <MessageCircle className="h-8 w-8 text-secondary" />
        <h2 className="text-2xl font-bold">Chat</h2>
      </div>

      <div className="space-y-3">
        {sample.map(s => (
          <Card key={s.id} className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{s.patient}</div>
              <div className="text-sm text-muted-foreground truncate max-w-xs">{s.last}</div>
            </div>
            <div><button className="px-3 py-1 rounded-md bg-primary text-white">Open</button></div>
          </Card>
        ))}
      </div>
    </section>
  );
}
