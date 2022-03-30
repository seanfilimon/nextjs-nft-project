import Link from "next/link"
import SearchMarketplace from "../components/ui/Explore/SearchMarketplace"

export default function Explore() {
    return (
        <div>
            <section className="h-12 md:h-48 text-white bg-coolGray-900 border-b border-gray-500 border-t flex flex-col w-full">
                <div className="inline-flex flex-col mt-2.5 md:mt-12">
                    <h1 className="text-center text-3xl font-extrabold hidden md:block">EXPLORE</h1>
                    <div className="flex flex-row mx-auto mt-0 md:mt-3">
                        <Link href="/"><a className="text-gray-400 mr-2" >Home</a></Link> / <Link href="/explore"><a className="text-green-400 ml-2" >Explore</a></Link>
                    </div>
                </div>
            </section>
            <SearchMarketplace />
        </div>
    )
}