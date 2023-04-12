'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

export default function Link() {
  const segment = useSelectedLayoutSegment();

  return <>Active segment: {segment}</>;
}
