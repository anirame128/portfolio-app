export default function Home() {
  return (
    <div>
      <main className="flex flex-col h-screen justify-center items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Anirudh Ramesh</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">learning to building from scratch.</p> 
        <div className="flex flex-row gap-2">
          <a target = "_blank" href ="https://www.linkedin.com/in/anirudh-ramesh123/" className="text-black bg-white hover:bg-gray-100 focus:ring-3 focus:ring-bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-white focus:outline-none dark:focus:ring-gray-300"> LinkedIn </a>
          <a target = "_blank" href ="https://github.com/anirame128" className="text-black bg-white hover:bg-gray-100 focus:ring-3 focus:ring-bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-white focus:outline-none dark:focus:ring-gray-300"> Github </a>
        </div>
      </main>
    </div>
  );
}
