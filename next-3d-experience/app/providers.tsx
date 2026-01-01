'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
