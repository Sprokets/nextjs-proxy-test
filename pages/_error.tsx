import { NextPage } from 'next';
import { Fragment } from 'react';

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
      <p>{errorMessage || 'no error message'}</p>
      {headers ? (
        <dl className="grid grid-cols-2">
          {headers.map((header, i) => (
            <Fragment key={header.key}>
              <dt className={`p-4 ${i % 2 ? 'bg-gray-100' : ''}`}>
                {header.key}
              </dt>
              <dd className={`p-4 ${i % 2 ? 'bg-gray-100' : ''}`}>
                {header.value}
              </dd>
            </Fragment>
          ))}
        </dl>
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
    Object.keys(req.headers).forEach(key => {
      headers.push({ key, value: req.headers[key] });
    });
  }

  return { headers, errorMessage: err?.message || '' };
};

export default Error;
