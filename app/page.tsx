import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/Badge";
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
          {/* Profile Image - Using the new avatar from images folder */}
          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg highlight-pink">
            <img src="/images/avatar.gif" alt="Avatar" className="w-full h-full object-cover" />
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold highlight-pink">Luna</h1>
            <p>She/Her/Hers</p>
            <div className="flex items-center justify-center gap-4">
              <Badge
                label="Streamer"
                backgroundColor="linear-gradient(90deg, rgb(145, 70, 255) 0%, rgb(200, 100, 255) 100%)" // Purple gradient
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="#000000" // Black icon color
                    viewBox="0 0 170 199"
                    style={{ minWidth: "16px", minHeight: "16px" }}
                  >
                    <g>
                      <path d="M35.417 0L0 35.417v127.5h42.5v35.416l35.417-35.416h28.333L170 99.167V0H35.417zm120.416 92.083L127.5 120.417H99.167l-24.792 24.791v-24.791H42.5V14.167h113.333v77.916z"></path>
                      <path d="M134.583 38.959h-14.166v42.5h14.166v-42.5zM95.625 38.959H81.46v42.5h14.166v-42.5z"></path>
                    </g>
                  </svg>
                }
              />
              <Badge
                label="Dev"
                backgroundColor="linear-gradient(90deg, rgb(250, 12, 227) 0%, rgb(255, 100, 250) 100%)" // Pink gradient
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="#000000" // Black icon color
                    viewBox="0 0 193 130"
                    style={{ minWidth: "16px", minHeight: "16px" }}
                  >
                    <path d="M.426 64.728l53.444-53.44v33.58h-.205l-19.862 19.86 19.862 20.066v33.374L.425 64.728zM104.858.027l24.981 7.78-37.882 121.827-24.981-7.575L104.858.027zM192.497 64.728l-53.444 53.44V84.794l20.067-20.066-20.067-19.86v-33.58l53.444 53.44z"></path>
                  </svg>
                }
              />
              <Badge
                label="Trans"
                backgroundColor="linear-gradient(90deg, rgb(91, 206, 250) 0%, rgb(245, 169, 184) 25%, rgb(255, 255, 255) 50%, rgb(245, 169, 184) 75%, rgb(91, 206, 250) 100%)" // Transgender flag gradient
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="20"
                    height="20"
                    style={{ minWidth: "20px", minHeight: "20px" }}
                  >
                    <path fill="#ed4c5c" d="M52.382 5.075C40.137 3.203 24.137 28.036 9.213 20.497c-.582-1.575-1.143-3.158-1.725-4.73C25.077 19.105 33.07-2.995 50.658.345c.584 1.572 1.14 3.156 1.724 4.73"></path>
                    <path fill="#ff8736" d="M54.105 9.804C43.762 7.786 22.512 31.453 10.938 25.227c-.585-1.573-1.14-3.157-1.725-4.73C26.802 23.835 34.794 1.734 52.382 5.075c.584 1.572 1.14 3.156 1.723 4.729"></path>
                    <path fill="#ffce31" d="M55.83 14.535C45.762 12.744 27.086 38.25 12.662 29.957c-.585-1.573-1.142-3.157-1.725-4.73C28.525 28.566 36.52 6.467 54.105 9.805c.585 1.574 1.142 3.157 1.725 4.73"></path>
                    <path fill="#83bf4f" d="M57.556 19.265c-9.711-1.521-31.086 25.813-43.171 15.422c-.584-1.572-1.139-3.157-1.723-4.73c17.585 3.341 25.579-18.762 43.168-15.422c.583 1.573 1.142 3.156 1.726 4.73"></path>
                    <path fill="#275fd9" d="M59.278 23.995C48.22 22.161 28.595 50.453 16.109 39.418c-.584-1.574-1.144-3.156-1.725-4.73c17.588 3.338 25.582-18.761 43.171-15.422c.583 1.573 1.141 3.155 1.723 4.729"></path>
                    <path fill="#9028e0" d="M61 28.726c-17.583-3.34-25.579 18.761-43.166 15.421c-.584-1.572-1.142-3.156-1.725-4.729c17.588 3.338 25.581-18.762 43.169-15.423c.583 1.575 1.142 3.158 1.722 4.731"></path>
                    <g fill="#3e4347">
                      <circle cx="5.168" cy="13.336" r="2.168"></circle>
                      <path d="M7.04 14.49l-2.56.929L22.186 64h2.896z"></path>
                      <path d="M3.688 15.602l4.076-1.48l.37 1.017l-4.077 1.48z"></path>
                    </g>
                  </svg>
                }
              />
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
        <p>© {new Date().getFullYear()} Luna. All rights reserved.</p>
      </footer>
    </div>
  );
}
