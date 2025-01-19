
import Head from 'next/head';
import AboutHeroSection from './abouthero';

export default function About() {
  return (
    <>
<AboutHeroSection />
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our team and mission." />
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <section className="max-w-4xl w-full text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 leading-7 mb-6">
            Welcome to [Your Company Name]! We are a team dedicated to providing exceptional services and products
            tailored to your needs. Our mission is to bring innovation and quality together to exceed your expectations.
          </p>
          <p className="text-lg text-gray-600 leading-7">
            With a focus on [specific goals or values, e.g., sustainability, customer satisfaction, or innovation], we
            strive to make a positive impact in our community and industry.
          </p>
        </section>

        <section className="mt-12 max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver unparalleled quality and value to our customers while fostering a culture of innovation and
              inclusivity.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leader in [your industry or niche] by redefining excellence and building lasting relationships.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Integrity, innovation, and commitment to making a meaningful difference in everything we do.
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Alice", "Bob", "Charlie", "Diana"].map((name, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm">Role Title</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-gray-600">
          <p>&copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
} 
