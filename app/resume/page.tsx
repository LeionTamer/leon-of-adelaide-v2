import { db } from '@/lib/db'

export default async function ResumePage() {
  const result = await db.execute('select 1')
  return (
    <>
      Resume goes here
      <div>{JSON.stringify(result)}</div>
    </>
  )
}
