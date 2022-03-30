import { atom } from "recoil";

export const nftsState = atom({
    key: "nfts",
    default: {
        nfts: [],
        isLoading: false,
        isError: false,
    },
});