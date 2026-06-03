'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, LogOut } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#ffffff', '--editable-footer-text': 'var(--editable-page-text, #111111)', '--editable-container': '1200px' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const mostViewed = taskLinks.slice(0, 3)

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1.05fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[var(--editable-border)] bg-white">
              <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-8 w-8 object-contain" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-normal">{globalContent.site.name}</span>
              <span className="block text-xs font-bold opacity-55">{globalContent.footer.tagline}</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer.description}</p>
          {session ? (
            <button type="button" onClick={logout} className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] px-4 py-2 text-sm font-black">
              <LogOut className="h-4 w-4" /> Logout {session.name}
            </button>
          ) : null}
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] opacity-55">Categories</h3>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] opacity-55">Most useful lanes</h3>
          <div className="mt-4 grid gap-3">
            {mostViewed.map((task) => (
              <Link key={task.key} href={task.route} className="rounded-2xl border border-[var(--editable-border)] bg-[#f4f5f6] p-4 transition hover:-translate-y-0.5 hover:bg-white">
                <span className="text-sm font-black">{task.label}</span>
                <span className="mt-1 block text-xs leading-5 opacity-60">{task.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[var(--editable-container)] flex-wrap items-center justify-between gap-3 border-t border-[var(--editable-border)] px-4 py-5 text-xs font-bold opacity-60 sm:px-6 lg:px-8">
        <span>Copyright © {year} {globalContent.site.name}. All rights reserved.</span>
        <div className="flex flex-wrap gap-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/search">Search</Link>
          {session ? <Link href="/create">Create</Link> : <Link href="/login">Login</Link>}
        </div>
      </div>
    </footer>
  )
}
