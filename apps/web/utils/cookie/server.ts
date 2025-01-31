import { cookies } from 'next/headers'

export const getUserId = async () => {
  return (await cookies()).get('userId')?.value
}

export const getToken = async () => {
  return (await cookies()).get('token')?.value
}
