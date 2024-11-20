import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
  const qualifications = [
    {
      title: "Diploma in Engineering",
      institute: "Thakurgaon Polytechnic Institute",
      department: "Computer Science and Technology",
      year: 2023,
      cgpa: "3.40 (out of 4)",
    },
    {
      title: "SSC",
      institute: "Thakurgaon Govt Technical School and College",
      year: 2019,
      cgpa: "4.57 (out of 5)",
    },
  ];
  return (
    <div id="about" className="w-full py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Right Section - Content */}
        <div className="flex flex-col gap-5 text-gray-800">
          <SectionTitle title="About Me" bgText="Who Am I ?" />
          <div>
            <p className="text-lg leading-relaxed">
              Hi! I am <span className="font-semibold">Dipu Debnath</span>, a
              passionate and dedicated web developer with a strong focus on
              front-end technologies. I specialize in creating beautiful,
              responsive, and interactive user interfaces. My goal is to develop
              seamless user experiences with performance in mind.
            </p>
            <p className="text-lg leading-relaxed">
              I have a solid understanding of **HTML, CSS**, and **JavaScript**,
              and I continuously strive to improve my skills and stay up-to-date
              with the latest trends and best practices. I enjoy creating
              scalable and maintainable applications using a variety of modern
              tools and technologies, including:
            </p>
          </div>

          {/* Skills Section */}
          <section id="skills">
            <SectionSubTitle title={"My Skills"} bgTitle={"MY SPECIALTY"} />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="skill-item">
                <h3 className="font-semibold text-xl">Frontend Development</h3>
                <ul className="list-disc pl-6">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>Responsive Web Design</li>
                  <li>Tailwind CSS, Bootstrap</li>
                </ul>
              </div>

              <div className="skill-item">
                <h3 className="font-semibold text-xl">Backend Development</h3>
                <ul className="list-disc pl-6">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>RESTful APIs</li>
                  <li>Authentication & Authorization</li>
                </ul>
              </div>

              <div className="skill-item">
                <h3 className="font-semibold text-xl">Other Technologies</h3>
                <ul className="list-disc pl-6">
                  <li>Git & GitHub</li>
                  <li>TypeScript</li>
                  <li>Vercel</li>
                  <li>npm & Yarn</li>
                  {/* <li>Docker</li> */}
                  <li>APIs Integration</li>
                </ul>
              </div>

              <div className="skill-item">
                <h3 className="font-semibold text-xl">
                  Development Tools & Libraries
                </h3>
                <ul className="list-disc pl-6">
                  <li>Next.js</li>
                  <li>Redux Toolkit</li>
                  <li>Ant Design</li>
                  <li>Shadcn UI</li>
                  <li>Tailwind CSS</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education">
            <SectionSubTitle title={"Education"} bgTitle={"MY EDUCATION"} />
            <div className="py-10 px-5 bg-gray-50">
              <div className="space-y-6">
                {qualifications.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold">{edu.title}</h3>
                    <p className="text-gray-700">
                      <span className="font-medium">Institute: </span>
                      {edu.institute}
                    </p>
                    {edu.department && (
                      <p className="text-gray-700">
                        <span className="font-medium">Department: </span>
                        {edu.department}
                      </p>
                    )}
                    <p className="text-gray-700">
                      <span className="font-medium">Passing Year: </span>
                      {edu.year}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">CGPA: </span>
                      {edu.cgpa}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <p className="text-lg leading-relaxed mt-6">
            I am always eager to learn new things and tackle new challenges. I
            enjoy working on both front-end and back-end projects and am
            comfortable collaborating with cross-functional teams to deliver
            high-quality applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
