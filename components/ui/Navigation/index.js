import Link from "next/link"

import React, {useEffect, useState} from "react"
import {useWeb3React} from "@web3-react/core"
import {injected} from "./wallet/connectors"

export default function Navigation() {
    const [mobileView,
        setViewMobile] = useState(false)
    const [toggleMobile,
        setToggleMobile] = useState(false)
    const {
        active,
        account,
        library,
        connector,
        activate,
        deactivate
    } = useWeb3React()

    const [wallet,
        setWallet] = useState({isWalletConnected: false, isWalletConnecting: false})
    async function connect() {
        try {
            await activate(injected)
            setWallet({isWalletConnected: true, isWalletConnecting: false})
        } catch (ex) {
            console.log(ex)
        }
    }
    async function disconnect() {
        try {
            deactivate()
            setWallet({isWalletConnected: false, isWalletConnecting: false})
        } catch (ex) {
            console.log(ex)
        }
    }
    useEffect(() => {
        const connectWalletOnPageLoad = async() => {
            if (wallet.isWalletConnected === true) {
                try {
                    await activate(injected)
                    setWallet({isWalletConnected: true, isWalletConnecting: false})
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
        connectWalletOnPageLoad()
    }, [])

    // Create a useEffect hook that checks for window size and sets the mobileView
    // state accordingly
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1280) {
                setViewMobile(true)
            } else {
                setViewMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleMobileToggle = () => {
        setToggleMobile(!toggleMobile)
    }
    
    const registerAccount = () => {

    }
    const getAccount = () => {

    }
    return (
        <div>
            <section
                className="relative bg-coolGray-900 overflow-hidden"
                style={{
                backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")',
                backgroundPosition: 'center'
            }}>
                <nav className="flex justify-between p-6 px-8 md:px-20">
                    <div className="flex justify-between items-center w-full">
                        <div className="w-1/2 xl:w-1/3">
                            <a className="block max-w-max font-heading text-white flex flex-row" href="#">
                                <img className="h-8 mr-2" src="/assets/fabwelt.svg"/>
                                <img className="h-8" width="160px" src="/assets/fab.svg"/>
                            </a>
                        </div>
                        <div className="w-1/2 xl:w-1/3">
                            <ul className="hidden xl:flex xl:justify-center">
                                <li className="mr-12">
                                    <Link href="/">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Home</a>
                                    </Link>
                                </li>
                                <li className="mr-12">
                                    <Link href="/explore">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Explore</a>
                                    </Link>
                                </li>
                                <li className="mr-12">
                                    <Link href="/activity">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Activity</a>
                                    </Link>
                                </li>
                                <li className="mr-12">
                                    <Link href="/swapping">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Swapping</a>
                                    </Link>
                                </li>
                                <li className="mr-12">
                                    <Link href="/auction">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Auction</a>
                                    </Link>
                                </li>
                                <li className="mr-12">
                                    <Link href="/contact">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 xl:w-1/3">
                            <div className="hidden md:flex items-center justify-end">
                                {wallet.isWalletConnected
                                    ? <button
                                            className="py-2 px-4 mr-2 leading-5 border border-red-500 rounded text-coolGray-200 hover:text-coolGray-50 bg-transparent font-medium overflow-hidden"
                                            onClick={disconnect}>{account
                                                ?.substring(0, 22)}****</button>
                                    : <button
                                        className="md:inline-block py-2 px-4 mr-2 leading-5 border border-green-500 rounded text-coolGray-200 hover:text-coolGray-50 bg-transparent font-medium"
                                        onClick={connect}>Wallet Connect</button>}
                            </div>
                        </div>
                    </div>
                    <button
                        className="navbar-burger self-center xl:hidden"
                        onClick={handleMobileToggle}>
                        <svg
                            width={35}
                            height={35}
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"><rect
                            className="text-coolGray-800"
                            width={32}
                            height={32}
                            rx={6}
                            fill="currentColor"/><path
                            className="text-coolGray-400"
                            d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                            fill="currentColor"/></svg>
                    </button>
                </nav>
                <div
                    className={`${toggleMobile
                    ? 'block'
                    : 'hidden'} xl:hidden`}>
                    <div className="bg-coolGray-900">
                        <div className="flex flex-col items-center justify-center py-6 px-8 md:px-20">
                            <ul className="text-3xl text-center">
                                <li className="md:mr-12">
                                    <Link href="/">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Home</a>
                                    </Link>
                                </li>
                                <li className="md:mr-12">
                                    <Link href="/explore">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Explore</a>
                                    </Link>
                                </li>
                                <li className="md:mr-12">
                                    <Link href="/activity">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Activity</a>
                                    </Link>
                                </li>
                                <li className="md:mr-12">
                                    <Link href="/swapping">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Swapping</a>
                                    </Link>
                                </li>
                                <li className="md:mr-12">
                                    <Link href="/auction">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Auction</a>
                                    </Link>
                                </li>
                                <li className="md:mr-12">
                                    <Link href="/contact">
                                        <a
                                            onClick={handleMobileToggle}
                                            className="text-coolGray-400 hover:text-coolGray-50 font-medium">Contact</a>
                                    </Link>
                                </li>
                                <li className="md:mr-12">{wallet.isWalletConnected
                                        ? <button
                                                className="md:inline-block py-2 px-4 mr-2 leading-5 border border-red-500 rounded text-coolGray-200 hover:text-coolGray-50 bg-transparent font-medium overflow-hidden"
                                                onClick={disconnect}>{account
                                                    ?.substring(0, 22)}****</button>
                                        : <button
                                            className="md:inline-block py-2 px-4 mr-2 leading-5 border border-green-500 rounded text-coolGray-200 hover:text-coolGray-50 bg-transparent font-medium"
                                            onClick={connect}>Wallet Connect</button>}</li>
                                <div></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}