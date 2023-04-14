import Nav from '@/app/nav';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1 className="text-6xl font-bold">Slug: {params.slug}</h1>

      <Nav />
    </>
  );
}
