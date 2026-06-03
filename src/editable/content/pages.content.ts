import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Fresh articles for curious readers',
      description: 'Explore thoughtful articles, editorial picks, and searchable reading collections in a cleaner magazine-style experience.',
      openGraphTitle: 'Fresh articles for curious readers',
      openGraphDescription: 'Discover thoughtful articles, practical essays, and contributor-led stories through a calm reading-first experience.',
      keywords: ['article platform', 'online magazine', 'editorial stories', 'content discovery'],
    },
    hero: {
      badge: 'Article magazine',
      title: ['Your gateway to', 'fresh ideas and deeper reading.'],
      description: 'Read sharp articles, timely perspectives, and contributor-led essays arranged in a clean magazine layout that never feels stretched.',
      primaryCta: { label: 'Read latest articles', href: '/article' },
      secondaryCta: { label: 'Search archive', href: '/search' },
      searchPlaceholder: 'Search articles, topics, authors, and categories',
      focusLabel: 'Today',
      featureCardBadge: 'editorial focus',
      featureCardTitle: 'A calmer homepage for readers who want substance.',
      featureCardDescription: 'Featured articles, trending topics, and recommended reads stay visually rich without overwhelming the page.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for readers who want articles with clarity, context, and momentum.',
      paragraphs: [
        'This site brings articles, opinion pieces, interviews, explainers, and practical guides into one clear reading experience.',
        'Instead of a crowded feed, every section is paced like a modern magazine: strong images, readable excerpts, compact sidebars, and focused calls to keep moving.',
        'Readers can start from the homepage, search, category pages, or a single article and still find a natural path to the next useful story.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with magazine-style article cards.',
        'Cleaner topic discovery for categories, search, and related posts.',
        'Contributor-friendly pages for submitting new article ideas.',
        'Balanced layouts that stay readable on laptop, desktop, and mobile.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore the next article worth your time.',
      description: 'Move between latest stories, editor picks, topic clusters, and related articles through one clearer visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A calmer, clearer magazine for article readers.',
    description: `${slot4BrandConfig.siteName} is built for people who want meaningful articles without a noisy, stretched, or cluttered interface.`,
    paragraphs: [
      'Our goal is simple: make article discovery feel intentional. Every page gives the headline room, keeps supporting details close, and helps readers decide what to open next.',
      'Writers get a cleaner publishing path, while readers get a magazine-like rhythm with featured stories, topic rails, search, and related articles that feel connected.',
      'The experience is designed around trust: visible forms, clear navigation, balanced card layouts, and readable article detail pages that focus on the actual story.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize headline hierarchy, comfortable widths, and article typography so reading feels steady from first scroll to final paragraph.',
      },
      {
        title: 'Editorial discovery',
        description: 'Latest articles, topic collections, related posts, and search results are arranged to help readers keep exploring without getting lost.',
      },
      {
        title: 'Contributor friendly',
        description: 'Login, sign up, create, and contact flows explain what writers can do and keep form text readable on every page.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to us about articles, contributors, and editorial support.',
    description: 'Send pitches, partnership notes, correction requests, or publishing questions. We keep the form simple so the message stays clear.',
    formTitle: 'Send an editorial note',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find the article you came for.',
      description: 'Search by headline, topic, author cue, category, or keyword across the article archive.',
      placeholder: 'Search articles, categories, keywords, or titles',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new article content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to open the article workspace.',
      description: 'Use your account to draft article ideas, add summaries, and prepare reader-friendly submissions.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create article-ready submissions.',
      description: 'Add a headline, category, summary, source link, featured image, and body copy so every article starts with a clear editorial structure.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for the article platform.',
      badge: 'Member access',
      title: 'Welcome back to your reading and writing desk.',
      description: 'Login to continue reading, draft article submissions, and keep your contributor details ready for future posts.',
      formTitle: 'Login to continue',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for the article platform.',
      badge: 'Site access',
      title: 'Create an account for thoughtful publishing.',
      description: 'Join the contributor side of the platform, save your details, and start preparing article submissions with a cleaner workflow.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
