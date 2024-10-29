import Navbar from "./Components/Navbar"
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="ml-10 mr-10 bg-[#252B42] "  >
        <h1 className="text-blue-500 text-bold pt-20 pb-10 flex justify-center">Welcome</h1>
        <div className=" ml-40 mr-40  flex justify-center">
          <h1 className=" ml-20 mr-10 w-[40%] text-4xl flex justify-between text-white">Selling on the internet like a pro</h1>
        </div>
        <div className="flex justify-center">
          <h1 className="  text-white pt-10">We know how large objects will act, but things on a small
            scale just do not act that way.
          </h1>
        </div>
        <div className="pb-10 pt-5 flex justify-center gap-[10px]">
          <h1 className="pt-[15px] pb-[15px] pl-[40px] pr-[40px]
           flex justify-center text-white bg-blue-400 w-[193px] h-[52px] ">Get Quote Now</h1>
          <h1 className=" pt-[15px] pb-[15px] pl-[30px] pr-[30px] flex justify-center radius-[5px]  
          border-[1px] border-blue-400 text-blue-500 h-[52px] w-[162px]">Learn More</h1>
        </div>

        <div className="ml-20 mr-20 mt-20 bg-color-black flex justify-between gap-[10px]">

          <div className="p-5 bg-white">
            <section className="bg-white w-[260px] h-[292px]">
              <div className="mb-7 bg-pink-200 rounded-xl w-[70px] h-[76px]">

              </div>
              <p className="mb-5 text-bold text-xl">training courses</p>
              <p className="mb-5 border-t-2 border-red-500 w-[20%]"></p>
              <p className="">The grandful of accumulation of information about atomic and small-scale
                behaviour....
              </p>
            </section>
          </div>

          <div className="p-5 bg-white">
            <section className="bg-white w-[260px] h-[292px]">
              <div className="mb-7 bg-green-300 rounded-xl w-[70px] h-[76px]">

              </div>
              <p className="mb-5 text-bold text-xl">2,769 online courses</p>
              <p className="mb-5 border-t-2 border-red-500 w-[20%]"></p>
              <p className="">The grandful of accumulation of information about atomic and small-scale
                behaviour....
              </p>
            </section>
          </div>

          <div className="p-5  bg-blue-400">
            <section className="bg-blue-400 w-[260px] h-[292px]">
              <div className="mb-7 bg-white rounded-xl w-[70px] h-[76px]">

              </div>
              <p className="mb-5 text-bold text-white text-xl">training courses</p>
              <p className="mb-5 border-t-2 border-white w-[20%]"></p>
              <p className="text-white">The grandful of accumulation of information about atomic and small-scale
                behaviour....
              </p>
            </section>
          </div>
        </div>
        <div className="mb-7 bg-[#252B42]  h-[70px]">

        </div>





      </div>
    </div>
  )
}