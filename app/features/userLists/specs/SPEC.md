# UserLists feature

## Intent
Permitir agregar y eliminar nombres de usuario en la página principal a través de una tarea sencilla de lista.

## In scope
- Ingresar un nombre de usuario en un campo.
- Agregar el nombre a una lista visible.
- Eliminar usuarios individualmente.

## Out of scope
- Persistencia externa o sincronización con backend.
- Edición de usuarios existentes.

## Requirements
- La feature debe vivir en `app/features/userLists/`.
- La lógica debe estar en `hooks/useUserListsViewModel.ts`.
- La presentación debe ser limpia y consumir componentes compartidos desde `@/app/components`.
- El componente debe ser renderizado por `app/page.tsx`.

## Edge cases
- No agregar cadenas vacías.
- Mostrar un mensaje cuando la lista está vacía.

## Acceptance criteria
- [ ] Se puede ingresar y agregar un nuevo usuario.
- [ ] Se puede eliminar cada usuario.
- [ ] `app/page.tsx` muestra únicamente el componente `UserLists`.
- [ ] La carpeta `app/features/userLists/` contiene `UserLists.tsx`, `hooks/useUserListsViewModel.ts`, `models/`, `specs/SPEC.md`, `index.ts`.
