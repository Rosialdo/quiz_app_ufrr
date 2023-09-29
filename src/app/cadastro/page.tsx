// A ligação com o Banco de dados para cadatrar uma nova questão não está funcionando

'use client'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { FormEventHandler, useState } from 'react';

export default function NewQuestion() {

    const router = useRouter();

    const [question, setQuestion] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')

    const [wrongAnswers1, setWrongAnswer1] = useState('')
    const [wrongAnswers2, setWrongAnswer2] = useState('')
    const [wrongAnswers3, setWrongAnswer3] = useState('')

    const handleSubmitIniciar: FormEventHandler <HTMLFormElement> = async (e) => {
        e.preventDefault();
        await fetch("/api/question", {
            method: "POST",
            body: JSON.stringify({
                question,
                answers: [correctAnswer, wrongAnswers1, wrongAnswers2, wrongAnswers3],
                correctAnswer: correctAnswer,
            }),
        });
        
        setQuestion('')
        setCorrectAnswer('')
        setWrongAnswer1('')
        setWrongAnswer2('')
        setWrongAnswer3('')
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="py-2 text-lg justify-center">Faça sua própria pergunta para o Quiz:</h1>
            <div className="flex flex-col w-96 justify-center">
                <form onSubmit={handleSubmitIniciar}>
                    <div className="relative z-0 w-full mb-6 group mt-6">

                        <label htmlFor="pergunta">Pergunta:</label>

                        <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder=" Escreva aqui sua pergunta " required
                        onChange={(e) => setQuestion(e.target.value)} value={question} />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">

                        <label htmlFor="respC">Resposta correta:</label>

                        <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Escreva aqui a resposta Correta " required
                        onChange={(e) => setCorrectAnswer(e.target.value)} value={correctAnswer}/>

                       
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label htmlFor="respC">Resposta Errada:</label>                        

                        <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Escreva aqui a resposta Errada " required
                        onChange={(e) => setWrongAnswer1(e.target.value)} value={wrongAnswers1}/>

                        
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label htmlFor="respC">Resposta Errada:</label>

                        <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Escreva aqui a resposta Errada " required
                        onChange={(e) => setWrongAnswer2(e.target.value)} value={wrongAnswers2}/>

                        
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label htmlFor="respC">Resposta Errada:</label>    

                        <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Escreva aqui a resposta Errada " required
                        onChange={(e) => setWrongAnswer3(e.target.value)} value={wrongAnswers3}/>

                        
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cadastrar</button>

                        <Link href="/">
                            <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ">
                                início
                            </button>
                        </Link>                        
                    </div>
  
                </form>
            </div>
        </div>
    )
}