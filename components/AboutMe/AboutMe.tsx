import styles from './AboutMe.module.css'
import Experiences from "oava/components/Experience/Experiences";
export default function AboutMe() {
    return (
        <section className="w-full p-3 my-12 flex flex-col  md:flex-col xl:flex-col 2xl:flex-row justify-around" id="aboutMe" >
            <div
                className="py-2 w-full sm:w-1/2 md:w-11/12 lg:w-11/12xl:w-1/2 2xl:1/2 max-w-lg flex flex-col mx-auto  ">
                <div
                    className="py-2 w-full sm:w-1/2 md:w-11/12 lg:w-11/12 xl:w-1/2 2xl:1/2 max-w-lg flex relative justify-center content-center m-auto ">
                    <img src="https://res.cloudinary.com/dj80e8qqp/image/upload/v1711074083/oava2_prf0jk.jpg"
                         alt="placeholder" className={styles.oavaImage}/>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-center">Omar Vega</h2>
                    <p className="py-2 text-xl text-center text-teal-300">Software Developer</p>
                </div>
                <p className="py-2">
                    Software developer and Systems Engineering student, I&apos;m passionate about using technology to
                    solve
                    real-world challenges, committed to ongoing self-development and learning.
                </p>
                <p className="py-2">
                    My technical skills include Angular for creating user interfaces, as well as Back-end development
                    using NodeJS(Express / NestJs) or Springboot.
                </p>
                <p className="py-2">
                    I bring a great attitude to every project, and I&apos;m always eager to learn and grow.
                </p>
                <span className="text-center text-2xl pb-3">
                    Skills
                </span>
                <div className="flex w-full justify-evenly">
                    <ul className="pl-3 list-disc">
                        <li>Angular</li>
                        <li>React</li>
                        <li>Spring-boot</li>
                        <li>NestJs</li>
                        <li>Express</li>
                    </ul>
                    <ul className="pl-3 list-disc">
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Typescript</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}