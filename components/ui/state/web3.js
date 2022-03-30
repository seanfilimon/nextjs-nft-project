import { useSetRecoilState, useRecoilValue , atom } from 'recoil';

export const walletState = atom({
    key: 'wallet',
    default: {
        isWalletConnected: false,
        isWalletConnecting: false,
    },
});

export const useSetWalletData = () => useSetWalletData(walletState);
export const useWalletData = () => useRecoilValue(walletState);

export default {
    useSetWalletData,
    useWalletData,
};