export function FormatDescription(description) {
  return description.replaceAll("<br>", "").replaceAll("<i>", "").replaceAll("</i>", "")
}
