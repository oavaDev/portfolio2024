export default function Navbar() {
    return (
            <nav className="flex flex-col justify-between w-full p-3 md:flex-row">
                <h1 className="text-4xl font-bold pb-5 text-center text-teal-400">oava_dev</h1>
                <ul className="flex items-center justify-center">
                    <a href="#aboutMe">
                        <li className="mx-4">About</li>
                    </a>
                    <a href="#Experience">
                        <li className="mx-4">Projects</li>
                    </a>
                    <a href="#Contact">
                        <li className="mx-4">Contact</li>
                    </a>
                </ul>
            </nav>
    );
}