import {useGetCinemaTodayQuery} from "../../api/cinema.api.tsx";

export const HomePage = () => {
    const s = useGetCinemaTodayQuery();
    return <div>
        Home
    </div>
}