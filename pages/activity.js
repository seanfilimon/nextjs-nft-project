import Link from "next/link"
import { useState, useEffect } from "react"
export default function Activity() {
    const fetchAlerts = async () => {
        const response = await fetch('/api/activity')
        const data = await response.json()
        return data
    }
    const [alerts, setAlerts] = useState([])
    useEffect(() => {
        fetchAlerts().then(data => {
            setAlerts(data)
        })
    }, [])

    const aItem = (title, description, type, image, created) => {
        return (
            <div className="bg-[#343444] inline-flex p-4 px-6 flex-row rounded-lg mb-6">
            <div className="block mr-3 w-40 bg-pink-500 rounded-3xl"></div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-white">{title} - {type}</h1>
                <p className="text-sm text-white">{description}</p>
                <p>{created}</p>
            </div>
            <div className="ml-auto bg-gray-900 rounded-full w-32 my-auto"></div>
        </div>
        )
    }
    return (
        <div>
            <section className="h-12 md:h-48 text-white bg-coolGray-900 border-b border-gray-500 border-t flex flex-col w-full">
                <div className="inline-flex flex-col mt-2.5 md:mt-12">
                    <h1 className="text-center text-3xl font-extrabold hidden md:block">Activity</h1>
                    <div className="flex flex-row mx-auto mt-0 md:mt-3">
                        <Link href="/"><a className="text-gray-400 mr-2" >Home</a></Link> / <Link href="/activity"><a className="text-green-400 ml-2" >Activity</a></Link>
                    </div>
                </div>
            </section>
            <section className="py-24 px-4 md:px-24 md:pb-32 bg-coolGray-900" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")', backgroundPosition: 'center'}}>
                    <div className="flex flex-row w-full h-auto">
                        <div className="flex flex-col w-full md:w-3/5 px-4">
                            {alerts.map(a => aItem(a.title, a.description, a.type, a.image, a.created))}
                        </div>
                        <div className="flex flex-col w-full md:w-2/5">
                            <div className="flex flex-row md:ml-24 mx-auto md:mx-0">
                                <input className="bg-transparent border border-[#343444] focus:border-[#343444] focus:outline-none w-full h-12 px-4 py-2 text-white rounded-l-xl" type="text" placeholder="Search" />
                                <button className="w-auto h-12 px-4 py-2 text-white rounded-r-2xl bg-indigo-500">Search</button>
                            </div>
                            <div className="flex flex-col md:ml-24 md:mx-0">
                                <h3 className="mb-3 mt-3 font-heading text-3xl font-bold text-white">Filter</h3>
                                <div className="flex flex-row flex-wrap w-4/5 mb-3">
                                    <button className="rounded-full bg-[#343444] text-white p-2 px-5 mr-1 mb-1"><span>Filter</span></button>
                                    <button className="rounded-full bg-[#343444] text-white p-2 px-5 mr-1 mb-1"><span>Filter</span></button>
                                    <button className="rounded-full bg-[#343444] text-white p-2 px-5 mr-1 mb-1"><span>Filter</span></button>
                                    <button className="rounded-full bg-[#343444] text-white p-2 px-5 mr-1 mb-1"><span>Filter</span></button>
                                    <button className="rounded-full bg-[#343444] text-white p-2 px-5 mr-1 mb-1"><span>Filter</span></button>
                                    <button className="rounded-full bg-[#343444] text-white p-2 px-5 mr-1 mb-1"><span>Filter</span></button>
                                    <button className="rounded-full bg-[#343444] text-white p-2 px-5 mr-1 mb-1"><span>Filter</span></button>     
                                </div>
                                <button className="mb-3 text-left"><span className="text-[#45FFDC]">Clear All Filters</span></button>
                            </div>
                        </div>
                    </div>
            </section>

        </div>
    )
}