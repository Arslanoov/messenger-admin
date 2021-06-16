export interface ProfileInterface {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

interface UserInterface {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

export default UserInterface;
