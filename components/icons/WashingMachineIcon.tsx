/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const WashingMachineIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a4 4 0 110 8 4 4 0 010-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 5h-2M8 5H6" />
    </svg>
);

export default WashingMachineIcon;
