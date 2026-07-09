import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ChatBubble, Card, Loader, Input, Badge } from './components';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-surface-50 to-primary-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b border-surface-200"
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-primary-900">Smilyism16</h1>
          <p className="text-surface-600 mt-1">Interactive UI Pro Max Components</p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Component Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Buttons Section */}
          <Card>
            <h2 className="text-xl font-bold text-primary-900 mb-4">Buttons</h2>
            <div className="space-y-3">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button isLoading>Loading Button</Button>
            </div>
          </Card>

          {/* Badges Section */}
          <Card>
            <h2 className="text-xl font-bold text-primary-900 mb-4">Badges</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="neutral" animated>Active</Badge>
            </div>
          </Card>
        </div>

        {/* Chat Interface */}
        <Card className="mb-12">
          <h2 className="text-xl font-bold text-primary-900 mb-4">Chat Example</h2>
          <div className="bg-surface-50 rounded-lg p-4 mb-4 max-h-96 overflow-y-auto">
            <ChatBubble
              message="Hello! How can I help you today?"
              avatar="AI"
              timestamp="10:30 AM"
            />
            <ChatBubble
              message="I'd like to explore your UI components."
              isUser
              avatar="You"
              timestamp="10:31 AM"
            />
            <ChatBubble
              message="Great! You can customize colors, sizes, and animations."
              avatar="AI"
              timestamp="10:32 AM"
            />
          </div>
          
          {/* Input Area */}
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSend} isLoading={isLoading}>
              Send
            </Button>
          </div>
        </Card>

        {/* Loaders Section */}
        <Card>
          <h2 className="text-xl font-bold text-primary-900 mb-4">Loaders</h2>
          <div className="flex justify-around items-center py-12">
            <div className="text-center">
              <Loader variant="dots" />
              <p className="text-sm text-surface-600 mt-2">Dots</p>
            </div>
            <div className="text-center">
              <Loader variant="spinner" />
              <p className="text-sm text-surface-600 mt-2">Spinner</p>
            </div>
            <div className="text-center">
              <Loader variant="pulse" />
              <p className="text-sm text-surface-600 mt-2">Pulse</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default App;