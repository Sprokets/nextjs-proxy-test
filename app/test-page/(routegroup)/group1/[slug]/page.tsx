import Nav from '@/app/nav';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold">Slug: {params.slug}</h1>

      <Nav />
    </main>
  );
}
