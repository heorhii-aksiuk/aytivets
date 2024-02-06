import AppBar from '@/components/AppBar';

export default function Home() {
  return (
    <main>
      <AppBar />
      <section className="sm:container mx-auto">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="font-mono">Aytivets</h1>
        </div>
      </section>
    </main>
  );
}
