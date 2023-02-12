import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
          src="/logo.png"
          width={524}
          height={301}
          alt="LaptopTuning Logo"
          priority
      />
    </>
  )
}
