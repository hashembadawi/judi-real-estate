import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/ar/" />
      <p>
        يتم تحويلك إلى <Link href="/ar/">الموقع</Link>...
      </p>
    </main>
  );
}
