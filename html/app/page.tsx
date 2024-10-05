import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <p>
        Google is such a capable tool. It resolves all my confusions, and it is
        able to teach me about everything.
        <br />
        Can I navigate my user to the search engine?
        <br />
        <Link href="https://www.google.com">Click to Browse the Web</Link>
      </p>
      <p>
        I learned about image loading in Next.js, too. Wonder how to do that?
        <br />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
          alt="Logo of Next.js"
          width={500}
          height={500}
          className="bg-white"
        />
      </p>
    </>
  );
}
