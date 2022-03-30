import Head from 'next/head'
import Link from 'next/link'

import { Global } from '@emotion/react'
import '../styles/globals.css';
import Navigation from '../components/ui/Navigation';


import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3';
import { RecoilRoot } from 'recoil';

function getLibrary(provider) {
    return new Web3(provider)
}

function MyApp({ Component, pageProps }) {

    return (
        <>
        <Web3ReactProvider getLibrary={getLibrary}>
                <Navigation />
                <Component {...pageProps} />
                <section className="bg-[#0D0D11]" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-dark.svg")', backgroundPosition: 'center'}}>
                    <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap pt-24 pb-12 -mx-4">
                        <div className="w-full md:w-3/4 lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <a className="max-w-max font-heading text-white flex flex-row" href="#">
                            <img className="h-8 mr-2" src="/assets/fabwelt.svg" />
                            <img className="h-8" width="160px" src="/assets/fab.svg" />
                        </a>
                        <p className="text-base md:text-md mt-4 text-coolGray-400 font-medium lg:w-64">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis enim dolores natus non ea? Quia debitis itaque doloribus! Ducimus, nam molestias! Vero corporis ut eaque nobis quia harum explicabo rem.</p>
                        <div className="h-10 w-10 text-green-400 font-medium text-lg"></div>
                        </div>
                        <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                        <h3 className="mb-5 text-lg font-bold text-white">My Account</h3>
                        <ul>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Authors</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Collection</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Author Profile</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Create Collection</a></li>
                        </ul>
                        </div>
                        <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                        <h3 className="mb-5 text-lg font-bold text-white">Resources</h3>
                        <ul>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Help & Support</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Live Auctions</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Item Details</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Activity</a></li>
                        </ul>
                        </div>
                        <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                        <h3 className="mb-5 text-lg font-bold text-white">Company</h3>
                        <ul>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">About Us</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Contact Us</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Our Blog</a></li>
                            <li className="mb-4"><a className="inline-block text-coolGray-400 hover:text-coolGray-500 font-medium" href="#">Discover</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="border-b border-coolGray-800" />
                    <p className="py-10 md:pb-16 text-sm text-coolGray-400 font-medium text-center">© 2022 Fabwelt. All rights reserved.</p>
                </section>
            </Web3ReactProvider>
        </>
    )
}

export default MyApp