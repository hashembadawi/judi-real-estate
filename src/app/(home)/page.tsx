"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.location.replace("/ar/");
  }, []);

  return (
    <main>
      <p>
        يتم تحويلك إلى <Link href="/ar/">الموقع</Link>...
      </p>
    </main>
  );
}
