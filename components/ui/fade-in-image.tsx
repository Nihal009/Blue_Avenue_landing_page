'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function FadeInImage({ className, ...props }: ImageProps) {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            {...props}
            className={cn(
                'duration-700 ease-in-out',
                isLoading ? 'scale-110 blur-2xl grayscale opacity-0' : 'scale-100 blur-0 grayscale-0 opacity-100',
                className
            )}
            onLoad={() => setLoading(false)}
        />
    );
}
