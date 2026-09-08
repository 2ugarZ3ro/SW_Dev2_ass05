import Card from '@/components/Card'

const venues = [
  { id: 1, imgSrc: '/img/bloom.jpg', venueName: 'The Bloom Pavilion' },
  { id: 2, imgSrc: '/img/spark.jpg', venueName: 'Spark Space' },
  { id: 3, imgSrc: '/img/grandtable.jpg', venueName: 'The Grand Table' },
]

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Venue Explorer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <Card key={venue.id} imgSrc={venue.imgSrc} venueName={venue.venueName} />
        ))}
      </div>
    </main>
  )
}