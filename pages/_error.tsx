import { NextPage } from 'next';
import '@/app/globals.css';

interface Props {
  errorMessage?: string;
  headers?: {
    key: string;
    value: string | string[] | undefined;
  }[];
}

const Error: NextPage<Props> = ({ errorMessage, headers }) => {
  return (
    <>
      <h1 className="text-6xl font-bold">
        {errorMessage || 'no error message'}
      </h1>

      {headers ? (
        <table className="min-w-full divide-y divide-gray-300">
          {headers.map((header, i) => (
            <tr key={header.key} className={i % 2 ? 'bg-gray-100' : ''}>
              <th
                scope="row"
                className="align-top whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900 text-left"
              >
                {header.key}
              </th>
              <td className="px-2 py-2 text-sm text-gray-900">
                {header.value}
              </td>
            </tr>
          ))}
        </table>
      ) : (
        'No headers'
      )}
    </>
  );
};

Error.getInitialProps = async ({ req, err }) => {
  const headers: {
    key: string;
    value: string | string[] | undefined;
  }[] = [];

  if (req && req.headers) {
    Object.keys(req.headers).forEach((key) => {
      headers.push({ key, value: req.headers[key] });
    });
  }

  return { headers, errorMessage: err?.message || '' };
};

export default Error;
