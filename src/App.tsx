import './App.css'
import LoginPage from './Pages/LoginPage'

function App() {

  return (
    <>
      <div className="relative flex flex-col w-full min-h-[100dvh]">
      {/* 중앙 컨텐츠 영역 */}
        <main className="flex items-center justify-center">
          <LoginPage />
        </main>
    </div>
    </>
  )
}

export default App
