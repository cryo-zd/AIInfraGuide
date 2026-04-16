import type { CollectionEntry } from 'astro:content';

type Guide = CollectionEntry<'guides'>;

export interface ChapterGroup {
  /** The chapter entry itself (第N章 file) */
  chapter: Guide;
  /** Child articles belonging to this chapter */
  children: Guide[];
}

export interface GroupedResult {
  chapters: ChapterGroup[];
  /** Articles that don't belong to any chapter */
  ungrouped: Guide[];
}

/** Regex to detect chapter files by title: "第N章" */
const CHAPTER_TITLE_RE = /^第(\d+)章/;

/** Check if an item is a chapter file (by title) */
function isChapterItem(item: Guide): boolean {
  return CHAPTER_TITLE_RE.test(item.data.title);
}

/** Extract chapter number from title */
function getChapterNumber(item: Guide): number {
  const m = item.data.title.match(CHAPTER_TITLE_RE);
  return m ? parseInt(m[1], 10) : 0;
}

/**
 * Group a flat list of articles into chapter groups.
 * - Chapter files (title matches "第N章") become group headers.
 * - Articles with a `chapter` field are nested under the matching chapter.
 * - Articles without a `chapter` field and non-chapter files go to `ungrouped`.
 */
export function groupByChapter(items: Guide[]): GroupedResult {
  const sorted = [...items].sort((a, b) => a.data.order - b.data.order);

  // Separate chapter entries and regular articles
  const chapterEntries = sorted.filter(isChapterItem);
  const regularArticles = sorted.filter((item) => !isChapterItem(item));

  // Build a map: chapterNumber -> ChapterGroup
  const chapterMap = new Map<number, ChapterGroup>();
  for (const ch of chapterEntries) {
    const num = getChapterNumber(ch);
    chapterMap.set(num, { chapter: ch, children: [] });
  }

  const ungrouped: Guide[] = [];

  for (const article of regularArticles) {
    const chNum = article.data.chapter;
    if (chNum !== undefined && chapterMap.has(chNum)) {
      chapterMap.get(chNum)!.children.push(article);
    } else {
      ungrouped.push(article);
    }
  }

  // Sort chapters by their chapter number
  const chapters = [...chapterMap.values()].sort(
    (a, b) => getChapterNumber(a.chapter) - getChapterNumber(b.chapter)
  );

  return { chapters, ungrouped };
}

/**
 * Flatten chapter groups into reading order:
 * ungrouped first, then chapter1 → children → chapter2 → children → ...
 */
export function flattenChapterOrder(items: Guide[]): Guide[] {
  const { chapters, ungrouped } = groupByChapter(items);
  const result: Guide[] = [...ungrouped];
  for (const group of chapters) {
    result.push(group.chapter);
    result.push(...group.children);
  }
  return result;
}
