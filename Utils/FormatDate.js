export function FormatDate(){
  const date = "2020-12-14T13:18:05.000000Z"
  const newDate = new Date(date)
  return newDate.toLocaleDateString('en-US')
}
