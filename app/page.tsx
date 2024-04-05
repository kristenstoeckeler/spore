import { eczar } from "./ui/font" 
 
 export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return (
  <div className="App">
      <header className="App-header">
        <h1>Welcome to Spore!</h1>
        <p className={eczar.className}>
          Spore is a project I'm working on. It's in its baby phase, but feel free to poke around and check back soon for new developments!       
        </p>
      </header>
    </div>
  )
}