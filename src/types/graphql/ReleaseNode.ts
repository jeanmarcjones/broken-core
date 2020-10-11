export interface ReleaseFrontmatter {
  artist: string
  cat: number
  date: string
  soundcloud: string
  title: string
}

export interface ReleaseNode {
  html: string
  frontmatter: ReleaseFrontmatter
  fields: {
    slug: string
  }
}
