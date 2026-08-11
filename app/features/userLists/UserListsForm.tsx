import Button from '@/app/components/button/Button'
import FormField from '@/app/components/form-field/FormField'
import { ChangeEvent } from 'react'

interface UserListsFormProps {
  value: string
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
  onAdd: () => void
}

const UserListsForm = ({ value, onChange, onAdd }: UserListsFormProps) => (
  <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
    <FormField
      id="user-list-name"
      name="userListName"
      label="Nombre de usuario"
      value={value}
      placeholder="Agregar nuevo usuario"
      labelSuffix=""
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          onAdd()
        }
      }}
    />
    <Button type="button" onClick={onAdd} className="self-end whitespace-nowrap">
      Agregar
    </Button>
  </div>
)

export default UserListsForm
