// List marker: a small chevron drawn from two borders, pointing forward.
// The top margin centres it on the first line of 15px body text.
export default function Marker() {
  return (
    <span
      className="ml-0.5 mt-[8.5px] mr-3.5 h-[7px] w-[7px] shrink-0 rotate-45 border-r border-t border-accent"
      aria-hidden="true"
    />
  )
}
