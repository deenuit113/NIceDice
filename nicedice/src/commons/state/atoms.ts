import { atom } from 'recoil';

export const turnState = atom({
    key: 'turnState',
    default: "0p",
});

export const turnCount1p = atom({
    key: 'turnCount1p',
    default: 2,
});

export const turnCount2p = atom({
    key: 'turnCount2p',
    default: 2,
});

export const winState = atom({
    key: 'winState',
    default: "0p",
})