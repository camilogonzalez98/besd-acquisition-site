import * as React from 'react';

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#1d3359" />
      {/* Flat roofline, minimalist house */}
      <path d="M13 29V19l11-7 11 7v10a7 7 0 01-7 7H20a7 7 0 01-7-7z" fill="#fff" />
      {/* Small window */}
      <rect x="20.5" y="26" width="7" height="7" rx="1.5" fill="#4e7374" />
      {/* Upward bar */}
      <rect x="23.5" y="21" width="2" height="6" rx="1" fill="#eab543" />
      {/* Minimalist window dot */}
      <circle cx="24" cy="33" r="1" fill="#1d3359" />
      {/* Sans-serif, bold, centered wordmark */}
      <text
        x="24"
        y="45"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontFamily="Poppins,Arial,sans-serif"
        fontWeight="bold"
        fontSize="13"
        fill="#fff"
      >
        BESD
      </text>
    </svg>
  );
}
