import { useCart } from '../contexts/CartContext'

const Toast = () => {
  const { toast } = useCart()
  
  if (!toast) return null
  
  return (
    <div className={`toast toast-${toast.type}`}>
      <i className={`fas ${toast.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
      <span>{toast.message}</span>
    </div>
  )
}

export default Toast