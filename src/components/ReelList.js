import React from 'react'
import Reel from '../components/Reel'
import styles from '../style/style.module.css'


const userReels = [
    {brand: 'GIVENCHY', name: 'LOGO-PRINT RUBBER SLIDES ', status: 'active', percentSaved : '30', total: '3000', url: 'https://images.ctfassets.net/ljoz65y94szt/4wE04xOB5YNKvoFGIjcFKH/ce7fa687386deebf1c66df3ce6dfa5bf/Givenchy.jpg'},
    {name: 'LE ORIGINAL DISTRESSED HIGH-RISE JEANS - LIGHT DENIM', status: 'active', percentSaved : '50', total: '3000', url: 'https://images.ctfassets.net/ljoz65y94szt/6Spt6YKPy1doGyBaUC8PiL/6bcfb2eab7ce0247e38c630310867302/Frame.jpg'},
    {name: 'Adidas', status: 'active', percentSaved : '40', total: '3000', url: 'https://images.ctfassets.net/ljoz65y94szt/3ZR05sgiyjqjRl6ogmVPpB/bb21e6318ab11d03daacfbbdcaf95e07/Gucci.jpg'},
    {name: 'Adidas', status: 'active', percentSaved : '25', total: '3000', url: 'https://images.ctfassets.net/ljoz65y94szt/1eeYjBEsGcKzr7vZRBNLe0/8fe183e6f0db67364ecde41e255ec37b/Chloe__.jpg'},
    {name: 'Adidas', status: 'active', percentSaved : '100', total: '3000', url: 'https://images.ctfassets.net/ljoz65y94szt/6V8mSNDehSzpxU1s5ylFZ5/40d8496865a96e065b6ecd14646c60b1/Apple.jpg'},
    {name: 'Adidas', status: 'active', percentSaved : '50', total: '3000', url: 'https://images.ctfassets.net/ljoz65y94szt/582IAmuA8cqc34DH4xVy2U/a8d63f8805371a3129f900995219c297/Loewe.jpg'},
    {name: 'Adidas', status: 'active', percentSaved : '80', total: '3000', url: 'https://images.ctfassets.net/ljoz65y94szt/2gFh6pDyztcLXYtzizhxec/8d711e1922c9dc1a4613d77aee2c654d/Serena___Lily.jpg'}
]

 class ReelList extends React.Component {
    render() {
        console.log(userReels)
        return(
            <ul className={styles.reelList}>
                {userReels.map((reel, index) => (
                    <Reel color={reel.color} key={index} brand={reel.brand} name={reel.name} status={reel.status} percentSaved={reel.percentSaved} total={reel.total} url={reel.url} />
                ))}
            </ul>
        )
    }
}


export default ReelList