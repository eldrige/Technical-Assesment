import { Card } from './components/card';

export default function Home() {
  return (
    <main className="bg-white flex py-20 items-center min-h-screen flex-col gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} />
      ))}
    </main>
  );
}
