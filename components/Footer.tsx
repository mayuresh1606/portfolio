export default function Footer() {
    return (
        <footer className="text-center py-6 text-sm text-muted-foreground border-t mt-12">
            <p>
                © {new Date().getFullYear()} Mayuresh Ovhal. Built with Next.js, Tailwind CSS, and ❤️.
            </p>
        </footer>
    );
}