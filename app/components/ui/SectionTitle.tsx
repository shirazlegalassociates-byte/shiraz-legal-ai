interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#0B1F3A]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}