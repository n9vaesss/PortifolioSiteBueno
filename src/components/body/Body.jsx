import { useEffect, useState, useRef } from 'react'
import emailjs from "emailjs-com";

import '../../style/Body.css'

import Dana from '../../image/dana.png'
import Apresenta from '../../image/apresenta.png'

import bifarma from '../../image/bifarma.png'
import star from '../../image/star.png'
import lolita from '../../image/lolita.png'
import julian from '../../image/julian.png'
import agua from '../../image/agua.png'
import rcm from '../../image/rcm.png'
import diego from '../../image/diego.png'
import vitacare from '../../image/vitacare.png'
import monteiro from '../../image/monteiro.png'
import odonto from '../../image/odonto.png'
import cna from '../../image/cna.png'
import idc from '../../image/idc.png'
import pilar from '../../image/pilar.png'

function Body() {
    const [ data, setData ] = useState([])

    const carrossel = useRef(null)
  
    useEffect(() => {
      fetch('static/videos.json').then((response) => response.json()).then(setData)
    }, [])
  
    const handleLeftClick = (e) =>{
      e.preventDefault();
      carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
  
    const handleRightClick = (e) =>{
      e.preventDefault();
      carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }
  
    if( !data || !data.length ) return null

    function handleEnviarEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmailMessage', 'template_jn2m7xv', e.target, 'user_5KB1lIk7SBnLV5Uck6KFR')
    
        .then((result) => {
            alert("Mensagem enviada com sucesso!");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()
      }
  
    return (
        <div className='main-body'>

        <div className='body-image'>

            <div className='body-align-image'>
                <div className='img'>
                    <a href="https://www.danacosmeticos.com.br/" target='_blank'><img src={Dana} alt="" className='dana'/></a>
                    <a href="https://www.danacosmeticos.com.br/" target='_blank'><img src={Apresenta} alt="" className='apresenta'/></a>
                </div>
            </div>

            <div className='body-align'>
                <div className="container">
    
                    <div className = "carrossel" ref={carrossel}>

                        {data.map((item) =>{

                        const {video} = item;

                        return(
                        <div className = "item">
                            <div>
                                <iframe width="900px" height= "500px" src={video}></iframe>
                            </div>
                        </div>
                        )
                        })}
        
                    </div>

                        <div className = "buttons">

                            <button onClick = {handleLeftClick}> 
                                <img src= "/images/216151_right_chevron_icon.png" /> 
                            </button>

                            <button onClick = {handleRightClick}> 
                            <img src= "/images/216151_right_chevron_icon.png" /> 
                            </button>

                        </div>

                    </div>

                </div>

            <div className='body-white'>
                <div className='body-white-align'>
                    BANDA <hr size="1" className='linha1'></hr>
                        <p><b>Danilo Santana - piano acústico, Rhodes e synths; Conrado Goys - guitarras e violão;</b><br/>
                        <b>Tuto Ferraz - bateria e percussão; Robinho Tavares - baixo;</b><br/>
                        <b>Luísa Mariano - vocais de apoio; Luís Paulo Serafim - mixagem</b></p>

                        <div className='patrocinios'>
                        PATROCÍNIO <hr size="1" className='linha2'></hr>
                            <div className='img-patrocinios'>
                                <a href="https://www.facebook.com/bifarmaguararema" target='_blank'><img src={bifarma} alt="" className='bi'/></a>
                                <a href="http://www.starshopguararema.com.br/principal.html" target='_blank'><img src={star} alt="" className='st'/></a>
                                <a href="https://www.instagram.com/lavielolita/" target='_blank'><img src={lolita} alt="" className='lo'/></a>
                                <a href="https://www.instagram.com/julianbenitezcorretor/" target='_blank'><img src={julian} alt="" className='ju'/></a>
                                <a href="https://www.aguaconsultoria.com.br/" target='_blank'><img src={agua} alt="" className='ag'/></a>
                                <a href="http://www.rcmcom.com.br/" target='_blank'><img src={rcm} alt="" className='rc'/></a>
                                <a href="https://www.instagram.com/diego_vallim/" target='_blank'><img src={diego} alt="" className='di'/></a>
                                <a href="https://www.vitacarefarma.com.br/" target='_blank'><img src={vitacare} alt="" className='vi'/></a>
                                <a href="http://monteirosupermercados.com/" target='_blank'><img src={monteiro} alt="" className='mo'/></a>
                                <a href="http://www.instagram.com/odcguararema" target='_blank'><img src={odonto} alt="" className='od'/></a>
                                <a href="https://www.instagram.com/guararemacna_/" target='_blank'><img src={cna} alt="" className='cn'/></a>
                                <a href="https://idctelecom.com.br/" target='_blank'><img src={idc} alt="" className='id'/></a>
                                <a href="https://www.instagram.com/pilaradmcondominios/" target='_blank'><img src={pilar} alt="" className='pi'/></a> 
                                <img src="" alt="" className='va1'/>
                                <img src="" alt="" className='va2'/>
                            </div>
                        </div>
                </div>
            </div>

            <div className='body-bio' id = "1"> 

                <div className='body-align-bio'>

                    <h1>NOVO NOME, NOVAS MÚSICAS, NOVO GROOVE</h1><br />
                
                    <p>Rafa Bueno vem com um novo projeto para 2022! Novas músicas, novo nome, novo momento!</p><br />

                    <p>Rafa Bueno teve seu primeiro contato com a música ainda criança, aos 4 anos de idade. Com 11 anos ganhou seu primeiro violão que, desde então, o acompanha em várias fases da vida e inúmeras composições. Rafa já fez parte de algumas bandas (Marakutaia, Zanz Banda, dentre outras) sem deixar de moldar o seu lado de compositor e intérprete solo.</p><br />

                    <p>Cantou e tocou para mais de trinta mil pessoas, abrindo shows de artistas conhecidos nacinalmente, como João Bosco e Vinicius, Michel Teló... já dividiu o palco com Rodrigo Teaser (Michael Jackson Cover), Alirio Netto, Andre Luiz Ramiro, Milton Guedes, Edu Falaschi, entre outros.</p><br />

                    <p>Nesse novo projeto para 2022, Rafa traz no primeiro momento o lançamento de três músicas: MÉNAGE, de composição própria, TUA MEDICINA (composição de Henrique CH e Zé Travassos) e PENTE FINO (composição de André Caccia Bava).</p><br />

                    <p>O projeto tem a produção musical e arranjos de Danilo Santana, que também gravou os teclados e já trabalhou com grander nomes da música, como Rita Lee, Philip Bailey (Earth, Wind & Fire), Lenine, Caetano Veloso, etc.</p><br />

                    <p>O projeto contou com um time de grandes músicos brasileiros e uma equipe de primeira linha, profissionais que já trabalharam com os melhores nomes da nossa música!</p><br />
                    
                    <p><a href="https://instagram.com/danilosantanamusica?utm_medium=copy_link" target='_blank'>Danilo Santana - piano acústico, Rhodes e synths;</a><br />
                    <a href="https://instagram.com/conza01?utm_medium=copy_link" target='_blank'>Conrado Goys - guitarras e Violão;</a><br />
                    <a href="https://instagram.com/tutoferraz?utm_medium=copy_link " target='_blank'>Tuto Ferraz - bateria e percussão;</a><br />
                    <a href="https://instagram.com/robinhotavaresbass?utm_medium=copy_link" target='_blank'>Robinho Tavares - baixo;</a><br />
                    <a href="https://instagram.com/souluisa?utm_medium=copy_link" target='_blank'>Luísa Mariano - vocais de apoio;</a><br />
                    <a href="https://instagram.com/luispauloserafim?utm_medium=copy_link" target='_blank'>Luís Paulo Serafim - mixagem;</a></p><br />

                    <p>O início dos lançamentos está previsto para o primeiro semestre de 2022.</p><br /><br />

                    <h1>CONTATO</h1>

                    <div className='body-input' id = "2">

                        <form onSubmit={handleEnviarEmail}>

                            <div className='align-input' id = 'contato'>

                                <input type="text"  placeholder='NOME' name="name" className='input-nome'/>

                                <span></span>

                                <input type="text" placeholder='E-MAIL' name="email" className='input-email'/>

                                <input type="text" placeholder='MENSAGEM' name="message" className='input-mensagem'/>
                            
                                <button type='submit' value="Enviar mensagem" className='input-button'>ENVIAR</button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>
      
    );
}

export default Body