import starYellow from '../../../assets/icons/sterYellow.svg';
import starGrey from '../../../assets/icons/starGrey.svg';

interface StarProps {
    isEmpty: boolean;
}

export const Star = ({ isEmpty }: StarProps) => {
    return <>{isEmpty ? <img src={starGrey} alt='starGrey' /> : <img src={starYellow} alt='starYellow' />}</>;
};
