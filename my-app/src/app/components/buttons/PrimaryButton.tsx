interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
}

export function PrimaryButton({ label, onClick }: PrimaryButtonProps) {
  return (  
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
    >
      {label}
    </button>
  );
}

