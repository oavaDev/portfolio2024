// @ts-ignore
export default function Experience({title, company, date, description,projects}) {
    return (
            <div className="w-full flex flex-col experience mb-4 ">
                <div className="flex flex-col justify-start items-start p-6">
                    <h2 className="text-xl pb-2">{title}</h2>
                    <h3 className="text-md text-gray-100 pb-2">{company}</h3>
                    <p className="text-md text-gray-300 pb-3">{date}</p>
                    <ul className="pl-4 list-disc text-gray-300 flex flex-col gap-2">
                        {description &&  description.map((description : any,i : number) => {
                            return (
                                <li key={i}>{description && description}</li>
                            )
                        })}
                    </ul>
                    <ul>
                        <h2 className="text-2xl text-gray-100 p-2">Projects</h2>
                        {
                            projects && projects.map((project : any,i : number) => {
                                return (
                                    <li key={i} className="text-md text-gray-300 p-3">
                                        <h3 className="text-md text-gray-100 pb-2">{project.title}</h3>
                                        <p className="text-md text-gray-300 pb-3">{project.description}</p>
                                        <div className=" pl-4  text-gray-300 flex gap-2 bg">
                                            {project.technologies && project.technologies.map((technology : any,i : number) => {
                                                return (
                                                    <span className="
                                                    text-sm
                                                    bg-gray-700
                                                    rounded-md
                                                    px-2
                                                    py-1
                                                    " key={i}>{technology && technology}</span>
                                                )
                                            })}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
    );
}