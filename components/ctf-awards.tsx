import Image from 'next/image'

export function CtfAwards() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">

      {/* Award 1 */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/images/award1.jpeg"
          alt="Award 1"
          width={1000}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Award 2 */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/images/img.jpeg"
          alt="Award 2"
          width={1000}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>

    </div>
  )
}