import Nav from '@/app/nav';

export default function Page({ params }: { params: { someparam: string } }) {
  return (
    <>
      <h1 className="text-6xl font-bold">Some Param: {params.someparam}</h1>

      <Nav />
    </>
  );
}
