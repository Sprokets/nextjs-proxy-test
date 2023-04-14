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
      <li>
        <NextLink
          className="underline text-blue-500"
          href="/test-page/group1/ghi"
        >
          Route Group -&gt; Page 1 -&gt; Slug GHI
        </NextLink>
      </li>
      <li>
        <NextLink
          className="underline text-blue-500"
          href="/test-page/group1/jkl"
        >
          Route Group -&gt; Page 2 -&gt; Slug JKL
        </NextLink>
      </li>
    </ul>
  );
}
