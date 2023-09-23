"use client";

import { useRouter, usePathname } from "next/navigation";

interface RedirectButtonProps {
  title: string;
  href: string;
  className?: string;
}

export default function RedirectButton({
  title,
  href,
  className = "",
}: RedirectButtonProps) {
  const path = usePathname();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(path + href);
  };

  return (
    <button onClick={handleButtonClick} className={className}>
      {title}
    </button>
  );
}
