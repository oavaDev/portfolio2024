const experiences = [
    {
        title: "It Analyst",
        company: "Gralco SA",
        date: "Apr 2023 - Present",
        description: [
            "Creation and implementation of effective technology solutions. Assessing business and end-user needs. Working together with versatile teams to ensure successful completion of projects.",
            "Worked on projects in the frontend using React and Angular and on the backend using Spring-boot for internal applications.",
        ],
        projects : [
            {
                title: "Summit event website",
                description: "Developed  a website for the company, where the employees are able to know which events they are invited to and information related to them such as  time, details, location with a map, the QR code needed to get into the event and dress code. The staff have a dedicated user and section on the website to read the QR code and validate attendance.",
                subDescription: [
                    "Using NestJS and TypeORM on the backend to ensure a robust, scalable, and secure API for managing events, attendees, and staff actions.",
                    "Implementing Angular on the frontend to deliver a responsive and user-friendly interface for employees and staff.",
                    "Leveraging PostgreSQL as the database to store event details, user data and attendance records with integrity and reliability.",
                    "Integrating QR code generation and scanning capabilities to streamline event check-in processes and validate attendance efficiently.",
                    "Utilizing OpenStreetMap API to provide accurate location details for each event."              
                ],
                technologies: ["Angular", "NestJs", "Postgres"]
            },
            {
                title: "Overall Equipment effectiveness management system",
                description: "Developed a web application using Angular to calculate the overall equipment effectiveness (OEE) on the company's production lines. The company faced challenges in accurately calculating and analyzing equipment efficiency, which was crucial for optimizing production processes and minimizing downtime.",
                subDescription: [
                    "Users input records immediately upon a shutdown, capturing the start time to ensure real-time data collection. At the end of the shutdown, they add additional detailed information, providing a comprehensive dataset. ",
                    "This data is transmitted to a database where I created views to facilitate efficient querying, ensuring quick and easy access to the information.",
                    "An API built with Spring Boot retrieves this information from the database and returns it to the Angular application. This setup allows for the generation of detailed reports and comprehensive analysis by area and equipment.",
                    "As a result, supervisors can make data-driven decisions to enhance overall production efficiency."
                ],
                technologies: ["Angular", "Spring-boot", "Oracle","Docker"]
            },{
                title: "Efficiency line management system",
                description: "Developed a web application for supervisors to monitor and track the efficiency of employees on the company's production lines.",
                subDescription: [
                    "The company faced challenges in tracking and analyzing employee performance, relying heavily on paper-based records. This manual system was inefficient, prone to errors, and lacked real-time data visibility.",
                    "The web application provided supervisors with the ability to view live data on employee performance, including task completion times and production rates.",
                    "The implementation of this system led to a significant improvement in production efficiency. Supervisors were able to make data-driven decisions, resulting in reduced downtime and increased overall productivity.",
                    "Additionally, the shift from a paper-based system to a digital one reduced the company's environmental footprint and operational costs."
                ],
                technologies: ["React", "Spring-boot", "Oracle"]
            },
            {
                title: "Taxi vouchers management system",
                description: "Management of taxi vouchers for the company's employees.",
                technologies: ["Angular", "Spring-boot", "Oracle"]
            }
        ]
    }
]
export default  experiences ;
