import NextLink from 'next/link';

export default function Page({ params }: { params: { someparam: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold">Some Param: {params.someparam}</h1>

      <ul className="text-2xl font-semibold">
        <li>
          <NextLink className="underline text-blue-500" href="/">
            Home
          </NextLink>
        </li>
        <li>
          <NextLink className="underline text-blue-500" href="/test-page">
            Test Page
          </NextLink>
        </li>
        <li>
          <NextLink className="underline text-blue-500" href="/test-page/abc">
            Some Param ABC
          </NextLink>
        </li>
        <li>
          <NextLink className="underline text-blue-500" href="/test-page/def">
            Some Param DEF
          </NextLink>
        </li>
      </ul>
    </main>
  );
}
