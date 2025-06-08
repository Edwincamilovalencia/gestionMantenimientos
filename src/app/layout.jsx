import NavbarWrapper from '../components/NavbarWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>GAM-TX</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" />
      </head>
      <body>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
