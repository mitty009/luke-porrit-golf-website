export default function Footer() {
    return (
        <footer className="mt-12 border-t">
            <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="text-lg font-semibold">Luke Porritt</div>
                    <div className="text-sm text-gray-500">Professional Golf Coach</div>
                    <p className="mt-3 text-sm text-gray-600 max-w-sm">
                        Private lessons, clinics and junior programs. Book online and start lowering your scores.
                    </p>
                </div>


                <div>
                    <div className="font-semibold">Navigate</div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li><a href="/coaching" className="hover:underline">Coaching</a></li>
                        <li><a href="/record" className="hover:underline">Record</a></li>
                        <li><a href="/book" className="hover:underline">Book</a></li>
                    </ul>
                </div>


                <div>
                    <div className="font-semibold">Contact</div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li><a href="mailto:info@luke-porritt.example" className="hover:underline">info@luke-porritt.example</a></li>
                        <li><span>Queensland, Australia</span></li>
                    </ul>
                </div>
            </div>
            <div className="border-t py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Luke Porritt. All rights reserved.
            </div>
        </footer>
    );
}