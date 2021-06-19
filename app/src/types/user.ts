export interface ProfileInterface {
  uuid: string,
  username: string,
  status: string,
  role: string,
  avatar?: string,
  about?: string,
  latestActivity?: string,
  messagesCount?: number
}

interface UserInterface {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

export default UserInterface;
