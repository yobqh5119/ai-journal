import EntryCard from '@/component/EntryCard'
import NewEntryCard from '@/component/NewEntryCard'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="grid grid-cols-3 gap-4 p-10 ">
        <NewEntryCard />
        {entries.map((entry) => (
          <EntryCard entry={entry} key={entry.id} />
        ))}
      </div>
    </div>
  )
}

export default JournalPage
