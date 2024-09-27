import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      <Button variant="secondary">SHOW</Button>
          <p>hello world</p>
        </body>
      </html>
    </>
  )
}
