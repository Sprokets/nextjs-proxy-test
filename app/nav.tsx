import NextLink from 'next/link';

export default function Nav() {
  return (
    <ul className="text-2xl font-semibold">
      <li>
        <NextLink className="underline text-blue-500" href="/">
          Home
        </NextLink>
      </li>
      <li>
        <NextLink className="underline text-blue-500" href="/test-page">
          Test Page (No Param)
        </NextLink>
      </li>
      <li>
        <NextLink className="underline text-blue-500" href="/test-page/abc">
          Dynamic Segment ABC
        </NextLink>
      </li>
      <li>
        <NextLink className="underline text-blue-500" href="/test-page/def">
          Dynamic Segment DEF
        </NextLink>
      </li>
      <li>
        <NextLink className="underline text-blue-500" href="/test-page/group1">
          Route Group Page 1
        </NextLink>
      </li>
      <li>
        <NextLink className="underline text-blue-500" href="/test-page/group2">
          Route Group Page 2
        </NextLink>
      </li>
    </ul>
  );
}
