interface Cat {
    isShow: boolean;
    x: number;
}
export const useCat = () => {
    const catState = useState<Cat>("cat", () => ({
        isShow: false,
        x: 0,
    }));

    const setIsShow = (isShow: boolean) => {
        catState.value.isShow = isShow;
    };

    const setX = (x: number) => {
        catState.value.x = x;
    };

    return { catState, setIsShow, setX };
};
