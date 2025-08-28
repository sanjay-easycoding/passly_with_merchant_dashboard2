interface HeroProps {
  translations: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      getStarted: string;
      learnMore: string;
    };
  };
}

export default function Hero({ translations }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {translations.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-100">
            {translations.hero.subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
            {translations.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {translations.hero.getStarted}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {translations.hero.learnMore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

