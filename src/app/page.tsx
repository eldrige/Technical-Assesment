import { Card } from './components/card';
import { CASINOS } from './constants';

export default function Home() {
  return (
    <main className="bg-white py-20  min-h-screen">
      <h1 className="text-[#939393] text-2xl font-bold mb-2 mobile-max:mb-4 ml-4">
        Best casinos 2024
      </h1>
      <section className="flex items-center flex-col gap-6">
        {CASINOS.map((casino, index) => (
          <Card key={index} {...casino} />
        ))}
      </section>
    </main>
  );
}
