import Header from "@/components/Header/Header"
import Sidebar from "@/components/Sidebar/Sidebar"

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        {/* header */}
        <header className="bg-gray-800 text-white w-full h-16 flex items-center justify-center ">
          <h1 className="text-xl">Header</h1>
        </header>

        <div className="flex flex-grow ">
          {/* sidebar */}
          <aside className=" h-full w-[450px] lg:flex justify-center items-center hidden md:block p-10 ">
            <Sidebar />
          </aside>

          {/* content */}
          <main className="flex-grow bg-[#F5F5F5]">hiii</main>
        </div>

        {/* footer */}
        <footer className="bg-gray-800 text-white w-full h-16 flex items-center justify-center">
          <p>Footer</p>
        </footer>
      </div>
    </>
  )
}
