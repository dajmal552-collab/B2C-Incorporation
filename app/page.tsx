import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/home">Go to Home Page</Link>
      <Link href="/design">Go to Home Page</Link>
      <Link href="/home">Go to Home Page</Link>
    </div>
  );
}
