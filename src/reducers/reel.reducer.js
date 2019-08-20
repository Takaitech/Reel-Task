let initialState = [
    {brand: 'ACNE', name: 'Bryz Velcro-strap suede trainers', paused: false, percentSaved : '30', total: '3000', url: './images/Acne-placeholder.jpg'},
    {brand: 'GUCCI', name: 'GG Marmont mini quilted-leather cross-body bag', paused: false, percentSaved : '50', total: '3000', url: './images/Acne-placeholder.jpg'},
    {brand: 'LOEWE ', name: 'Animal alphabet-print silk scarf', paused: false, percentSaved : '40', total: '3000', url: './images/Acne-placeholder.jpg'},
    {brand: 'FENDI', name: 'Mon Tresor perforated-logo leather bucket bag', paused: false, percentSaved : '25', total: '3000', url: './images/Acne-placeholder.jpg'},
    {brand: 'ALBUS LUMEN ', name: 'Safi striped single-breasted blazer', paused: false, percentSaved : '100', total: '3000', url: './images/Acne-placeholder.jpg'},
    {brand: 'VETEMENTS ', name: 'Embroidered-logo denim cap', paused: false, percentSaved : '50', total: '3000', url: './images/Acne-placeholder.jpg'},
    {brand: 'ROKSANDA ', name: 'Aulna floral-print silk-satin blouse', paused: false, percentSaved : '80', total: '3000', url:'./images/Acne-placeholder.jpg'}
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