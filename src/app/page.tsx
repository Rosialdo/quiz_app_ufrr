"use client";

import { useGlobalContext } from "@/context/main";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function Home() {
  // const [newName, setNewName] = useState("");
  // const [newEmail, setNewEmail] = useState("");

  const { newName, setNewName, newEmail, setNewEmail } = useGlobalContext();

  const router = useRouter();

  const handleSubmitIniciar: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(newName, newEmail);
    // Ir para pagina do quiz
    router.push("/quiz");
  };

  return (
    <main className="flex flex-col items-center gap-3">
      <p className="text-white text-lg px-5 text-center">
        Teste seus conhecimentos sobre Ciência da Computação!
      </p>
      <div>
        <form
          onSubmit={handleSubmitIniciar}
          className="flex flex-col items-center gap-2"
        >
          <div>
            <label htmlFor="newName">Nome:</label>
            <input
              type="text"
              name="newName"
              id="newName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="ex: João"
              value={newName}
              required
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="newEmail">Email:</label>
            <input
              type="email"
              name="newEmail"
              id="newEmail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: joao@example.com"
              value={newEmail}
              required
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col group mt-6">
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-600 font-bold py-2 px-4 rounded-full "
            >
              Start Quiz
            </button>

            <Link href="/cadastro">
                <button type="submit" className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full my-5">
                  Adicionar Questão
                </button>
              </Link>
          </div>

        </form>
      </div>
    </main>
  );
}
