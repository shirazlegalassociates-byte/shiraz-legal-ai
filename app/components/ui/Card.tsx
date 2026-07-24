interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-lg border border-gray-200 p-6 transition duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}