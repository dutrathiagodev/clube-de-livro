export default function HomePage() {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-24 shadow">
        <img
          className="h-24 aspect-square"
          src="/logo.png"
          alt="Logo do Clube de Livro"
        />

        <span>Clube de Livro</span>

        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#contatos">Contatos</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-[#032958] text-amber-50 p-8 ">
        <section className="flex  justify-center px-3 py-3 items-center gap-8 h-1 h-full">
          <article className="flex flex-col gap-1 p-6 rounded-lg bg-amber-50 shadow text-black">
            <h1>Artigo 1</h1>
            <p>artigo 1</p>
            <button className="px-6 py-3 text-sm bg-[#032958] text-amber-50 rounded-xl">
              Ver detalhes
            </button>
          </article>
          <article className="flex flex-col gap-1 p-6 rounded-lg bg-amber-50 shadow text-black">
            <h1>Artigo 2</h1>
            <p>artigo 2</p>
            <button className="px-6 py-3 text-sm bg-[#032958] text-amber-50 rounded-xl">
              Ver detalhes
            </button>
          </article>
          <article className="flex flex-col gap-1 p-6 rounded-lg bg-amber-50 shadow text-black">
            <h1>Artigo 3 </h1>
            <p>artigo 3</p>
            <button className="px-6 py-3 text-sm bg-[#032958] text-amber-50 rounded-xl">
              Ver detalhes
            </button>
          </article>
          <article className="flex flex-col gap-1 p-6 rounded-lg bg-amber-50 shadow text-black">
            <h1>Artigo 4</h1>
            <p>artigo 4</p>
            <button className="px-6 py-3 text-sm bg-[#032958] text-amber-50 rounded-xl">
              Ver detalhes
            </button>
          </article>
          <article className="flex flex-col gap-1 p-6 rounded-lg bg-amber-50 shadow text-black">
            <h1>Artigo 5</h1>
            <p>artigo 5</p>
            <button className="px-6 py-3 text-sm bg-[#032958] text-amber-50 rounded-xl">
              Ver detalhes
            </button>
          </article>
        </section>
      </main>

      <footer className="flex justify-center p-12 bg-black text-amber-50">
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#contatos">Contatos</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
