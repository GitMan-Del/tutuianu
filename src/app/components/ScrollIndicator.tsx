"use client";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center animate-bounce">
      <svg width="20" height="30" viewBox="0 0 56 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="52" height="76" rx="26" stroke="#fff" strokeWidth="4" fill="none" />
        <polyline points="18,48 28,58 38,48" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
} 