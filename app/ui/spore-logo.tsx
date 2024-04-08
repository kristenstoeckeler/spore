import Image from 'next/image';
import { comfortaa } from './font';

export default function SporeLogo() {
  return (
    <div className={`${comfortaa.className} flex flex-row items-center p-5 leading-none`}>
      <Image
        src="/spore-logo.png"
        width={60}
        height={60}
        className="flex"
        alt="Spore logo"
      />
      <p className="text-spore-green px-2 text-4xl">Spore</p>
    </div> 
  );
}
