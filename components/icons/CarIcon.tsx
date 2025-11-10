/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const CarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-5h-5l-4 5h5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-5H6l-4 5h5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11l4-5h10l4 5" />
    </svg>
);

export default CarIcon;
