import { UserCircle } from 'lucide-react'
import React from 'react'

export const NoContactSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-muted-foreground">
        <div className="mb-4">
            <UserCircle className="w-12 h-12 text-muted-foreground" />
        </div>
      <span className="text-2xl mb-2">Selecciona un contacto para comenzar</span>
      <p className="text-sm">Por favor, elige un contacto de la lista para ver su información y empezar a chatear.</p>
    </div>
  )
}
