import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { BestSellers } from '../components/BestSellers';
import { TrustFactors } from '../components/TrustFactors';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navigation />
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <TrustFactors />
      <Footer />
    </div>
  );
}
