import { createClient } from './supabase/server'
import { getUserId } from './cookie/server'

export const isSignedUser = async () => {
  const supabase = await createClient()
  const userId = await getUserId()

  const { error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    console.log('존재하지 않는 유저.', error)
    return 0
  } else {
    return 1
  }
}
