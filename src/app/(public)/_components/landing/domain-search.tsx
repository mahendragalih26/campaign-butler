"use client"

import { useState } from "react"
import { Button } from "@/components/atoms/button"
import { Icon } from "@iconify/react"

const DomainSearch = () => {
  const [domain, setDomain] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle domain search logic here
    console.log("Searching for domain:", domain)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <span className="text-white">Find Your Domain</span>
      <input
        type="text"
        name="domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        required
        className="w-[50%] px-4 py-2 bg-gray-800/50 rounded-lg outline-none text-white placeholder-gray-400"
        placeholder="Type Here.."
      />
      <span className="text-white">.vote</span>
      <Button type="submit" variant="outline">
        Search <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
      </Button>
    </form>
  )
}

export default DomainSearch
