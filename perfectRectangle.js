const isRectangleCover = rects => {
    const corners = new Set()
    let left = Infinity
    let right = 0
    let top = 0
    let bot = Infinity
    let area = 0
    const keyit = ( x, y ) => x + "" +y
    const track = ( x, y ) => {
        const n = keyit( x, y )

        if ( corners.has( n ) ) {
            corners.delete( n )
        } else {
            corners.add( n )
        }
    }
    
    for ( let i = 0; i < rects.length; i++ ) {
        const [ x1, y1, x2, y2 ] = rects[ i ]
        
        left = Math.min( left, x1 )
        top = Math.max( top, y2 )
        right = Math.max( right, x2 )
        bot = Math.min( bot, y1 )
        
        area += ( x2 - x1 ) * ( y2 - y1 )

        track( x1, y1 )
        track( x1, y2 )
        track( x2, y1 )
        track( x2, y2 )
    } 
    console.log(corners)
    return (
        area === ( top - bot ) * ( right - left )
        && 4 === corners.size
        && corners.has( keyit( left, bot ) )
        && corners.has( keyit( right, bot ) )
        && corners.has( keyit( left, top ) )
        && corners.has( keyit( right, top ) )
    )
}

console.log(isRectangleCover([ [1,1,3,3],
    [3,1,4,2],
    [3,2,4,4],
    [1,3,2,4],
    [2,3,3,4]]));