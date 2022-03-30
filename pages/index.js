import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SearchMarketplace from '../components/ui/Explore/SearchMarketplace'

const Home = () => {
    return ( <> <div>
        <section
            className="relative bg-coolGray-900 overflow-hidden"
            style={{
            backgroundImage: 'url("/assets/elements/pattern-dark2.svg")',
            backgroundPosition: 'center'
        }}>
            <div className="py-10 md:py-18 bg-gray-900">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <h1
                                className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight">
                                <img src="/assets/df.svg" className="mt-2" alt="Discover, Find"/>
                                <img src="/assets/se.svg" className="mt-2" alt="Sell Extraordinary"/>
                                <img src="/assets/mn.svg" className="mt-2" alt="Monster NFTS"/>
                            </h1>
                            <p className="mb-8 text-lg md:text-xl text-coolGray-100 font-medium">Marketplace For Monster Character Collections Non Fungible Tokens NFTs</p>
                            <div className="flex flex-wrap px-6 md:px-0">
                                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                                    <a
                                        className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center  focus:ring-2 border border-violet-900 focus:ring-violet-900 focus:ring-opacity-50 rounded-full shadow-sm"
                                        href="#">Explore</a>
                                </div>
                                <div className="w-full md:w-auto py-1 md:py-0">
                                    <a
                                        className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-[#343444] border bg-white border-black font-medium text-center focus:ring-2 focus:ring-violet-900 focus:ring-opacity-50 rounded-full shadow-sm"
                                        href="#">Create</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="relative mx-auto md:mr-0 max-w-max">
                                <div className="relative overflow-hidden rounded-7xl">
                                    <img src="/assets/hero.png" alt="Hero"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SearchMarketplace/>
        <section
            className="py-24 bg-gray-900 overflow-hidden"
            style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")',
            backgroundPosition: 'center'
        }}>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                        <div className="relative mx-auto md:ml-0 max-w-max md:mt-28">
                            <div className="w-full px-6 md:px-16 mb-8">
                                <h3 className="mb-2 text-4xl text-white font-bold">Create And Sell Your NFTs</h3>
                                <p className="font-medium text-coolGray-400">Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Ipsum minus laborum magni, optio amet cumque
                                    delectus explicabo incidunt fugiat porro dignissimos animi sunt neque mollitia
                                    est a. Doloribus, facere impedit!</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className="flex flex-wrap -mx-4 text-center md:text-left">
                            <div className="w-full inline-flex flex-row md:w-1/2 px-4 mb-8">
                                <div
                                    className="inline-flex items-center justify-center mx-4 mb-4 w-16 h-16 text-xl text-white bg-violet-500 font-semibold rounded-full">1</div>
                                <div className="flex-col w-3/5">
                                    <h3 className="mb-2 text-xl text-white font-bold">Add Your NFTs</h3>
                                    <p className="font-medium text-coolGray-400">Sed ut perspiciatis un de omnis
                                        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                            </div>
                            <div className="w-full inline-flex flex-row md:w-1/2 px-4 mb-8">
                                <div
                                    className="inline-flex items-center justify-center mx-4 mb-4 w-16 h-16 text-xl text-white bg-indigo-500 font-semibold rounded-full">2</div>
                                <div className="flex-col w-3/5">
                                    <h3 className="mb-2 text-xl text-white font-bold">Set Up Your Wallet</h3>
                                    <p className="font-medium text-coolGray-400">Wallet that is functional for NFT
                                        purchasing. You may have a Coinbase account at this point, but very few are
                                        actually set up to buy an NFT.</p>
                                </div>
                            </div>
                            <div className="w-full inline-flex flex-row md:w-1/2 px-4 mb-8">
                                <div
                                    className="inline-flex items-center justify-center mx-4 mb-4 w-16 h-16 text-xl text-white bg-green-500 font-semibold rounded-full">3</div>
                                <div className="flex-col w-3/5">
                                    <h3 className="mb-2 text-xl text-white font-bold">Create Your Collection</h3>
                                    <p className="font-medium text-coolGray-400">Setting up your NFT collection and
                                        creating NFTs on NFTs is easy! This guide explains how to set up your first
                                        collection</p>
                                </div>
                            </div>
                            <div className="w-full inline-flex flex-row md:w-1/2 px-4 mb-8">
                                <div
                                    className="inline-flex items-center justify-center mx-4 mb-4 w-16 h-16 text-xl text-white bg-red-500 font-semibold rounded-full">4</div>
                                <div className="flex-col w-3/5">
                                    <h3 className="mb-2 text-xl text-white font-bold">List Them For Sale</h3>
                                    <p className="font-medium text-coolGray-400">Choose between auctions,
                                        fixed-price listings, and declining-price listings. You choose how you want to
                                        sell your NFTs!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div> </>
    )
}

export default Home;