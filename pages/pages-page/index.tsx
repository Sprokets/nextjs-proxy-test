import '@/app/globals.css';
import Nav from '@/app/nav';

const Post = () => {
  return (
    <main className="flex min-h-screen max-w-xl flex-col  p-24 gap-8">
      <h1 className="text-6xl font-bold">Pages page</h1>
      <p>
        Notice - links inside this section do not work - see{' '}
        <a
          href="https://github.com/vercel/next.js/issues/47486"
          className="text-blue-500 underline"
        >
          this issue
        </a>
        .
      </p>

      <Nav />
    </main>
  );
};

export default Post;
