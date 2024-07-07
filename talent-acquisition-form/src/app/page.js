import Header from "@/components/Header"

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white w-full h-16 flex items-center justify-center">
          <h1 className="text-xl">Header</h1>
        </header>

        <div className="flex flex-grow ">
          <aside className=" h-full hidden md:block p-10 ">
            <div className="h-[118px] w-[350px] bg-red-200 p-[24px] flex justify-center items-center gap-[16px]">
              <div className="h-[70px] w-[120px] bg-[#D8D8D8] rounded-[4px] "></div>
              <div>
                <h3 className="text-[16px]">New Form</h3>
                <p className="text-[12px]">
                  Start creating a new form with the wide options of fields
                  available
                </p>
              </div>
            </div>
          </aside>

          <main className="flex-grow bg-white">hiii</main>
        </div>

        <footer className="bg-gray-800 text-white w-full h-16 flex items-center justify-center">
          <p>Footer</p>
        </footer>
      </div>
    </>
  )
}
