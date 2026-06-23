import Image from "next/image";

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Image
        src="/thumbnail.jpg"
        alt="Transparency Archive"
        width={1536}
        height={4096}
        className="w-full h-auto"
        priority
      />
    </main>
  );
}