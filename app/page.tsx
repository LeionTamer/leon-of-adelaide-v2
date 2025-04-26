import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Footer from './_components/footer'
import SearchPlace from '@/components/common/search-place'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative">
          <SearchPlace className="max-w-7xl" />
        </section>
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-purple-900/80 to-orange-600/80" />
          <div
            className="h-[60vh] w-full"
            style={{
              // backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-label="Adelaide food scene"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 text-center md:px-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Leon Of Adelaide
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90">
                {`Your guide to the Adelaide's food scene by a local`}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="#restaurants"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-orange-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-600"
                >
                  Explore Restaurants
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="restaurants" className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-10">
            <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Latest Reviews
                </h2>
                <p className="mt-2 text-gray-500">
                  Discover the best places to eat in Adelaide
                </p>
              </div>
              <Link
                href="/restaurants"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 md:mt-0"
              >
                View all reviews
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>
            {/* <RestaurantList /> */}
          </div>
        </section>
        <section id="map" className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-10">
            <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Find the Restaurants nearest you
                </h2>
                <p className="mt-2 text-gray-500">
                  {"Explore Adelaide's food scene on the map"}
                </p>
              </div>
              <Link
                href="/restaurants"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 md:mt-0"
              >
                Open full map
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>
            {/* <RestaurantList /> */}
          </div>
        </section>
        <section className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Join Our Foodie Community
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Subscribe to our newsletter for the latest restaurant openings,
              exclusive events, and culinary tips
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
