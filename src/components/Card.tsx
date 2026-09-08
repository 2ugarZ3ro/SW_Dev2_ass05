import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

interface CardProps {
  imgSrc: string
  venueName: string
}

export default function Card({ imgSrc, venueName }: CardProps) {
  return (
    <InteractiveCard>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={imgSrc}
          alt={venueName}
          width={400}
          height={300}
          className="w-full object-cover"
        />
        <div className="p-4">
          <p className="text-lg font-semibold text-black">{venueName}</p>
        </div>
      </div>
    </InteractiveCard>
  )
}