export default function Navbar() {
    return (
        <div>
            <div>
                <h1 className="mt-10 ml-10 text-[#252B42] hover:text-blue-500">Home</h1>
                <div className="ml-10 mr-10 bg-[#252B42] flex justify-between ">
                    <div className="flex justify-between">
                        <h1 className="pt-7  text-white pl-10  h-91px text-3xl font-bold">BrandName</h1>
                        <div className="pt-9 ml-10  flex justify-between gap-3">
                            <h1 className="text-white" >Home</h1>
                            <h1 className="text-white">Product</h1>
                            <h1 className="text-white">Princing</h1>
                            <h1 className="mr-40 text-white">contact</h1>
                            
                        </div>
                        <div className="ml-40 flex justify-center gap-10">
                                <h1 className="pt-8 text-white">Login</h1>
                                <h1 className="mt-4 pt-4  flex justify-center rounded text-white bg-blue-400  w-[90px] h-[60px]">Join us</h1>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}