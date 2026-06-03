import Link from 'next/link'
import { ArrowLeft, ArrowRight, Bookmark, Eye, MessageSquare, Search, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function ArticleGlassCard({ post, href, index, large = false }: { post: SitePost; href: string; index: number; large?: boolean }) {
  return (
    <Link href={href} className={`group relative block min-w-0 ${large ? 'lg:col-span-2' : ''}`}>
      <article className="relative overflow-hidden rounded-[1.25rem] border border-black/[0.08] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.13)]">
        <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <div className="rounded-[1.15rem] border border-white/45 bg-white/75 p-4 text-black shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-black/65">
                <span className="rounded-full bg-[#efe7ff] px-3 py-1 font-black text-black">{getEditableCategory(post)}</span>
                <span>Read {String(index + 1).padStart(2, '0')}</span>
                <Bookmark className="ml-auto h-4 w-4 opacity-60" />
              </div>
              <h3 className={`mt-3 line-clamp-3 font-black leading-tight tracking-normal ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{post.title}</h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/65">{getEditableExcerpt(post, large ? 170 : 120)}</p>
            </div>
          </div>
        </div>
        <span className="absolute -bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/[0.08] bg-white text-black shadow-sm transition group-hover:bg-black group-hover:text-white">
          <ArrowRight className="h-5 w-5" />
        </span>
      </article>
    </Link>
  )
}

function SuggestionItem({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group grid gap-3 rounded-[1.1rem] border border-black/[0.08] bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[108px_minmax(0,1fr)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--slot4-media-bg)] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 py-1">
        <h3 className="line-clamp-2 text-base font-black leading-tight">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-black/55">{getEditableExcerpt(post, 90)}</p>
      </div>
    </Link>
  )
}

function SectionBar({ title, subtitle, href }: { title: string; subtitle: string; href: string }) {
  return (
    <div className="rounded-[1.25rem] border border-black/[0.08] bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <Sparkles className="h-6 w-6 shrink-0 fill-black text-black" />
          <h2 className="text-2xl font-black tracking-normal sm:text-3xl">{title}</h2>
          <p className="hidden text-sm text-black/65 sm:block">{subtitle}</p>
        </div>
        <Link href={href} className="inline-flex items-center gap-3 text-sm font-black">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white"><ArrowRight className="h-5 w-5" /></span>
          View More
        </Link>
      </div>
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroPosts = posts.slice(0, 3)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Read the latest ${taskLabel(primaryTask).toLowerCase()}`
  return (
    <section className="bg-[#f4f5f6]">
      <div className={`${dc.shell.section} py-14 sm:py-16 lg:py-20`}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-black/55">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-4 text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/65">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mx-auto mt-8 flex max-w-xl rounded-full border border-black/[0.08] bg-white p-2 shadow-sm">
            <Search className="ml-3 mt-3 h-5 w-5 shrink-0 text-black/45" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-bold outline-none placeholder:text-black/35" />
            <button className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-black text-white">Search</button>
          </form>
        </div>

        {heroPosts.length ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {heroPosts.map((post, index) => <ArticleGlassCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(3, 11)
  if (!railPosts.length) return null
  return (
    <section className="bg-white py-10">
      <div className={`${dc.shell.section}`}>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black">Recommended for You</h2>
          <div className="hidden gap-2 sm:flex">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white"><ArrowLeft className="h-4 w-4" /></span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white"><ArrowRight className="h-4 w-4" /></span>
          </div>
        </div>
        <div className="mt-5 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {railPosts.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group w-[210px] shrink-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.05rem] bg-[var(--slot4-media-bg)]">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-black">{getEditableCategory(post)}</span>
                <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"><ArrowRight className="h-4 w-4" /></span>
              </div>
              <h3 className="mt-3 line-clamp-2 text-sm font-black leading-tight">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 7)
  if (!featured.length) return null
  return (
    <section className="bg-[#f4f5f6] py-12 sm:py-14">
      <div className={dc.shell.section}>
        <SectionBar title="Suggestions" subtitle="Ideas and picks to explore" href={primaryRoute} />
        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.88fr)]">
          <ArticleGlassCard post={featured[0]} href={postHref(primaryTask, featured[0], primaryRoute)} index={0} large />
          <div className="grid content-start gap-4">
            {featured.slice(1, 6).map((post) => <SuggestionItem key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const grouped = timeSections.flatMap((section) => section.posts)
  const source = grouped.length ? grouped : posts
  const latest = source.slice(0, 5)
  const topics = Array.from(new Map(source.map((post) => [getEditableCategory(post), post])).entries()).slice(0, 10)
  if (!source.length) return null
  return (
    <section className="bg-[#f4f5f6] py-12 sm:py-14">
      <div className={dc.shell.section}>
        <div>
          <h2 className="text-2xl font-black">Most Popular Topics</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topics.map(([category, post]) => (
              <Link key={category} href={`${primaryRoute}?category=${encodeURIComponent(category.toLowerCase())}`} className="group relative overflow-hidden rounded-[1rem] bg-black text-white">
                <img src={getEditablePostImage(post)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105" />
                <div className="relative flex min-h-[78px] flex-col items-center justify-center p-3 text-center">
                  <span className="text-lg font-black">{category}</span>
                  <span className="mt-1 rounded-full bg-white/20 px-3 py-1 text-xs font-black backdrop-blur">articles</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionBar title="Latest Articles" subtitle="Real-time updates that matter" href={primaryRoute} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {latest[0] ? <ArticleGlassCard post={latest[0]} href={postHref(primaryTask, latest[0], primaryRoute)} index={0} large /> : null}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {latest.slice(1, 5).map((post, index) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group grid grid-cols-[130px_minmax(0,1fr)] gap-4 rounded-[1.25rem] border border-black/[0.08] bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--slot4-media-bg)]">
                    <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0 py-2">
                    <div className="flex gap-3 text-xs text-black/55"><span className="inline-flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5" /> {index + 1}</span><span className="inline-flex items-center gap-1"><Eye className="h-3.5 w-3.5" /> {850 + index * 137}</span></div>
                    <h3 className="mt-3 line-clamp-3 text-lg font-black leading-tight">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-white py-14">
      <div className={dc.shell.section}>
        <div className="mx-auto max-w-4xl border-t border-black/[0.14] pt-12 text-center">
          <h2 className="text-4xl font-black tracking-normal">Become part of the article community</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-black/65">Create an account to submit thoughtful articles, ask editorial questions, or help shape the next set of useful reads.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/signup" className={dc.button.primary}>Become an author</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact editorial</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
