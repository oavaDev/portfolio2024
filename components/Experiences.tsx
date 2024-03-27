import Experience from "oava/components/Experience";
import experiences from "oava/assets/experiences";
export default function Experiences() {
    return (
        <section className="w-full p-3 my-12 flex flex-col  justify-center content-center mx-auto">
            <span className="text-center text-2xl pb-3">
                Experience
            </span>
            {experiences && experiences.map((experience, i) => {
                return (
                    <Experience key={i} title={experience.title} company={experience.company} date={experience.date} description={experience.description} projects={experience.projects} />
                )
            })}
        </section>
    );
}