// src/components/doctor/sections/PatientRecords.jsx
import React from 'react';
import { FileText, Lock } from 'lucide-react';
import Card from '../../common/Card';

export default function PatientRecords({ records = [] }) {
  const sample = records.length ? records : [
    { id: 'r1', name: 'John Doe', lastVisit: '2024-01-15' },
    { id: 'r2', name: 'Jane Smith', lastVisit: '2024-01-10' },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <FileText className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Patient Records</h2>
      </div>

      <Card>
        <div className="text-center text-sm text-muted-foreground">
          <Lock className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
          Records are private. Request patient permission to view sensitive data.
        </div>
      </Card>

      <div className="space-y-3">
        {sample.map(r => (
          <Card key={r.id} className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{r.name}</div>
              <div className="text-sm text-muted-foreground">Last: {r.lastVisit}</div>
            </div>
            <div><button className="px-3 py-1 rounded-md bg-secondary text-white">Request</button></div>
          </Card>
        ))}
      </div>
    </section>
  );
}
