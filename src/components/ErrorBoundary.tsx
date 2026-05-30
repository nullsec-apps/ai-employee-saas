import { Component, ReactNode } from 'react'

interface State { hasError: boolean }

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-[#0A0A0F] text-white px-6">
          <div className="text-center max-w-md">
            <h1 className="font-display font-extrabold text-3xl">Something went wrong</h1>
            <p className="text-white/60 mt-3">An unexpected error occurred. Please refresh the page to continue.</p>
            <button onClick={() => location.reload()} className="mt-6 px-6 h-11 rounded-lg bg-[#6D5DFB] hover:bg-[#5b4ce0] transition-colors text-white font-medium">Reload page</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}