export default function Contact() {
    return (
        <section className="w-full p-3 my-12 flex flex-col  justify-center content-center mx-auto" id="Contact">
            <div className="w-full flex flex-col experience mb-4 ">
                <div className="flex flex-col justify-start items-start p-6">
                    <h2 className="text-2xl pb-2 text-teal-300  font-bold">Contact</h2>
                    <h3 className="text-md text-teal-500 pb-2">Email:
                        <a href="mailto:omarvega598@gmail.com"
                            className="text-teal-500 cursor-pointer font-bold">
                            {" "} omarvega598@gmail.com
                        </a>
                    </h3>
                    <h3 className="text-md text-teal-500 pb-2">LinkedIn:
                        <a href="https://www.linkedin.com/in/oavega/"
                            className="text-teal-500 cursor-pointer font-bold">
                            {" "} Omar Vega
                        </a>
                    </h3>
                    <h3 className="text-md text-teal-500 pb-2 ">Github:
                        <a href="https://github.com/oavaDev"
                            className="text-teal-500 cursor-pointer font-bold">
                            {" "} oavaDev
                        </a>
                    </h3>
                </div>
            </div>
        </section>
    );
}