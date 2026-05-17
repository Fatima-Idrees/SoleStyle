import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const login = (email, password) => {
    // Mock login - accept any email/password
    const name = email.split('@')[0]
    setUser({ email, name })
    setShowAuthModal(false)
    return true
  }

  const signup = (email, password, name) => {
    setUser({ email, name })
    setShowAuthModal(false)
    return true
  }

  const logout = () => {
    setUser(null)
  }

  const continueAsGuest = () => {
    setUser({ name: 'Guest', isGuest: true })
    setShowAuthModal(false)
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      continueAsGuest,
      showAuthModal,
      setShowAuthModal,
      isLogin,
      setIsLogin
    }}>
      {children}
    </AuthContext.Provider>
  )
}