"use client";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  formatDisplay: (value: number) => string;
  helperText?: string;
}

export default function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  formatDisplay,
  helperText,
}: SliderInputProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-lg font-semibold text-gray-900">
          {formatDisplay(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        style={{
          background: `linear-gradient(to right, #C8006E 0%, #C8006E ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{formatDisplay(min)}</span>
        <span>{formatDisplay(max)}</span>
      </div>
      {helperText && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
