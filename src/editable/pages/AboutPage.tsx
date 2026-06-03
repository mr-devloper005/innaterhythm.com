import Link from 'next/link'
import { ArrowRight, BookOpen, FileText, Search, Users } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const stats = [
    ['Reader rhythm', 'Comfortable article widths and compact supporting sections.'],
    ['Editorial flow', 'Featured posts, search, related reads, and contributor paths.'],
    ['Article focus', 'Every page is written for publishing, reading, and discovery.'],
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f4f5f6] px-4 py-12 text-black sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <article className="rounded-[1.25rem] border border-black/[0.08] bg-white p-7 shadow-sm sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-black/55">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.04] tracking-normal">{pagesContent.about.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/65">{pagesContent.about.description}</p>
              <div className="mt-8 space-y-4 text-base leading-8 text-black/72">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/article" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-black text-white">Browse articles <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/create" className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-6 py-3 text-sm font-black">Become a contributor</Link>
              </div>
            </article>

            <aside className="grid gap-4">
              {pagesContent.about.values.map((value, index) => {
                const Icon = [BookOpen, Search, Users][index] || FileText
                return (
                  <div key={value.title} className="rounded-[1.25rem] border border-black/[0.08] bg-white p-6 shadow-sm">
                    <Icon className="h-5 w-5" />
                    <h2 className="mt-4 text-xl font-black tracking-normal">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-black/65">{value.description}</p>
                  </div>
                )
              })}
            </aside>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map(([title, body]) => (
              <div key={title} className="rounded-[1.25rem] border border-black/[0.08] bg-white p-6">
                <p className="text-sm font-black">{title}</p>
                <p className="mt-2 text-sm leading-6 text-black/60">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.25rem] border border-black/[0.08] bg-black p-7 text-white sm:p-10">
            <p className="text-sm font-bold text-white/60">{globalContent.site.name}</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal">Articles should feel easy to enter and worth staying with.</h2>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
