import FormButton from "./FormButton"

const formBtnData = [
  {
    id: 1,
    title: "Details Collection",
    description:
      "SCollect information from Candidates on their education, work experience, contact no,etc",
  },
  {
    id: 2,
    title: "Document Collection",
    description:
      "Save time and efforts: Explore this template to find a set of questions required for document collection ",
  },
  {
    id: 3,
    title: "Statement of Purpose",
    description:
      "Start creating a new form with the wide options of fields available",
  },
  {
    id: 4,
    title: "Interview Availability",
    description:
      "Start creating a new form with the wide options of fields available",
  },
]

const Sidebar = ({ active, setActive, handleActive }) => {
  return (
    <aside className=" h-full w-[200px]  lg:w-[450px] lg:flex mt-20 md:mt-12 lg:my-10 *:justify-center items-center p-4 sm:p-10  ">
      <div className="flex flex-col gap-4">
        <div
          className={`h-[100px] lg:h-[118px]  lg:w-[350px] border-[1px] border-[#888888] bg-white  rounded-[8px] p-[24px] lg:flex justify-center items-center gap-[16px] cursor-pointer`}
          onClick={() => setActive(1)}
        >
          <div
            className={`h-[70px] w-[100px] hidden lg:block bg-[#D8D8D8] rounded-[4px] `}
          ></div>
          <div className="w-full lg:flex-col text-center lg:text-start flex justify-center lg:justify-start items-center lg:items-start h-full">
            <h3 className="text-[16px]">New Form</h3>
            <p className="text-[12px] hidden lg:block">
              Start creating a new form with the wide options of fields
              available
            </p>
          </div>
        </div>

        <div className="mt-4 text-sm md:text-[14px]">
          Explore the following Templates:
        </div>

        {/* map formData */}
        {formBtnData.map((item) => (
          <div key={item.id}>
            <FormButton
              title={item.title}
              description={item.description}
              active={active}
              id={item.id}
              handleActive={handleActive}
            />
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
