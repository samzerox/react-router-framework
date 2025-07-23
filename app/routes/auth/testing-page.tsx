import { Form, Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";

export async function action({ request }: Route.ActionArgs) {
  await sleep(1000);
  const data = await request.formData();
  
  const name = data.get("name");
  const allData = Object.fromEntries(data);

  console.log('Server side - Action');
  
  console.log({ name, allData });

  return { ok: true, message: 'Todo bien desde el serverAction' };
}

export async function clientAction({ serverAction, request }: Route.ClientActionArgs) {
 await sleep(1000);

  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData);


  // can still call the server action if needed
  const data = await serverAction();
  // return data;

  return { message: 'Hola mundo desde el clientAction - Client', data, allData}
  
}

// clientAction.hydrate = true as const;

export async function loader() {
  console.log( "Hola mundo desde loader - server" );
  return { message: "Hola mundo desde loader - server" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  console.log( "Hola mundo desde clientLoader - client" );

  // call the server loader
  const serverData = await serverLoader();

  return { 
    message: "Hola mundo desde clientLoader - client",
    serverData
  };
}

export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  const navigation = useNavigation();
  const isPosting = navigation.state === 'submitting';

  console.log({ navigation,isPosting });

  return (
    <div>
      <h1 className="text-2xl font-bold">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink 
        to="/auth/testing-args/ABC-123/Juan/25"
        className={({ isPending }) => 
          isPending 
          ? "text-red-500 underline text-2xl" 
          : "text-blue-500 underline text-2xl"}
      >
        Testing Args
      </NavLink>

      <Form method="post" className="mt-2 flex gap-2">
        <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="name" placeholder="name" />
        <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="age" placeholder="age" />
        <button disabled={isPosting} className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-10" type="submit">{isPosting ? 'Submitting...' : 'Submit'}</button>
      </Form>

    </div>
  );
}