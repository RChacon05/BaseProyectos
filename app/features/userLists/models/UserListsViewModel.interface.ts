import { ChangeEvent } from 'react'
import { User } from './User'

export interface UserListsViewModel {
  users: User[]
  newName: string
  handleNewNameChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddUser: () => void
  handleRemoveUser: (id: string) => void
}
