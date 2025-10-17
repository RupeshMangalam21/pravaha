import { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100 p-6 transition-shadow duration-200';
  const hoverClasses = hover ? 'hover:shadow-lg cursor-pointer' : '';

  return (
    <div className={cn(baseClasses, hoverClasses, className)}>
      {children}
    </div>
  );
}