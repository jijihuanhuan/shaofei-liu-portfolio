"use client";

export function PrintButton({ label }: { label: string }) {
  return <button className="btn ghost no-print" style={{marginTop:24,width:"100%"}} onClick={() => window.print()}>{label}</button>;
}
