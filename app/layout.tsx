import type { Metadata } from "next";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import "@/styles/theme-config.css";
import ThemeProvider from "@/components/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
