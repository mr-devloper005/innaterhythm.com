import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, FileText, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  const benefits = [
    'Prepare article submissions with headline, summary, image, and body copy.',
    'Keep your contributor details ready after login.',
    'Use a cleaner workspace designed around article publishing.',
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f4f5f6] text-black">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1200px] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.88fr_1fr] lg:px-8">
          <div className="rounded-[1.25rem] border border-black/[0.08] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-8">
            <h1 className="text-2xl font-black tracking-normal">{pagesContent.auth.signup.formTitle}</h1>
            <p className="mt-2 text-sm leading-6 text-black/60">Create a local account to access article creation tools.</p>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-black underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-black/55">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-2xl text-5xl font-black leading-[1.04] tracking-normal">{pagesContent.auth.signup.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-black/65">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 rounded-[1.25rem] border border-black/[0.08] bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white"><FileText className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-lg font-black">What your account unlocks</h3>
                  <p className="text-sm text-black/55">A focused start for writing and submitting articles.</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {benefits.map((benefit) => (
                  <p key={benefit} className="flex items-start gap-3 text-sm leading-6 text-black/70"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> {benefit}</p>
                ))}
              </div>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#eef3ed] px-4 py-2 text-sm font-black"><Sparkles className="h-4 w-4" /> Built for article contributors</div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
