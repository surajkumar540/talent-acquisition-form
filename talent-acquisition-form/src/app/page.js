import MainContent from "@/components/MainContent/MainContent"

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-grow ">
          <MainContent />
        </div>
      </div>
    </>
  )
}
