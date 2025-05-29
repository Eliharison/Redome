import React from 'react';

interface MetricProps {
  label: string;
  value: number | string;
  className?: string;
}

const Metric: React.FC<MetricProps> = ({ label, value, className = '' }) => {
  return (
    <div
      className={`rounded-md bg-[#91b4e241] p-4 w-fit min-w-[200px] h-[100px] flex flex-col justify-center ${className}`}
    >
      <span className="text-sm text-primary font-normal mb-2">{label}</span>
      <span className="text-2xl text-terciary font-bold">{value}</span>
    </div>
  );
};

export default Metric;
