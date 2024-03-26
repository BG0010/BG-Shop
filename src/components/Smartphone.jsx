import React from 'react'
import Iphone from '../assets/iphone.png'

export default function Smartphone() {
  return (
    <div>
        <h2 className='font-bold m-3 text-2xl text-text'>Iphone 15</h2>
        <img src={Iphone} alt="" />
        <p className='text-p'>Uauforia. Dynamic Island. Câmera de 48 MP com teleobjetiva de 2x. Compre agora. Projetado para fazer a diferença. Conheça o iPhone 15. Teleobjetiva de 2x. USB-C. Dynamic Island. iOS 17. Bateria para o dia todo. Chip A16 Bionic. Nova câmera de 48 MP.</p>
        <a href="https://www.apple.com/br/shop/buy-iphone/iphone-15/tela-de-6,1-polegadas-256gb-preto" target='__blank'><button className='bg-botao p-1.5 m-6 rounded-2xl text-bg font-medium'>Ver mais</button></a>
    </div>
  )
}
