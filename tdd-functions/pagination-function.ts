export function paginationFunction(stringArray: string[], pageSize: number, pageToView: number): string[]{
    let pageView:string[] = []
    if (pageToView === 0){
        let index = 0
        while (pageSize>0) {
            if(stringArray[index] != null || undefined){
                pageView.push(stringArray[index])
                pageSize--
                index++
            } else{
                pageSize--
                index++
            }
        }
        
    } else {
        let index = pageSize*pageToView
        while (pageSize>0) {
            if(stringArray[index] != null || undefined){
                pageView.push(stringArray[index])
                pageSize--
                index++
            } else {
                pageSize--
                index++
            }
        }
    }
    return pageView
}
