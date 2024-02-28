import React from "react";
import imagen1 from '../../assets/imagen1.jpg'
import personaje from "../../assets/personaje.jpg"
import personaje2 from "../../assets/personaje2.jpg"
import personaje3 from "../../assets/personaje3.png"
import personaje4 from "../../assets/personaje4.jpg"
import personaje5 from "../../assets/personaje5.jpg"
import personaje6 from "../../assets/personaje6.jpg"
export const Home = () => {
  return (
    <div>
    <img src={imagen1} alt='Psimpson' width="1263" height="600"/>
    <div className="nav-story">
    <h1>Historia</h1>
    <p>Los Simpson es una serie de televisión animada estadounidense creada por Matt Groening para Fox Broadcasting Company. La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase trabajadora conformada por Homer, Marge, Bart, Lisa y Maggie Simpson, que residen en un pueblo ficticio llamado Springfield.
    La historia de Los Simpson se desarrolla en un universo lleno de personajes excéntricos y situaciones cómicas que reflejan la diversidad y complejidad de la vida moderna. A lo largo de los años, la serie ha explorado una amplia gama de temas, desde la política y la religión hasta la familia y la amistad, todo ello con un enfoque humorístico y a menudo satírico.</p>
    <p>El personaje principal, Homer Simpson, es conocido por su amor por la cerveza Duff y su amor por la comida rápida, así como por su pereza y su torpeza. Marge Simpson es la matriarca de la familia, una ama de casa devota y compasiva que intenta mantener unida a su familia a pesar de las constantes travesuras de sus hijos y las meteduras de pata de su esposo.
    Bart Simpson, el hijo mayor, es un niño travieso y rebelde que disfruta haciendo travesuras y desafiando la autoridad. Lisa Simpson, la hija del medio, es una niña inteligente y consciente socialmente que se destaca en la escuela y aboga por diversas causas sociales. Maggie Simpson, la bebé de la familia, es conocida por su chupete y su curiosidad por el mundo que la rodea.A lo largo de sus más de 30 temporadas, Los Simpson ha sido aclamada por la crítica y ha ganado numerosos premios, incluidos varios premios Emmy. La serie ha sido elogiada por su inteligente escritura, su ingenioso humor y su capacidad para abordar temas importantes de una manera divertida y accesible.
    Además de su éxito en la televisión, Los Simpson ha generado una gran cantidad de productos derivados, incluidas películas, videojuegos, cómics y mercancías. La serie también ha tenido un impacto duradero en la cultura popular, con referencias y parodias que se pueden encontrar en numerosas formas de medios y entretenimiento.
    En resumen, Los Simpson es mucho más que una simple serie de televisión animada; es un fenómeno cultural que ha dejado una huella indeleble en la sociedad y la historia del entretenimiento. Su legado perdura como una de las comedias más queridas y duraderas de todos los tiempos.</p>
    <div className='nav-personajes'>
    <div className='image'>
            <img alt='img' src={personaje}/>
            <img alt='img' src={personaje2}/>
            <img alt='img' src={personaje3}/>
            <img alt='img' src={personaje4}/>
            <img alt='img' src={personaje5}/>
            <img alt='img' src={personaje6}/>
        </div>
        </div>
     </div>
     </div>
  );
};
