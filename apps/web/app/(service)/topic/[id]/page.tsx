import { TopicDetail } from './TopicDetail'
import { TopicSide } from './TopicSide'

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = decodeURI((await params).id)

  return (
    <main className='flex sm:flex-col md:flex-col md:max-w-[800px] max-w-[1280px] w-full px-10 sm:px-6 py-20 sm:pt-10 gap-20'>
      <TopicDetail id={id} />
      <TopicSide id={id} />
    </main>
  )
}
