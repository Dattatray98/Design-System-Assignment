import { useState } from 'react'
import './styles/colors.css'

function App() {
  return (
    <div className="min-h-screen bg-surface-background-primary text-surface-text-primary">
      <header className="bg-surface-background-secondary border-b border-surface-border-light p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">Design System</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-surface-text-secondary hover:text-primary-500">Home</a></li>
              <li><a href="#" className="text-surface-text-secondary hover:text-primary-500">Components</a></li>
              <li><a href="#" className="text-surface-text-secondary hover:text-primary-500">Documentation</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Design System</h2>
          <p className="text-surface-text-secondary mb-6">
            This design system provides a comprehensive set of components and styles for building consistent and accessible user interfaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-background-secondary p-6 rounded-lg border border-surface-border-light">
              <h3 className="text-xl font-semibold mb-2 text-primary-600">Color System</h3>
              <p className="text-surface-text-secondary mb-4">
                A comprehensive color palette with semantic meaning and accessibility considerations.
              </p>
              <a href="#" className="text-primary-500 hover:text-primary-700 font-medium">Learn more →</a>
            </div>
            
            <div className="bg-surface-background-secondary p-6 rounded-lg border border-surface-border-light">
              <h3 className="text-xl font-semibold mb-2 text-secondary-600">Data Display</h3>
              <p className="text-surface-text-secondary mb-4">
                Components for displaying data in various formats and styles.
              </p>
              <a href="#" className="text-secondary-500 hover:text-secondary-700 font-medium">Learn more →</a>
            </div>
            
            <div className="bg-surface-background-secondary p-6 rounded-lg border border-surface-border-light">
              <h3 className="text-xl font-semibold mb-2 text-tertiary-600">Navigation</h3>
              <p className="text-surface-text-secondary mb-4">
                Components for navigating through content and applications.
              </p>
              <a href="#" className="text-tertiary-500 hover:text-tertiary-700 font-medium">Learn more →</a>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Component Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-background-secondary p-6 rounded-lg border border-surface-border-light">
              <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-success-500 mr-2"></div>
                  <span>Success</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-error-500 mr-2"></div>
                  <span>Error</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-warning-500 mr-2"></div>
                  <span>Warning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-info-500 mr-2"></div>
                  <span>Info</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-background-secondary p-6 rounded-lg border border-surface-border-light">
              <h3 className="text-xl font-semibold mb-4">Surface Colors</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-surface-background-primary mr-2 border border-surface-border-light"></div>
                  <span>Background Primary</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-surface-background-secondary mr-2 border border-surface-border-light"></div>
                  <span>Background Secondary</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-surface-border-light mr-2"></div>
                  <span>Border Light</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-surface-border-medium mr-2"></div>
                  <span>Border Medium</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-surface-background-secondary border-t border-surface-border-light p-6">
        <div className="container mx-auto text-center text-surface-text-secondary">
          <p>© 2023 Design System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
