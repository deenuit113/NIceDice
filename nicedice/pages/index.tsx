import MainPage from "@/units/main/Mainpage";
import { RecoilRoot } from "recoil";

export default function Home(): JSX.Element {
    return (
        <RecoilRoot>
            <MainPage/>
        </RecoilRoot>
    );
}
