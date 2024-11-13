import "./globals.css"; // This global CSS file is available to all pages and components in the app directory

export const metadata = {
    title: "NextJS Course App",
    description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
