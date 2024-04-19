export const FormatMangaLinks = {
  getMangaCover: (image, id) => {
    return `https://earlym.org/storage/uploads/covers_optimized_home_slider/manga_${id}/${image}`
  },
  getMangaPageLink: (mangaId, chapterSlug, page) => {
    return `https://earlym.org/storage/uploads/manga/manga_${mangaId}/chapter_${chapterSlug}/${page}`
  },
}
