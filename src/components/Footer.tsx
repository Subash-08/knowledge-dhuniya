import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <span className="text-xl font-bold">
                                KNOWLEDGE <span className="text-blue-400">DUNIYA</span>
                            </span>
                        </div>
                        <p className="text-slate-400 mb-4 max-w-sm">
                            Empowering learners worldwide with quality Hindi education through
                            expert trainers and innovative teaching methods.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-slate-400 hover:text-white transition">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-white transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-400 hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-start gap-2">
                                <i className="fas fa-envelope mt-1"></i>
                                <span>support@knowledgeduniya.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="fas fa-phone mt-1"></i>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="fas fa-map-marker-alt mt-1"></i>
                                <span>123 Learning Street<br />New York, NY 10001</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="md:flex md:items-center md:justify-between text-center md:text-left">
                        <p className="text-slate-400 text-sm">
                            © 2026 Knowledge Duniya. All rights reserved.
                        </p>
                        <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0">
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition">
                                Terms of Service
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
