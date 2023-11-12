import React from 'react';
import { Button } from '@/components/lib/button';
import Image from 'next/image';

export const NewStoryButton: React.FC = () => {
  return (
    <Button variant="primary">
      <Image src="/icons/plus.png" alt="New story" width={12} height={14} />
      New Story
    </Button>
  )
}
