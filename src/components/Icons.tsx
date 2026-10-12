import type { ReactNode } from 'react';

const wrap = (d: ReactNode, size = 24) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

export const SearchIcon = () => wrap(<><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>);
export const HeartIcon = () => wrap(<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />);
export const UserIcon = () => wrap(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5c1.5-2.5 9.500-2.5 11 0" /></>);
export const CartIcon = () => wrap(<><path d="M3 4h2l2.5 11h10L20 7H6.500" /><circle cx="9" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></>);
export const BoxIcon = () => wrap(<><rect x="4" y="5" width="16" height="14" rx="1" /><path d="M4 10h16M12 10v4M10 12h4" /></>);
export const ShieldIcon = () => wrap(<path d="M12 3 5 6v5c0 4.500 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" />, 16);
export const TruckIcon = () => wrap(<><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="17" r="1.500" /><circle cx="17" cy="17" r="1.500" /></>, 16);
export const CardIcon = () => wrap(<><rect x="3" y="6" width="18" height="12" rx="1.500" /><path d="M3 10h18" /></>, 16);
export const CrownIcon = () => wrap(<path d="m4 8 4 4 4-6 4 6 4-4-2 10H6L4 8Z" />, 16);
