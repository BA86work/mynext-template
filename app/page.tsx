"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-TestTheme-primary">Next.js</span> Template
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          เริ่มต้นโปรเจคของคุณด้วย Next.js, TypeScript, และ Tailwind CSS
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            href="/docs" 
            className="px-6 py-3 bg-TestTheme-primary text-white rounded-lg hover:bg-opacity-90 transition flex-shrink-0"
          >
            เริ่มต้นใช้งาน
          </Link>
          
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative group flex items-center w-full md:w-auto bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
              <code className="flex-1 text-base font-bold p-3 pl-4 text-TestTheme-primary dark:text-gray-200">
                bun create &lt;github-name&gt;/&lt;project-name&gt;
              </code>
              <button 
                onClick={() => navigator.clipboard.writeText('bun create BA86work/next-starter-shadcn-pwa')}
                className="p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
                title="Copy to clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
              </button>
            </div>
            
            <Link 
              href="https://github.com/yourusername/your-template"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 border rounded-xl">
          <div className="w-12 h-12 mb-4">
            <Image src="/next.svg" alt="Next.js" width={48} height={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 tracking-tight">Next.js 15</h3>
          <p className="text-gray-600 dark:text-gray-300">
            พร้อมด้วย App Router และ Server Components
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <div className="w-12 h-12 mb-4">
            <Image src="/globe.svg" alt="TypeScript" width={48} height={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 tracking-tight">TypeScript</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Type-safe development ด้วย TypeScript
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <div className="w-12 h-12 mb-4">
            <Image src="/file.svg" alt="Tailwind" width={48} height={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 tracking-tight">Tailwind CSS + Shadcn/UI</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Utility-first CSS framework สำหรับการออกแบบที่ยืดหยุ่น
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <div className="w-12 h-12 mb-4">
            <Image src="/window.svg" alt="ESLint" width={48} height={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 tracking-tight">ESLint & Prettier</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Code formatting และ linting แบบอัตโนมัติ
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>
          สร้างด้วย ❤️ โดย{' '}
          <Link href="https://github.com/my-github" className="font-bold text-TestTheme-primary hover:underline tracking-[-0.1em]">
            タナティップ
          </Link>
        </p>
      </footer>
    </main>
  );
}
