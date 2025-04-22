import { Github, Twitter, MessageCircle, Twitch } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Theme Toggle in Header */}
      <header className="w-full p-4 flex justify-end">
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          {/* Profile Image - Using the new avatar from images folder */}
          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <img src="/images/avatar.gif" alt="Avatar" className="w-full h-full object-cover" />
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Luna</h1>
            <p className="text-muted-foreground">Welcome to my slice of the interwebs.</p>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground">
            Hello! I am a very casual streamer (when I actually remember) and love to write code. Currently I am working
            on a multi-purpose Discord.JS bot. I also love to play games with my friends and partner. :)
          </p>

          {/* Social Links */}
          <div className="flex flex-col gap-3 pt-4">
            <Link href="https://discord.gg/VWyrPVWnQ4" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start">
                <MessageCircle className="h-5 w-5" />
                <span>Discord</span>
                <span className="ml-auto text-muted-foreground">.gg/VWyrPVWnQ4</span>
              </Button>
            </Link>

            <Link href="https://twitter.com/lunaashere" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start">
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
                <span className="ml-auto text-muted-foreground">@lunaashere</span>
              </Button>
            </Link>

            <Link href="https://github.com/lunashere" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
                <span className="ml-auto text-muted-foreground">@lunashere</span>
              </Button>
            </Link>

            <Link href="https://www.twitch.tv/lunaashere" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start">
                <Twitch className="h-5 w-5" />
                <span>Twitch</span>
                <span className="ml-auto text-muted-foreground">@lunaashere</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Luna. All rights reserved.</p>
      </footer>
    </div>
  )
}
