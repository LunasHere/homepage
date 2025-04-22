import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { DevBadge, StreamerBadge, TransBadge } from "@/components/Badges";
import { DiscordIcon, TwitterIcon, GithubIcon, TwitchIcon } from "@/components/SvgIcons";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Theme Toggle in Header */}
      <header className="w-full p-4 flex justify-end highlight-pink">
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 highlight-pink">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg highlight-pink">
            <img src="/images/avatar.gif" alt="Avatar" className="w-full h-full object-cover" />
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold highlight-pink">Luna</h1>
            <p>She/Her/Hers</p>
            <div className="flex items-center justify-center gap-4">
              <DevBadge />
              <StreamerBadge />
              <TransBadge />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 pt-4 highlight-pink">
            <Link href="https://discord.gg/VWyrPVWnQ4" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start highlight-pink">
                <DiscordIcon className="h-5 w-5 highlight-pink" />
                <span>Discord</span>
                <span className="ml-auto text-muted-foreground">.gg/VWyrPVWnQ4</span>
              </Button>
            </Link>

            <Link href="https://twitter.com/lunaashere" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start highlight-pink">
                <TwitterIcon className="h-5 w-5" />
                <span>Twitter</span>
                <span className="ml-auto text-muted-foreground">@lunaashere</span>
              </Button>
            </Link>

            <Link href="https://github.com/lunashere" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start highlight-pink">
                <GithubIcon className="h-5 w-5" />
                <span>GitHub</span>
                <span className="ml-auto text-muted-foreground">@lunashere</span>
              </Button>
            </Link>

            <Link href="https://www.twitch.tv/lunaashere" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 text-left justify-start highlight-pink">
                <TwitchIcon className="h-5 w-5" />
                <span>Twitch</span>
                <span className="ml-auto text-muted-foreground">@lunaashere</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground highlight-pink">
        <p>Made with ❤️ by Luna. Thanks to <a href="https://discotools.xyz/badges-editor">discotools.xyz</a> for the badges.</p>
      </footer>
    </div>
  );
}
