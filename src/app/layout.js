import { Aside } from './components/Aside';
import './globals.css'
import {Prompt, Raleway} from 'next/font/google'

export const metadata = {
  title: "CALU",
  description: "Cafés especiais!",
};

const prompt = Prompt({
  weight:['400','600'],
  subsets:['latin'],
  display:'swap'
}) 

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <Aside/>
          {children}
        </div>
      </body>
    </html>
  );
}
