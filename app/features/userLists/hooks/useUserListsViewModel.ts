"use client"

import { useState } from 'react'
import { User } from '../models/User'

export const useUserListsViewModel = () => {
  const [users, setUsers] = useState<User[]>([])
  const [newName, setNewName] = useState('')

  const addUser = () => {
    const name = newName.trim()
    if (!name) return
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    setUsers(prev => [...prev, { id, name }])
    setNewName('')
  }

  const removeUser = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  return { users, newName, setNewName, addUser, removeUser }
}
