import one from "../asset/images/one.jpg"
import two from "../asset/images/three.jpg"
import three from "../asset/images/two.jpg"

function Perfumebody()
{
  return (        <div className="products">
    
    <div className="box">
                        <img src={two} alt="scent"/>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
    </div>
       
    <div class="box">
        <img src={one} alt="villain" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
    </div>
    <div class="box">
        <img src={three} alt="Designs Club" />
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
    </div>

    
    
</div>)
}
export default Perfumebody