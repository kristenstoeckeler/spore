import { lato } from "./ui/font" 
import SporeLogo from "./ui/spore-logo"
 
 export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return (
  <div className="App">
      <main className="mx-10 md:ml-40 md:mr-80">
        <h1 className={"text-wrap text-5xl md:text-8xl font-bold text-spore-green"}>WELCOME TO SPORE</h1>
        <p className={`${lato.className} text-xl pt-5 md:text-2xl md:pt-10`}>
          Spore is a project I'm working on. I'm a big environmentalist and I'm passionate about finding ways to address 
          the climate crisis. I always felt it would be handy to have an app that I could check in with every day letting 
          me know of relevant and timely actions I can take to support local environmental and climate campaigns. 
          Spore is aiming to be just this app! It's in its baby phase, but feel free to poke around and check back soon 
          for new developments!
        </p>
      </main>        
    </div>
  )
}