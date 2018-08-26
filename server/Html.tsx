import * as React from 'react'

export interface Props {
  title: string
  children: string
}

export const Html = (props: Props) => {
  const { title, children } = props

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{title}</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script src="/assets/bootstrap.js" async charSet="utf-8" />
      </body>
    </html>
  )
}
