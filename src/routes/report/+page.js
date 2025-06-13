export const load = async ({ fetch }) => {
    const responseFlowers = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
    const dataFlowers = await responseFlowers.json()

    return {
        flowers: dataFlowers
    }
}