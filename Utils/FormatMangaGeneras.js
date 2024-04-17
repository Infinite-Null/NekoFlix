export function FormatMangaGeneras(geners) {
  let finalString = ""
  for (let i = 0; i < geners.length; i++) {
    if (i === geners.length - 1) {
      finalString += geners[i].name
    } else {
      finalString += geners[i].name + " . "
    }
  }
  return finalString
}
