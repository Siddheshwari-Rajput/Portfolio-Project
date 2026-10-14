/**
 * External link that degrades to a clearly marked placeholder when href is empty.
 * `label` is what the user sees; `missing` is shown when no URL has been added yet.
 */
export default function ExtLink({ href, label, missing, className = '' }) {
  if (!href) {
    return (
      <span className={`link-missing ${className}`} title="Add this URL in src/data/content.js">
        {missing || `[${label} link]`}
      </span>
    )
  }
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
