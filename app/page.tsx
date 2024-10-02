import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/dashboard" className="text-lg font-bold text-blue-500">
        Go to Dashboard
      </Link>
    </div>
  );
}
