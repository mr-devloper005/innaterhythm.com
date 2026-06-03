'use client'

import { FileText, Mail, MessageSquare, PenLine } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: PenLine, title: 'Pitch an article', body: 'Send a headline idea, outline, contributor note, or column proposal for review.' },
    { icon: MessageSquare, title: 'Request a correction', body: 'Tell us which article needs attention and include the clearest source or context.' },
    { icon: FileText, title: 'Publishing support', body: 'Ask about formatting, author access, categories, summaries, or editorial workflow.' },
    { icon: Mail, title: 'Partnerships', body: 'Reach out for newsletter, sponsorship, guest writing, or long-form collaboration requests.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f4f5f6] text-black">
        <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-black/55">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 max-w-2xl text-5xl font-black leading-[1.04] tracking-normal">{pagesContent.contact.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-black/65">{pagesContent.contact.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {lanes.map((lane) => (
                  <div key={lane.title} className="rounded-[1.25rem] border border-black/[0.08] bg-white p-5 shadow-sm">
                    <lane.icon className="h-5 w-5" />
                    <h2 className="mt-4 text-lg font-black">{lane.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-black/62">{lane.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-black/[0.08] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-7">
              <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-black/60">Use clear article-related details so we can route your note quickly.</p>
              <div className="mt-5">
                <EditableContactLeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
