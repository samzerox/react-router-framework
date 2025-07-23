import { Mail } from "lucide-react"

const NoChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
      {/* Usamos el icono Mail de lucide-react para representar mensajes */}
      <Mail className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
      <h2 className="text-xl font-semibold mb-2">No hay ningún chat seleccionado</h2>
      <p className="text-sm">Por favor, selecciona un chat de la lista para comenzar.</p>
    </div>
  )
}

export default NoChatSelectedPage