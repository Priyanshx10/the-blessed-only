import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full"> 
      <Image
        src="/merch.png"
        alt="Main"
        width={2500}
        height={1000}
        className="rounded shadow-md "
      />
    </div>
  );
}
