"use client"
import React from 'react'

interface Props{
    children: React.ReactNode;
    className?:string;
}
export const BorderAnimation:React.FC<Props>=({children,className})=> {
  return (
    <div className={` background: linear-gradient(45deg,#000000,#000 50%,#000000) padding-box,conic-gradient(from var(--border-angle),color-mix(in oklab, oklch(44.6% 0.043 257.281) 48%, transparent) 80%, oklch(42.4% 0.199 265.638) 86%, oklch(42.4% 0.199 265.638) 90%, oklch(58.5% 0.233 277.117) 94%, color-mix(in oklab, oklch(44.6% 0.043 257.281) 48%, transparent)) border-box rounded-2xl border border-transparent animate-border ${className}`}>{children}</div>
  )
}
