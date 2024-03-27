// @ts-ignore
export default function Experience({title, company, date, description}) {
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
                </div>
            </div>
    );
}