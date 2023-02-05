import Head from 'next/head'

function Seo({
   title = 'Titulo do site',
   description = 'Descrição do site',
   url = 'http://localhost:3000',
   image = '',
   keywords = 'a,b,c',
   themeColor = 'black'
}) {
   return (
      <Head>
         <title>{title}</title>

         <meta name="viewport" content="width=device-width, initial-scale=1" />

         <meta name="description" content={description} />

         <link rel="shortcut icon" href="/icon.ico" />

         <meta property="og:url" content={url} />

         <meta property="og:type" content="website" />

         <meta property="og:title" content={title} />

         <meta property="og:description" content={description} />

         <meta property="og:image" content={image} />

         <meta name="keywords" content={keywords} />

         <meta name="theme-color" content={themeColor} />
      </Head>
   )
}

export default Seo
