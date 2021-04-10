export const randomColorGenerator = () => {
    return '#' + Math.random().toString(16).slice(2,8);
}