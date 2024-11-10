export default async function (characters, length) {
    return await new Promise(function (resolve) {
        let result = ''
        let counter = 0
        
        const $length = characters.length

        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * $length))
            counter += 1
        }

        return resolve(result)
    })
}