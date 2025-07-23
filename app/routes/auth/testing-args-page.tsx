import { Link } from 'react-router';
import type { Route } from './+types/testing-args-page';
import { sleep } from '~/lib/sleep';

export function meta() {
  return [
    { title: "Support Chat" },
    {
      property: "og:title",
      content: "Support Chat",
    },
    {
      name: "description",
      content: "Support Chat for the app",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    // {
    //   rel: "icon",
    //   href: "/favicon.png",
    //   type: "image/png",
    // },
    // {
    //   rel: "stylesheet",
    //   href: "https://example.com/some/styles.css",
    // },
    // {
    //   rel: "preload",
    //   href: "/images/banner.jpg",
    //   as: "image",
    // },
  ];
}

export async function loader( { params }: Route.LoaderArgs ) {
  console.log({ params });
  return { hola: 'mundo'};
}

export async function clientLoader( { params }: Route.ClientLoaderArgs ) {
  console.log({ params });
  await sleep(1500);
  return { hola: 'mundo'};
}

export function HydrateFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-12 w-12 text-primary mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <p className="text-lg font-semibold text-primary">Cargando juego...</p>
      </div>
    </div>
  );
}

clientLoader.hydrate = true as const;

export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  const { id, name, age } = params;
  
  console.log(id, name, age);
  console.log('Componente creado');

  return (
    <div>
      <h1 className="text-4xl font-bold">Name: { name } </h1>
      <h1 className="text-3xl font-bold">Age: { age } </h1>
      <h1 className="text-2xl font-bold">Id: { id } </h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <Link to="/auth/testing" className="text-blue-500 underline">
        Testing
      </Link>
    </div>
  );
}