import React, {useEffect, useState} from 'react';
import { useRecoilState } from 'recoil';

export default function SearchMarketplace() {
    const [viewMobile, setViewMobile] = React.useState(false);
    const [category, setCategory] = React.useState("all");
    const [renderQuanity, setRenderQuanity] = React.useState(10);
    const [results, setResults] = React.useState([]);


    useEffect(() => {
        const initialWidth = window.innerWidth;
        if(initialWidth < 768) {
            setViewMobile(true);
        }

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

    const fetchNfts = async () => {
        const params = new URLSearchParams({
            type: category,
            amount: renderQuanity,
        })
        const response = await fetch(`http://localhost:3000/api/explore/list?${params}`);
      const data = await response.json();
      setResults(data);
    }
    useEffect(() => {
      setResults([]);
      fetchNfts();
    }, [])

    const chooseCategory = (e) => {
        setCategory(e.target.value);
    }

    const renderTags = (bids, timeLeft) => {
        return (
          <div className="mb-2 text-white">
            <a className="inline-block mr-0.5 py-0.5 px-2 text-md leading-5 text-indigo-500 font-bold bg-gray-900 hover:bg-gray-800 border border-indigo-500 rounded-lg shadow-sm" href="#">Bids: {bids}</a><a className="inline-block py-0.5 px-2 text-md leading-5 text-red-500 font-bold bg-gray-900 hover:bg-gray-800 border border-red-500 rounded-md shadow-sm" href="#">{timeLeft} left</a>
          </div>
        )
    }

    const renderNFTMeta = () => {
        return (
            <>
              <a className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-200 font-bold hover:underline" href="#">NFT Auction Title</a>
              <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">NFT Desc</p>
            </>
        )
    }
    const renderItem = (typeOfItem, listing, auction, key) => {
      try {
        switch(typeOfItem) {
          case "listing":
            return viewMobile ? (
              <div className="w-full md:w-1/2 py-3 px-0 md:px-2" key={key}>
              <div className="w-full h-42 bg-gray-800 border border-green-400 px-3 py-2 rounded-6xl">
                  <div className="flex flex-row w-full h-34 px-1">
                      <div className="w-1/3 inline-flex h-34">
                          <img className="bg-cover bg-gray-200 w-full rounded-2xl p-1" src="/assets/fabwelt.svg" />
                      </div>
                      <div className="w-2/3 flex flex-col pl-3">
                          <a className="inline-block mb-2 text-lg leading-tight text-white hover:text-coolGray-200 font-bold hover:underline" href="#">{listing.title}</a>
                          <div className="mb-2 text-white">
                            <a className="inline-block mr-0.5 py-0.5 px-2 text-md leading-5 text-indigo-500 font-bold bg-gray-900 hover:bg-gray-800 border border-indigo-500 rounded-lg shadow-sm" href="#">Offers: {listing.offersAmount}</a><a className="inline-block py-0.5 px-2 text-md leading-5 text-red-500 font-bold bg-gray-900 hover:bg-gray-800 border border-red-500 rounded-md shadow-sm" href="#">{listing.timeLeft} left</a>
                          </div>
                          <p className="text-coolGray-500 font-medium">Creator</p>
                          <p className="mb-2 text-coolGray-100 font-medium">{listing.owner}</p>
                          <a className="inline-flex items-center text-lg text-green-500 hover:text-green-600" href="#">
                              <span className="mr-3">Purchase</span>
                              <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg>
                              <span className="ml-3">{listing.price} ETH</span>
                          </a>
                      </div>
                  </div>
                  </div>    
              </div>    
            ) : (
              <div className="w-full md:w-1/5 p-2" key={key}>
              <div className="w-full bg-gray-800 border border-green-400 px-6 py-2 rounded-6xl">
                <div className="flex flex-row my-2"> 
                  <img className="w-12 bg-gray-900 text-white rounded-full h-12 mr-2" src="/assets/fabwelt.svg" /> 
                  <div className="flex flex-col">
                    <p className="text-coolGray-500 font-medium">Creator</p>
                    <p className="mb-2 text-coolGray-100 font-medium">{listing.owner}</p>
                  </div>
                  <button className="ml-auto w-14 h-8 bg-[#14141F] mt-2 p-1 font-medium rounded-full">
                    <span className="text-white">100</span>
                  </button>
                </div>
                <a className="block mb-2 overflow-hidden rounded-md" href="#">
                  <img className="w-full" src="/assets/hero.png" /></a>
                <div className="mb-2 text-white">
                  <a className="inline-block mr-0.5 py-0.5 px-2 text-md leading-5 text-blue-500 font-bold bg-gray-900 hover:bg-gray-800 border border-blue-500 rounded-lg shadow-sm" href="#">Offers: {listing.offersAmount}</a><a className="inline-block py-0.5 px-2 text-md leading-5 text-red-500 font-bold bg-gray-900 hover:bg-gray-800 border border-red-500 rounded-md shadow-sm" href="#">{listing.timeLeft} left</a>
                </div>                  
                <a className="inline-block mb-2 text-2xl leading-tight text-white hover:text-coolGray-200 font-bold hover:underline" href="#">{listing.title}</a>
                <p className="text-red-500 mb-2 hover:text-red-600 text-xl font-semibold">Price: {listing.price} {listing.currency} <span className="text-gray-500">(each)</span></p>
                <a className="inline-flex mb-2 items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold" href="#">
                  <span className="mr-3">Purchase</span>
                  <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg>
                </a>
              </div>          
            </div>
            )
            break;
          case "auction":
            
            return viewMobile ? (
              <div className="w-full md:w-1/2 py-3 px-0 md:px-2" key={key}>
              <div className="w-full h-42 bg-gray-800 border border-yellow-400 px-3 py-2 rounded-6xl">
                  <div className="flex flex-row w-full h-34 px-1">
                      <div className="w-1/3 inline-flex h-34">
                          <img className="bg-gray-200 w-full rounded-2xl p-1" src="/assets/fabwelt.svg" />
                      </div>
                      <div className="w-2/3 flex flex-col pl-3">
                          <a className="inline-block mb-2 text-lg leading-tight text-white hover:text-coolGray-200 font-bold hover:underline" href="#">{listing.title}</a>
                          <p className="text-coolGray-500 font-medium">Creator</p>
                          <p className="mb-2 text-coolGray-100 font-medium">{listing.owner}</p>
                          <a className="inline-flex items-center text-lg text-indigo-500 hover:text-indigo-600" href="#">
                              <span className="mr-3">Bid Now</span>
                              <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg>
                              <span className="ml-3">{listing.price}</span>
                          </a>
                          
                      </div>
                  </div>
                  
                  </div>    
              </div>    
            ) : (
              <div className="w-full md:w-1/5 p-2" key={key}>
              <div className="w-full bg-gray-800 px-6 py-2 rounded-6xl border border-blue-500">
                <div className="flex flex-row my-2"> 
                  <img className="w-12 bg-gray-900 text-white rounded-full h-12 mr-2" src="/assets/fabwelt.svg" /> 
                  <div className="flex flex-col">
                    <p className="text-coolGray-500 font-medium">Creator</p>
                    <p className="mb-2 text-coolGray-100 font-medium">John Doe</p>
                  </div>
                  <button className="ml-auto w-14 h-8 bg-[#14141F] mt-2 p-1 font-medium rounded-full">
                    <span className="text-white">100</span>
                  </button>
                </div>
                <a className="block mb-2 overflow-hidden rounded-md" href="#">
                  <img className="w-full" src="/assets/hero.png" /></a>
                  {renderTags()}                  
                <a className="inline-block mb-2 text-2xl leading-tight text-white hover:text-coolGray-200 font-bold hover:underline" href="#">NFT Auction Title</a>
                <p className="text-yellow-500 mb-2 text-lg font-semibold">Shares: 295</p>
                <a className="inline-flex mb-2 items-center text-base md:text-lg text-indigo-500 hover:text-indigo-600 font-semibold" href="#">
                  <span className="mr-3">Bid Now</span>
                  <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg>
                  <span className="ml-3">0.00 ETH</span>
                </a>
              </div>          
            </div>
            )
            break;
        }
      } catch(e) {
        console.log(e)
      }
    }

    return (
        <section className="py-24 bg-coolGray-900" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-dark.svg")', backgroundPosition: 'left top'}}><div className="container px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">Online</span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-white font-bold tracking-tighter">Search through our Marketplace!</h3>
          <p className="mb-10 text-lg md:text-xl text-coolGray-400 font-medium">Monster Character Collections Non Fungible Tokens NFTs</p>
          <div className="relative mx-auto md:w-80">
            <img className="absolute top-1/2 left-4 transform -translate-y-1/2" src="flex-ui-assets/elements/blog/search.svg" /><input className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-opacity-50" type="text" placeholder="Search" /></div>
        </div>
        <ul className="flex flex-wrap mb-8 -mx-2 text-center justify-center">
          <li className="w-full md:w-auto px-2"><button className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm hover:text-violet-900 font-bold rounded-md hover:shadow-sm ${category == 'all' ? 'text-indigo-500' : 'text-gray-500'}`} value="all" onClick={chooseCategory}>All Categories</button></li>
          <li className="w-full md:w-auto px-2"><button className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm hover:text-violet-900 font-bold rounded-md hover:shadow-sm ${category == 'auction' ? 'text-indigo-500' : 'text-gray-500'}`} value="auction" onClick={chooseCategory}>Live Auctions</button></li>
          <li className="w-full md:w-auto px-2"><button className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm hover:text-violet-900 font-bold rounded-md hover:shadow-sm ${category == 'listing' ? 'text-indigo-500' : 'text-gray-500'}`} value="listing" onClick={chooseCategory}>Listings</button></li>
          <li className="w-full md:w-auto px-2"><button className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm hover:text-violet-900 font-bold rounded-md hover:shadow-sm ${category == 'category' ? 'text-indigo-500' : 'text-gray-500'}`} value="category" onClick={chooseCategory}>Live Auctions</button></li>
          <li className="w-full md:w-auto px-2"><button className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm hover:text-violet-900 font-bold rounded-md hover:shadow-sm ${category == 'seller' ? 'text-indigo-500' : 'text-gray-500'}`} value="seller" onClick={chooseCategory}>Top Sellers</button></li>
        </ul>
        <div className="flex flex-wrap -mx-4 px-6 md:px-0 mb-12 md:mb-20">
          { /* Render a list of 12 renderAuctionItems based on the first 12 items from results*/ }
          {results.slice(0, 12).map((item, index) => {
            return renderItem(item.typeOfItem, item.listing, item.auction, index)
          })}
        </div>
        <a className="flex items-center justify-center py-2 px-4 mx-auto teaxt-sm leading-5 text-green-50 font-medium bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 md:max-w-max rounded-md" href="#">
          <span className="mr-3">Explore More</span>
          <svg className="text-violet-50" width={12} height={10} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7583 4.40833C10.6809 4.33023 10.5887 4.26823 10.4871 4.22592C10.3856 4.18362 10.2767 4.16183 10.1667 4.16183C10.0567 4.16183 9.94773 4.18362 9.84619 4.22592C9.74464 4.26823 9.65247 4.33023 9.575 4.40833L6.83333 7.15833V0.833333C6.83333 0.61232 6.74554 0.400358 6.58926 0.244078C6.43297 0.0877975 6.22101 0 6 0C5.77899 0 5.56702 0.0877975 5.41074 0.244078C5.25446 0.400358 5.16667 0.61232 5.16667 0.833333V7.15833L2.425 4.40833C2.26808 4.25141 2.05525 4.16326 1.83333 4.16326C1.61141 4.16326 1.39859 4.25141 1.24167 4.40833C1.08475 4.56525 0.99659 4.77808 0.99659 5C0.99659 5.22192 1.08475 5.43475 1.24167 5.59167L5.40833 9.75833C5.48759 9.8342 5.58104 9.89367 5.68333 9.93333C5.78308 9.97742 5.89094 10.0002 6 10.0002C6.10906 10.0002 6.21692 9.97742 6.31667 9.93333C6.41896 9.89367 6.51241 9.8342 6.59167 9.75833L10.7583 5.59167C10.8364 5.5142 10.8984 5.42203 10.9407 5.32048C10.9831 5.21893 11.0048 5.11001 11.0048 5C11.0048 4.88999 10.9831 4.78107 10.9407 4.67952C10.8984 4.57797 10.8364 4.4858 10.7583 4.40833Z" fill="currentColor" /></svg></a>
      </div>
    </section>
    )
}