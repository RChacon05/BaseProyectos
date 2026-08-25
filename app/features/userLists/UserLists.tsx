"use client"

import React from 'react'
import Button from '@/app/components/button/Button'
import Section from '@/app/components/section/Section'
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
    <Section className="min-h-screen bg-[#f7fafc] px-4 py-6 text-[#172b4d] sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-10 border-b border-[#dbe4ed] pb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#008f95]">
            Gestión IT
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#172b4d] sm:text-4xl">
            Usuarios
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#60758f] sm:text-base">
            Administra los usuarios del sistema y mantén actualizado el directorio operativo.
          </p>
        </header>

        <div className="mb-8 rounded-2xl border border-[#dbe4ed] bg-white p-5 shadow-[0_8px_24px_rgba(23,43,77,0.06)] sm:p-6">
          <UserListsForm
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            onAdd={addUser}
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#dbe4ed] bg-white shadow-[0_8px_24px_rgba(23,43,77,0.06)]">
          <div className="border-b border-[#dbe4ed] px-5 py-4 sm:px-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[#60758f]">
              Directorio de usuarios
            </h2>
          </div>

          {users.length === 0 ? (
            <p className="px-5 py-12 text-center text-sm text-[#60758f] sm:px-6">
              No hay usuarios agregados.
            </p>
          ) : (
            <div>
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex min-h-16 items-center justify-between gap-4 border-b border-[#edf1f5] px-5 last:border-b-0 sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e4f5f3] text-sm font-bold text-[#007f83]">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="truncate text-sm font-semibold text-[#172b4d]">
                      {user.name}
                    </span>
                  </div>
                  <Button
                    type="button"
                    onClick={() => removeUser(user.id)}
                    className="shrink-0 rounded-lg border border-[#f0c9c9] bg-white px-3 py-2 text-xs font-bold text-[#c03939] transition-colors hover:bg-[#fff5f5]"
                  >
                    Eliminar
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-[#dbe4ed] bg-[#fbfcfd] px-5 py-3 text-xs font-medium text-[#60758f] sm:px-6">
            Mostrando {users.length} {users.length === 1 ? 'usuario' : 'usuarios'}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default UserLists
