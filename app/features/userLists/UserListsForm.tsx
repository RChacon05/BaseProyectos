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
  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
    <FormField
      id="user-list-name"
      name="userListName"
      label="Nombre de usuario"
      value={value}
      placeholder="Ej. dr.smith"
      labelSuffix=""
      classNameField="border-[#c7d5e2] bg-white text-[#172b4d] placeholder:text-[#8da0b5] focus:border-[#008f95] focus:ring-[#008f95]"
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          onAdd()
        }
      }}
    />
    <Button
      type="button"
      onClick={onAdd}
      className="h-12 whitespace-nowrap rounded-lg bg-[#008f95] px-5 font-bold text-white transition-colors hover:bg-[#00777c]"
    >
      Agregar usuario
    </Button>
  </div>
)

export default UserListsForm
