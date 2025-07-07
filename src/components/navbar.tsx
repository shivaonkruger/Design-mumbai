import { ChevronDown } from "lucide-react"


export default function NavigationHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
         


          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light text-gray-400">
              Design
              <br />
              <span className="italic">Mumbai</span>
            </h1>
          </div>

        


          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Exhibit
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Exhibitors
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                Partners
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                Talks
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Visit
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Team
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          //space left for subscribe button 
        
        </div>
      </div>
    </header>
  )
}


//   <div className="flex-shrink-0">
//             <Button
//               variant="outline"
//               className="border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 bg-transparent"
//             >
//               Subscribe
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button variant="ghost" size="sm">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </Button>
//           </div>