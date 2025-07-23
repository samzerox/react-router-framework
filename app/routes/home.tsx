import type { Route } from "./+types/home";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  return redirect('/chat')
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-thin">Bienvenido a React Router!!!</h1>
      <p className="text-lg">
        Este es un proyecto de React Router creado con el comando de react-router
      </p>
    </div>
  );
}
