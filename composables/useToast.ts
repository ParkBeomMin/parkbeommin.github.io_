interface Toast {
    text: string;
    isShow: boolean;
    delay: number;
}
export const useToast = () => {
    const toastState = useState<Toast>("toast", () => ({
        text: "",
        isShow: false,
        delay: 3000,
    }));

    let timer = null;

    const showToast = ({
        text,
        delay = 3000,
    }: {
        text: string;
        delay?: number;
    }) => {
        toastState.value.isShow = true;
        toastState.value.text = text;
        toastState.value.delay = delay;
        timer = setTimeout(() => {
            toastState.value.isShow = false;
        }, delay);
    };

    const closeToast = () => {
        toastState.value.isShow = false;
        timer = null;
    };

    return {
        toastState,
        showToast,
        closeToast,
    };
};
