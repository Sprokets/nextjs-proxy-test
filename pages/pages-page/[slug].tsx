import { useRouter } from 'next/router';

import Nav from '@/app/nav';
import '@/app/globals.css';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold">Pages page with slug: {slug}</h1>

      <Nav />
    </main>
  );
};

export default Post;
