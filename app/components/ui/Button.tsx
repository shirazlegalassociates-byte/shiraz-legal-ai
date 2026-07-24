import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-[#0B1F3A] transition duration-300 hover:bg-yellow-500 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}