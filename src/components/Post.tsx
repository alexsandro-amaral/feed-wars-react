import { post, User } from "@/App";
import { FormComents } from "./FormComents";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { error } from "console";

export function Post(props: post) {
  const [user, setUser] = useState<User>()

  // Criar função getUser para trazer os dados do usuário
  async function getUser() {
    try {
    const response = await fetch('http://localhost:3000/posts'+ props.userId)
    const data: User = await response.json()
    setUser(data)
    } catch(error) {
    console.error(error)
  }
  }
}

  // Utilizar o userEffect para executar a função getUser
  useEffect(() => {
    getUser()
  }, [])
  // Alterar os dados do usuário no HTML
  
  return (
    <>
      <div className="bg-zinc-800 rounded-xl flex flex-col p-10">
        <div className="flex">
          <img
            src="darth.jpg"
            alt="darth vader serio"
            className="w-16 h-16 border-2 border-sky-500 rounded-xl"
          />
          <div className="flex flex-col px-3">
            <h2 className="text-white font-bold">Darth Vader</h2>
            <p className="text-zinc-500">Sith</p>
          </div>
        </div>
        <div className=" flex flex-col py-5 gap-2">
          <p className="text-white">
           {props.content}
          </p>
          <p className="text-sky-500">
            {props.hashtags.join(',')}
          </p>
        </div>

        <Separator className="bg-zinc-600 my-4" />
        <div className="py-5">
          <FormComents />
        </div>
        <Button className="w-36 h-10 bg-sky-500">Enviar</Button>
      </div>
    </>
  );
}
