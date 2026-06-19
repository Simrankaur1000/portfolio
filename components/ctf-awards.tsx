import Image from 'next/image'

export function CtfAwards() {
  return (
    <div className="mt-8 grid grid-cols-[1.4fr_1fr] gap-4">

      {/* Left Large Image */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/images/award1.jpeg"
          alt="Award 1"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="grid gap-4">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/award2.jpeg"
            alt="Award 2"
            width={1000}
            height={500}
            className="w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/img.jpeg"
            alt="Award 3"
            width={1000}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </div>

    </div>
  )
}