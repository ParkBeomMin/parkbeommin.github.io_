interface Post {
    title: string;
    description: string;
    categories: string;
    date: string;
    _path: string;
}
interface PostState {
    postList: Array<Post>;
    keyword: string;
    categories: Array<string>;
}
export const usePosts = () => {
    const postState = useState<PostState>("posts", () => ({
        postList: [],
        keyword: "",
        categories: [],
    }));

    const setCategory = ({ category }: { category: string }) => {
        const findIndex = postState.value.categories.findIndex(
            (c) => c === category
        );
        if (findIndex != -1) {
            postState.value.categories.splice(findIndex, 1);
            return;
        }
        postState.value.categories.push(category);
        console.log("postState.value.categories", postState.value.categories);
    };
    const getPostList = async () => {
        postState.value.postList = (
            await queryContent("posts")
                .where({
                    title: {
                        $contains: [postState.value.keyword],
                    },
                    categories: {
                        $contains: [...postState.value.categories],
                    },
                })
                .find()
        )
            .map((post: any) => ({
                title: post.title,
                description: post.description,
                categories: post.categories,
                date: post.date,
                _path: post._path,
            }))
            .sort((a: any, b: any) => {
                const aDate = new Date(a.date);
                const bDate = new Date(b.date);
                return bDate.getTime() - aDate.getTime();
            });
        console.log(postState.value.postList);
    };

    return { postState, getPostList, setCategory };
};
