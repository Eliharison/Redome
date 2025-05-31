import React from 'react';
import Image from 'next/image';

interface MetricProps {
  label: string;
  value: number | string;
  className?: string;
  src: string;
}

const Metric: React.FC<MetricProps> = ({ label, value, className = '', src }) => {
  return (
    <div
      className={`rounded-lg bg-[#91B4E2] text-black w-full h-[92px] p-3 flex flex-col justify-around md:h-[120px] ${className}`}
    >
      <div className="flex items-center gap-1 text-sm text-black">
        <Image src={src} alt={label} width={16} height={16} className='md:w-6 md:h-6' />
        <span className='text-[10px] md:text-[16px]'>{label}</span>
      </div>
      <span className="text-2xl md:text-[28px] font-bold">{value}</span>
    </div>
  );
};

export default Metric;
