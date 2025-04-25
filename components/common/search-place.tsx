'use client'

import { useState } from 'react'
import { Command, CommandInput, CommandList } from '../ui/command'

export default function SearchPlace() {
  const [text, setText] = useState('')
  return (
    <Command value={text}>
      <CommandInput
        placeholder="This is a test"
        value={text}
        onValueChange={(e) => setText(e)}
      />
      <CommandList>{/* <CommandEmpty>No results</CommandEmpty> */}</CommandList>
    </Command>
  )
}
