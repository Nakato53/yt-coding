import './App.css'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

function App({ children }:Props) {

  return (
      <div className="bg-gray-100 dark:bg-slate-600 max-w-full h-screen flex items-center justify-center flex-col">
        {children}    
      </div>
  )
}

export default App
