import Header from "src\components\Header\header.jsx"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Design Mumbai
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Your website is taking shape! 🚀
        </p>
      </main>
    </div>
  )
}

export default App