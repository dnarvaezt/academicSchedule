export function imprimirHistograma() {
    const myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1]

    function histograma(number) {
        switch (number) {
            case 1:
                return '*****'
            case 2:
            case 3:
                return '**'
            case 4:
                return ''
            case 5:
                return '*'
        }
    }

    myArray.forEach(number => {
        console.log(histograma(number))
    })
}