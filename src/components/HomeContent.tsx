import { useMousePosition } from '@/hooks/useMousePosition'
import Button from './Buttons'
import FloatingElements from './FloatingElements'

export default function MainContent() {
  const mousePosition = useMousePosition()
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 py-20 w-full">
      <FloatingElements mousePosition={mousePosition} />
      <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-5xl text-neutral-200">
        WHERE YOUR IDEAS TURNS INTO SOFTWARE WITH A CLICK
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-2xl text-neutral-300">
        BUILD CUSTOM WEBSITES, APPS AND TOOLS EFFORTLESSLY. FROM THE CONCEPT OF NOT IN MONTHS, BUT IN WEEKS.
      </p>
      <div className="flex space-x-4">
        <Button variant="primary">LET&apos;S TALK 👋</Button>
        <Button variant="secondary">PROJECTS</Button>
      </div>
    </main>
  )
}