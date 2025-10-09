

export const metadata = {
  title: "CALU",
  description: "Cafés especiais!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
