interface Cat {
    isShow: boolean;
    x: number;
    isBack: boolean;
}
export const useCat = () => {
    const catState = useState<Cat>('cat', () => ({
        isShow: false,
        x: 0,
        isBack: false,
    }));

    const setIsShow = (isShow: boolean) => {
        catState.value.isShow = isShow;
    };

    const setX = (x: number) => {
        catState.value.x = x;
    };

    const setIsBack = (isBack: boolean) => {
        catState.value.isBack = isBack;
    };

    return { catState, setIsShow, setX, setIsBack };
};
