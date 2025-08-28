'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Book, Code, Briefcase, ShoppingCart, ChevronDown, User } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { 
      name: 'Microtutoriales', 
      href: '/tutorials', 
      icon: Code,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Todos los Tutoriales', href: '/tutorials' },
        { name: 'JavaScript', href: '/tutorials?category=JavaScript' },
        { name: 'React', href: '/tutorials?category=React' },
        { name: 'TypeScript', href: '/tutorials?category=TypeScript' },
        { name: 'PHP', href: '/tutorials?category=PHP' },
      ]
    },
    { 
      name: 'Series de Entrenamiento', 
      href: '/training', 
      icon: Book,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Todas las Series', href: '/training' },
        { name: 'Frontend Developer', href: '/training/frontend-developer' },
        { name: 'Backend Developer', href: '/training/backend-developer' },
        { name: 'Desarrollo de Carrera', href: '/training/career-development' },
      ]
    },
    { 
      name: 'Guías de Carrera', 
      href: '/career', 
      icon: Briefcase,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Todas las Guías', href: '/career' },
        { name: 'CV Técnico', href: '/career#cv-optimization' },
        { name: 'Portfolio', href: '/career#portfolio-development' },
        { name: 'Entrevistas', href: '/career#interview-preparation' },
        { name: 'Negociación Salarial', href: '/career#salary-negotiation' },
      ]
    },
    { name: 'Ebook', href: '/ebook', icon: ShoppingCart },
    { name: 'Mi Progreso', href: '/dashboard', icon: User }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="section-container">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Code className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
              <span className="ml-2 text-xl font-bold text-gray-900">CodeMentor Pro</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="relative dropdown-container">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                      <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-b-lg border-t border-gray-200">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                      >
                        <div className="flex items-center">
                          <Icon className="h-4 w-4 mr-2" />
                          {item.name}
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {activeDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm transition-colors"
                              onClick={closeMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                      onClick={closeMenu}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Link>
                  )}
                </div>
              )
            })}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/ebook"
                onClick={closeMenu}
                className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Descargar Ebook - $29
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
