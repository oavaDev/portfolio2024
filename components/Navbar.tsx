export default function Navbar() {
    return (
            <nav className="flex flex-col justify-between w-full p-3 md:flex-row">
                <h1 className="text-4xl font-bold pb-5 text-center text-teal-400">oava_dev</h1>
                <ul className="flex items-center justify-center">
                    <li className="mx-4">About</li>
                    <li className="mx-4">Projects</li>
                    <li className="mx-4">Contact</li>
                </ul>
            </nav>
    );
}