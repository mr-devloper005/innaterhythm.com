import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, PenLine, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  const notes = [
    { icon: BookOpen, title: 'Continue reading', body: 'Return to the article archive and keep discovering useful stories.' },
    { icon: PenLine, title: 'Draft submissions', body: 'Open the create page after login and prepare article-ready posts.' },
    { icon: Search, title: 'Find ideas faster', body: 'Use search and categories to shape your next contribution.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f4f5f6] text-black">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1200px] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-black/55">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.04] tracking-normal">{pagesContent.auth.login.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-black/65">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:max-w-3xl">
              {notes.map((note) => (
                <div key={note.title} className="rounded-[1.25rem] border border-black/[0.08] bg-white p-5">
                  <note.icon className="h-5 w-5" />
                  <h2 className="mt-4 text-base font-black">{note.title}</h2>
                  <p className="mt-2 text-xs leading-6 text-black/60">{note.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-black/[0.08] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-8">
            <h2 className="text-2xl font-black tracking-normal">{pagesContent.auth.login.formTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-black/60">Use the account you created for article submissions.</p>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-black/65">New here? <Link href="/signup" className="inline-flex items-center gap-1 font-black text-black underline-offset-4 hover:underline">{pagesContent.auth.login.createCta} <ArrowRight className="h-3.5 w-3.5" /></Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
