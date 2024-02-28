import React from "react";
import imageUrl from '../../assets/imageUrl.jpg'
import imageUrl2 from '../../assets/imageUrl2.jpg'
import imageUrl3 from '../../assets/imageUrl3.jpg'
import imageUrl4 from '../../assets/imageUrl4.jpg'
import imageUrl5 from '../../assets/imageUrl5.jpg'
import imageUrl6 from '../../assets/imageUrl6.jpg'
import imageUrl7 from '../../assets/imageUrl7.jpg'
import imageUrl8 from '../../assets/imageUrl8.jpg'



export const Services = () => {
  return (
    <div className="container">
    <div class="card-content">
    <h3>Homero</h3>
    <img className='homero' src={imageUrl} alt='homero' width="150" height="150"/>
    <p>Voy por la escopeta. Bart no quiero asustarte pero tal vez el Coco, el Coco esta en la casa.</p>
  </div>
    <div class="card-content">
    <h3>Bart</h3>
    <img className='homero' src={imageUrl2} alt='homero' width="150" height="150"/>
    <p>¿Qué te paso Viejo? Antes eras chévere</p>
  </div>
  <div class="card-content">
    <h3>Marge</h3>
    <img className='homero' src={imageUrl3} alt='homero' width="150" height="150"/>
    <p>A veces siento que la familia me vuelve loca ¡y quiero estallar! .</p>
  </div>
  <div class="card-content">
    <h3>Lisa</h3>
    <img className='homero' src={imageUrl4} alt='homero' width="150" height="150"/>
    <p>El jazz es como la vida, mejor si improvisas.</p>
  </div>
  <div class="card-content">
    <h3>Apuh</h3>
    <img className='homero' src={imageUrl5} alt='homero' width="150" height="150"/>
    <p>¡Gracias, vuelve pronto!</p>
  </div>
  <div class="card-content">
    <h3>Nelson</h3>
    <img className='homero' src={imageUrl6} alt='homero' width="150" height="150"/>
    <p>Robar en las tiendas es un crimen sin víctimas, justo como golpear a alguien en la oscuridad.</p>
  </div>
  <div class="card-content">
    <h3>Skinner</h3>
    <img className='homero' src={imageUrl7} alt='homero' width="150" height="150"/>
    <p>¿Acaso no es maravilloso odiar las mismas cosas? </p>
  </div>
  <div class="card-content">
    <h3>Ralp</h3>
    <img className='homero' src={imageUrl8} alt='homero' width="150" height="150"/>
    <p>El aliento de mi gato huele a comida de gato.</p>
  </div>

  </div>




 
  )
}
