


export const colorDetector = (a, b)=>{
    switch (true) {
        case a > b:
            return 'green';
        case a < b:
            return 'red';
        default:
            return 'gray';
    }
}