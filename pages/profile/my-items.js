import {useWeb3React} from "@web3-react/core"
import {useState, useEffect} from "react"
import Link from "next/link"

export default function MyItems() {
    const {
        active,
        account,
        library,
        connector,
        activate,
        deactivate
    } = useWeb3React()
    const [items,
        setItems] = useState([])

    const getAccount = () => {
        if (active) {
            return account
        }
    }
    const fetchItems = async(filters) => {
        const request = await fetch('/api/profile/my-items')
        const items = await request.json()
    }

    return (
        <div>
            <section
                className="h-12 md:h-48 text-white bg-coolGray-900 border-b border-gray-500 border-t flex flex-col w-full">
                <div className="inline-flex flex-col mt-2.5 md:mt-12">
                    <h1 className="text-center text-3xl font-extrabold hidden md:block">MY ITEMS</h1>
                    <div className="flex flex-row mx-auto mt-0 md:mt-3">
                        <Link href="/">
                            <a className="text-gray-400 mr-2">Home</a>
                        </Link>
                        /
                        <Link href="/profile/my-items">
                            <a className="text-green-400 ml-2">My Items</a>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="py-24 bg-coolGray-900">
                <ul className="flex flex-wrap mb-8 -mx-2 text-center justify-center">
                    <li className="w-full md:w-auto px-2">
                        <a
                            className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-violet-900 hover:text-violet-900 font-bold rounded-md hover:shadow-sm"
                            href="#">All Categories</a>
                    </li>
                    <li className="w-full md:w-auto px-2">
                        <a
                            className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-300 hover:text-violet-900 font-bold rounded-md hover:shadow-sm"
                            href="#">Live Auctions</a>
                    </li>
                    <li className="w-full md:w-auto px-2">
                        <a
                            className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-300 hover:text-violet-900 font-bold rounded-md hover:shadow-sm"
                            href="#">Listings</a>
                    </li>
                    <li className="w-full md:w-auto px-2">
                        <a
                            className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-300 hover:text-violet-900 font-bold rounded-md hover:shadow-sm"
                            href="#">Categories</a>
                    </li>
                    <li className="w-full md:w-auto px-2">
                        <a
                            className="inline-block w-full py-2 px-4 text-sm text-coolGray-300 hover:text-violet-900 font-bold rounded-md hover:shadow-sm"
                            href="#">Top Sellers</a>
                    </li>
                </ul>
                <div className="flex flex-wrap -mx-4 px-6 md:px-0 mb-12 md:mb-20">
                    {/* Render a list of 12 renderAuctionItems based on the first 12 items from results*/}
                    <h1 className="text-black">{account}</h1>
                </div>
                <a
                    className="flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-green-50 font-medium bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 md:max-w-max rounded-md"
                    href="#">
                    <span className="mr-3">Explore More</span>
                    <svg
                        className="text-violet-50"
                        width={12}
                        height={10}
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"><path
                        d="M10.7583 4.40833C10.6809 4.33023 10.5887 4.26823 10.4871 4.22592C10.3856 4.18362 10.2767 4.16183 10.1667 4.16183C10.0567 4.16183 9.94773 4.18362 9.84619 4.22592C9.74464 4.26823 9.65247 4.33023 9.575 4.40833L6.83333 7.15833V0.833333C6.83333 0.61232 6.74554 0.400358 6.58926 0.244078C6.43297 0.0877975 6.22101 0 6 0C5.77899 0 5.56702 0.0877975 5.41074 0.244078C5.25446 0.400358 5.16667 0.61232 5.16667 0.833333V7.15833L2.425 4.40833C2.26808 4.25141 2.05525 4.16326 1.83333 4.16326C1.61141 4.16326 1.39859 4.25141 1.24167 4.40833C1.08475 4.56525 0.99659 4.77808 0.99659 5C0.99659 5.22192 1.08475 5.43475 1.24167 5.59167L5.40833 9.75833C5.48759 9.8342 5.58104 9.89367 5.68333 9.93333C5.78308 9.97742 5.89094 10.0002 6 10.0002C6.10906 10.0002 6.21692 9.97742 6.31667 9.93333C6.41896 9.89367 6.51241 9.8342 6.59167 9.75833L10.7583 5.59167C10.8364 5.5142 10.8984 5.42203 10.9407 5.32048C10.9831 5.21893 11.0048 5.11001 11.0048 5C11.0048 4.88999 10.9831 4.78107 10.9407 4.67952C10.8984 4.57797 10.8364 4.4858 10.7583 4.40833Z"
                        fill="currentColor"/></svg>
                </a>
            </div>
        </div>

    )
}