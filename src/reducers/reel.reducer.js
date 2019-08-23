let initialState = [
    {brand: 'ACNE', name: 'Yellow velcro women sneakers', paused: false, percentSaved : 30, total: 1000, url: 'images/Acne-Placeholder.png'},
    {brand: 'GUCCI', name: 'Mini quilted-leather cross-body bag', paused: false, percentSaved : 50, total: 900, url: 'images/Gucci-Placeholder.jpg'},
    {brand: 'FENDI ', name: 'X FILA Logo Sneakers', paused: false, percentSaved : 40, total: 250, url: 'images/Fendi-Placeholder.jpg'},
    {brand: 'BALENCIAGA', name: 'Tortoise shell sunglasses', paused: false, percentSaved : 25, total: 500, url:'images/Glasses-Placeholder.jpg'},
    {brand: 'SAINT LAURENT ', name: 'Colorful thin sunglasses', paused: false, percentSaved : 100, total: 1000, url: 'images/Saint-Laurent-Placeholder.jpg'},
    {brand: 'JJP', name: 'Yellow velcro women sneakers', paused: false, percentSaved : 50, total: 1500, url: 'images/Acne-Placeholder.png'},
    {brand: 'PALACE', name: 'X FILA Logo Sneakers', paused: false, percentSaved : 80, total: 3000, url:'images/Fendi-Placeholder.jpg'},
    {brand: 'RAYBANS', name: 'Tortoise shell sunglasses', paused: false, percentSaved : 80, total: 3000, url:'images/Glasses-Placeholder.jpg'}
]

const reels = (state = initialState, action) => {
    switch(action.type) {
        case "TOGGLE_REEL_PAUSE":
            return state.map(reel => {
                if(reel.name === action.name) {
                    reel.paused = !reel.paused
                    return reel
                }
                return reel
            })  
        default: return state
    }
}

export default reels