import { useState, useRef, useEffect } from 'react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm ShoeBot 👋, your personal shoe assistant. Ask me about sizing, shipping, or get recommendations!" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('size') || msg.includes('sizing') || msg.includes('size guide')) {
      return "📏 **Size Guide**: Our shoes run true to size. Here's a quick reference:\n- US 6 = EU 36\n- US 7 = EU 37\n- US 8 = EU 38\n- US 9 = EU 39\n- US 10 = EU 40\n- US 11 = EU 41\n- US 12 = EU 42\n\nStill unsure? Check the product page for specific size availability!"
    }
    
    if (msg.includes('shipping') || msg.includes('delivery')) {
      return "🚚 **Shipping Info**:\n- Standard: 3-5 business days ($5.99)\n- Express: 1-2 business days ($12.99)\n- Free shipping on orders over $100!\n- International shipping available (7-14 days)"
    }
    
    if (msg.includes('return') || msg.includes('exchange')) {
      return "🔄 **Return Policy**:\n- 30-day hassle-free returns\n- Free return shipping on all orders\n- Items must be unworn with original packaging\n- Refunds processed within 5-7 business days"
    }
    
    if (msg.includes('recommend') || msg.includes('suggestion')) {
      return "👟 **Get Recommendations**! Let me help you find the perfect shoes:\n\nChoose a category:\n• Running 🏃\n• Casual 👕\n• Formal 👔\n• Sports ⚽\n\nReply with your preference!"
    }
    
    if (msg.includes('running')) {
      return "🏃 **Running Shoe Recommendations**:\n1. **Ultraboost Light** - Best for daily training\n2. **Gel-Kayano 30** - Maximum stability\n3. **Fresh Foam X** - Plush cushioning\n\nAll are available in the Men's category!"
    }
    
    if (msg.includes('casual')) {
      return "👟 **Casual Shoe Picks**:\n1. **Air Max Pulse** - Iconic style\n2. **Chuck 70** - Classic vintage\n3. **Old Skool** - Skate-inspired\n\nCheck out our Women's collection for more!"
    }
    
    if (msg.includes('formal')) {
      return "👔 **Formal Shoe Recommendations**:\nFor formal occasions, we recommend leather dress shoes from our premium collection. Check back soon for new arrivals!"
    }
    
    if (msg.includes('order status')) {
      return "📦 **Order Status**: Please provide your order number (e.g., #SOLE-12345) and I'll help track it for you!"
    }
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! 👋 Welcome to SoleStyle! How can I help you today? You can ask me about:\n- Sizing 📏\n- Shipping 🚚\n- Returns 🔄\n- Product recommendations 👟"
    }
    
    if (msg.includes('help')) {
      return "I can help with:\n• Size guides\n• Shipping information\n• Return policies\n• Product recommendations\n• Order tracking\n\nJust ask me anything!"
    }
    
    return "Thanks for your question! For specific product details, please check the product page. Would you like me to help with sizing, shipping, or recommendations?"
  }

  const sendMessage = async (text) => {
    if (!text.trim()) return
    
    setMessages(prev => [...prev, { type: 'user', text: text }])
    setInput('')
    setIsTyping(true)
    
    setTimeout(() => {
      const response = getBotResponse(text)
      setMessages(prev => [...prev, { type: 'bot', text: response }])
      setIsTyping(false)
    }, 800)
  }

  const quickReplies = [
    { text: "📏 Size Guide", action: "size guide" },
    { text: "🚚 Shipping Info", action: "shipping info" },
    { text: "👟 Get Recommendations", action: "recommend me shoes" }
  ]

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-comment-dots"></i>
        <span className="chatbot-badge">👟</span>
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <span className="chatbot-icon">👟</span>
            <div>
              <h3>ShoeBot</h3>
              <p>Online • Ready to help</p>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              <div className="message-bubble">
                {msg.type === 'bot' && <span className="bot-icon">👟</span>}
                <div className="message-text">{msg.text}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-replies">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              className="quick-reply-btn"
              onClick={() => sendMessage(reply.action)}
            >
              {reply.text}
            </button>
          ))}
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Ask ShoeBot..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
          />
          <button onClick={() => sendMessage(input)}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Chatbot