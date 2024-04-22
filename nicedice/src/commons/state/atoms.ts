import { atom } from 'recoil';

export const turnState = atom({
    key: 'turnState',
    default: "0p",
});

export const turnCount = atom({
    key: 'turnCount',
    default: 3,
});

export const winState = atom({
    key: 'winState',
    default: "0p",
})