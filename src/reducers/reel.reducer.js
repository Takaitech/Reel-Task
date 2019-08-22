let initialState = [
    {brand: 'ACNE', name: 'Bryz Velcro-strap suede trainers', paused: false, percentSaved : 30, total: 1000, url: '/images/Acne-Placeholder.png'},
    {brand: 'GUCCI', name: 'GG Marmont mini quilted-leather cross-body bag', paused: false, percentSaved : 50, total: 900, url: '/images/Gucci-Placeholder.jpg'},
    {brand: 'FENDI ', name: 'X FILA Logo Sneakers', paused: false, percentSaved : 40, total: 250, url: '/images/Fendi-Placeholder.jpg'},
    {brand: 'FENDI', name: 'Mon Tresor perforated-logo leather bucket bag', paused: false, percentSaved : 25, total: 500, url: 'https://images.ctfassets.net/ljoz65y94szt/7E3wKXRFUOy8D0kEgRFodA/3f45dc8a37144d52136ae25ecce42af1/Isabel_Marant.jpg'},
    {brand: 'ALBUS LUMEN ', name: 'Safi striped single-breasted blazer', paused: false, percentSaved : 100, total: 1000, url: 'https://images.ctfassets.net/ljoz65y94szt/1eeYjBEsGcKzr7vZRBNLe0/01ca498a0918a68079844a1578f0d892/Gucci.jpg'},
    {brand: 'VETEMENTS ', name: 'Embroidered-logo denim cap', paused: false, percentSaved : 50, total: 1500, url: 'https://images.ctfassets.net/ljoz65y94szt/6V8mSNDehSzpxU1s5ylFZ5/401c5843ad19191257aef24b3bf03137/GRLFRND.jpg'},
    {brand: 'ROKSANDA ', name: 'Aulna floral-print silk-satin blouse', paused: false, percentSaved : 80, total: 3000, url:'https://images.ctfassets.net/ljoz65y94szt/7EAfiInQqobvWzWy94zF2J/d9e2f27f51c62482d9d3b94e63d87472/Loewe.jpg'}
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