// import TechText from './components/Techtext/TechText';

// export default function App() {
//   return (<main className="min-h-screen bg-[#080b12] flex  justify-center">
//     <div style={{ width: '100%', maxWidth: '1000px', height: '480px', position: 'relative', }} >
//       <TechText text="CHISPA-UI" fontWeight={600} fontSize={150} reveal="letter" dashLength={4} dashGap={2} specks={15} fontFamily="" color="#ffffff" accentColor="#00e5ff" letterSpacing={-0.05} reach={200} softness={0.7} strokeWidth={1.5} speed={1} lineStyle="dashed" selection labels draggable sweep />
//     </div>
//   </main>);
// }


import { useState } from 'react'
import TechText from './components/Techtext/TechText'

const navigation = [
  { label: 'Overview', icon: '⌂' },
  { label: 'Components', icon: '▦' },
  { label: 'Text Effects', icon: '✳' },
  { label: 'Layouts', icon: '▤' },
  { label: 'Documentation', icon: '⌘' },
]

const components = [
  {
    name: 'Button',
    category: 'UI',
    description: 'Actions, variants and interactive states.',
    preview: 'button',
  },
  {
    name: 'TechText',
    category: 'Effects',
    description: 'Interactive typography with a technical outline.',
    preview: 'tech',
  },
  {
    name: 'SplitText',
    category: 'Effects',
    description: 'Animated text reveals and transitions.',
    preview: 'split',
  },
  {
    name: 'Card',
    category: 'UI',
    description: 'Flexible surfaces for any interface.',
    preview: 'card',
  },
]

function App() {
  const [active, setActive] = useState('Overview')
  const [search, setSearch] = useState('')

  const filteredComponents = components.filter((component) =>
    `${component.name} ${component.category} ${component.description}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-white/8 bg-[#0c0c0f] md:flex">
        <div className="flex h-20 items-center gap-3 border-b border-white/8 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400 text-xl font-black text-black">
            ✳
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">chispa<span className="text-orange-400">.</span></p>
            <p className="text-[10px] tracking-[0.2em] text-zinc-500">UI LIBRARY</p>
          </div>
        </div>

        <div className="px-4 pt-7">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${active === item.label
                    ? 'border border-white/8 bg-white/[0.07] text-white'
                    : 'text-zinc-500 hover:bg-white/4 hover:text-zinc-200'
                  }`}
              >
                <span className="w-5 text-center text-base">{item.icon}</span>
                {item.label}
                {item.label === 'Components' && (
                  <span className="ml-auto rounded bg-white/[0.07] px-1.5 py-0.5 text-[10px] text-zinc-400">
                    04
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-white/8 p-5">
          <div className="rounded-xl border border-white/8 bg-white/2.5 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-zinc-300">Development mode</span>
            </div>
            <p className="text-xs leading-5 text-zinc-600">
              Your component playground is ready to grow.
            </p>
          </div>
          <p className="mt-5 text-[10px] text-zinc-700">CHISPA UI · 0.1.0</p>
        </div>
      </aside>

      <main className="min-h-screen md:ml-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/8 bg-[#09090b]/90 px-5 backdrop-blur-xl md:px-10">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Chispa UI</span>
            <span>/</span>
            <span className="text-zinc-200">{active}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/2.5 px-3 sm:flex">
              <span className="text-zinc-600">⌕</span>
              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value)
                  setActive('Components')
                }}
                placeholder="Search components..."
                className="h-9 w-44 bg-transparent text-xs outline-none placeholder:text-zinc-600"
              />
              <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-zinc-600">
                /
              </kbd>
            </div>
            <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-[10px] font-medium text-orange-300">
              BETA
            </span>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
          <div className="mb-10 flex items-center gap-2 text-xs text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            COMPONENT PLAYGROUND
            <span className="text-zinc-800">/</span>
            v0.1.0
          </div>

          <section className="relative overflow-hidden rounded-2xl border border-white/9 bg-[#101013] p-7 md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-orange-400/[0.07] blur-[100px]" />

            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/6 px-3 py-1.5 text-[11px] text-orange-300">
                <span>✳</span> Crafted for React developers
              </span>

              <h1 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
                Build interfaces
                <br />
                that <span className="text-orange-400">spark.</span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500 md:text-base">
                A growing collection of React components, expressive text
                effects and thoughtful building blocks for your next project.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setActive('Components')}
                  className="rounded-lg bg-orange-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-300"
                >
                  Explore components <span className="ml-2">→</span>
                </button>
                <button
                  onClick={() => setActive('Documentation')}
                  className="rounded-lg border border-white/12 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/5"
                >
                  Documentation ↗
                </button>
              </div>
            </div>

            <div className="relative mt-12 flex items-center gap-5 border-t border-white/[0.07] pt-6">
              <div>
                <p className="text-2xl font-semibold">04</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">Components</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-semibold">02</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">Text effects</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-semibold">React</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">TypeScript</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400">
                  THE COLLECTION
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {active === 'Overview' ? 'Featured components' : active}
                </h2>
                <p className="mt-2 text-sm text-zinc-600">
                  Explore the building blocks of Chispa UI.
                </p>
              </div>
              <button
                onClick={() => setActive('Components')}
                className="text-xs text-zinc-400 transition hover:text-orange-300"
              >
                View all components →
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredComponents.map((component) => (
                <article
                  key={component.name}
                  className="group overflow-hidden rounded-xl border border-white/8 bg-[#0d0d10] transition hover:border-orange-400/30"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[radial-gradient(#ffffff0b_1px,transparent_1px)] bg-size-[18px_18px]">
                    {component.preview === 'button' && (
                      <button className="rounded-lg bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-orange-400/10 transition hover:scale-105">
                        Get started →
                      </button>
                    )}

                    {component.preview === 'tech' && (
                      <div className="absolute inset-0">
                        <TechText
                          text="CHISPA"
                          fontWeight={700}
                          fontSize={112}
                          color="#f4f4f5"
                          accentColor="#fb923c"
                          reach={100}
                          softness={0.72}
                          dashLength={4}
                          dashGap={2}
                          strokeWidth={1.2}
                          lineStyle="dashed"
                          reveal="letter"
                          specks={8}
                          selection
                          labels
                          draggable
                          sweep
                          className="h-full w-full"
                        />
                      </div>
                    )}

                    {component.preview === 'split' && (
                      <div className="text-center">
                        <p className="text-4xl font-bold tracking-tight">
                          Split<span className="text-orange-400">Text.</span>
                        </p>
                        <p className="mt-3 text-xs text-zinc-600">Words in motion.</p>
                      </div>
                    )}

                    {component.preview === 'card' && (
                      <div className="w-56 rounded-xl border border-white/10 bg-[#141418] p-4 shadow-2xl">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="h-8 w-8 rounded-lg bg-orange-400/15 text-center leading-8 text-orange-300">✳</div>
                          <span className="text-[10px] text-zinc-600">01 / CARD</span>
                        </div>
                        <p className="text-sm font-semibold">Made to compose.</p>
                        <p className="mt-2 text-xs text-zinc-600">Simple surfaces, endless possibilities.</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-3 p-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold">{component.name}</h3>
                        <span className="rounded border border-white/8 px-1.5 py-0.5 text-[9px] text-zinc-500">
                          {component.category}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-zinc-600">
                        {component.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setActive(component.category === 'Effects' ? 'Text Effects' : 'Components')}
                      aria-label={`Explore ${component.name}`}
                      className="rounded-md border border-white/8 px-2.5 py-1.5 text-xs text-zinc-500 transition hover:border-orange-400/30 hover:text-orange-300"
                    >
                      ↗
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredComponents.length === 0 && (
              <p className="rounded-xl border border-white/8 p-8 text-center text-sm text-zinc-500">
                No components found for “{search}”.
              </p>
            )}
          </section>

          <footer className="mt-16 flex flex-wrap justify-between gap-3 border-t border-white/[0.07] pt-6 text-[11px] text-zinc-700">
            <p>© 2026 Chispa UI. Built with React and TypeScript.</p>
            <p>Designed to spark creativity. ✳</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App