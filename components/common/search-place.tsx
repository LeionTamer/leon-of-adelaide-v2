'use client'

import { HTMLProps, useState } from 'react'
import { Command, CommandInput, CommandList } from '../ui/command'

export default function SearchPlace({
  className,
}: {
  className?: HTMLProps<HTMLElement>['className']
}) {
  const [text, setText] = useState('')
  return (
    <Command value={text} className={`mx-auto max-w-5xl ` + className}>
      <CommandInput
        placeholder="This is a test"
        value={text}
        onValueChange={(e) => setText(e)}
      />
      <CommandList>{/* <CommandEmpty>No results</CommandEmpty> */}</CommandList>
    </Command>
  )
}
