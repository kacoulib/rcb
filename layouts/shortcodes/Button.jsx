import Link from "next/link"

const Button = ({ href, type, rel, children }) => {
  return (
    <Link href={href} target="_blank" rel={`noopener noreferrer ${rel?(rel==="follow"?"":rel):"nofollow"}`} className={`btn mb-4 me-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark ${type === "outline"? "btn-outline-primary" : "btn-primary"}`}>
      {children}
    </Link>
  )
}

export default Button
