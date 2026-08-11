"use client"

import React from 'react'
import Button from '@/app/components/button/Button'
import Section from '@/app/components/section/Section'
import SectionTitle from '@/app/components/section-title/SectionTitle'
import { useUserListsViewModel } from './hooks/useUserListsViewModel'
import UserListsForm from './UserListsForm'

const UserLists: React.FC = () => {
  const {
    users,
    newName,
    setNewName,
    addUser,
    removeUser,
  } = useUserListsViewModel()

  return (
    <Section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
      <SectionTitle text="Usuarios" />
      <UserListsForm
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
        onAdd={addUser}
      />

      <div className="mt-6 space-y-3">
        {users.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No hay usuarios agregados.
          </p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {user.name}
              </span>
              <Button
                type="button"
                onClick={() => removeUser(user.id)}
                className="rounded-full bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
              >
                Eliminar
              </Button>
            </div>
          ))
        )}
      </div>
    </Section>
  )
}

export default UserLists
