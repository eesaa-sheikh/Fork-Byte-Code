import noodleGirl from './imageJar/NoodleSoup.png'
import chef from './imageJar/chef.png'
import noodleFood from './imageJar/food.png'

const Home = () => {
    return ( 
        <>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
      <img src={noodleGirl} alt="Eating Noodles"/>
    </div>

    <div class="item">
      <img src={noodleFood} alt="Chicago"/>
    </div>

    <div class="item">
      <img src={chef} alt="New York"/>
    </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>    
        </>
     );
}
 
export default Home;