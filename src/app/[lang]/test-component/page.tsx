import { getDictionary } from "@/features/internationalization/get-dictionaries"
import { Locale } from "@/features/internationalization/i18n-config"
import { CounterComponent } from "./counter-component"

export default async function IndexPage({
  params,
}: Readonly<{
  params: { lang: Locale }
}>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <html lang="en-US">
      <body>
        <div>
          <p>Current locale: {lang}</p>
          <p>
            This text is rendered on the server: {dictionary.landing.welcome}
          </p>
          <CounterComponent dictionary={dictionary.counter} />
        </div>
      </body>
    </html>
  )
}
