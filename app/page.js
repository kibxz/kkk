// fsdfdsfsfdstesttest
import Navbar from '../app/component/nav';
import Footer from '../app/component/footer';
export default function Home() {
  return (
   <>
      <Navbar />

      <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/1.png" class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src="/img/2.png" class="d-block w-100" alt="..."></img>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
      <br></br>
      <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/11.jpg" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Furina</h5>
                        <p class="card-text">ตัวละครระดับ 5 ดาว</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/11.jpg" class="custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Furina</h5>
                        <p class="card-text">ตัวละครระดับ 5 ดาว</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/11.jpg" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Furina</h5>
                        <p class="card-text">ตัวละครระดับ 5 ดาว</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
   </>
  );
}
