import starYellow from '../../../assets/icons/sterYellow.svg';
import starGrey from '../../../assets/icons/starGrey.svg';

interface IStarProps {
    isEmpty: boolean;
}

export const Star = ({ isEmpty }: IStarProps): JSX.Element => {
    return <>{isEmpty ? <img src={starGrey} alt='starGrey' /> : <img src={starYellow} alt='starYellow' />}</>;
};
