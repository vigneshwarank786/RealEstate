import React, { Fragment } from 'react';

import Search from './components/Layout/Search';
import MetaData from './components/Layout/MetaData';

const Home = () => {
  return (
    <Fragment>
		<MetaData title={'Buy Best Place'}/>
 <section className="home-slider">
      <div className="slider-item" style={{backgroundImage:'url(images/HomePage.jpg)'}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
            {/* <div className="col-md-6 text p-4 ftco-animate">
              <h1 className="mb-3">Florida 5, Pinecrest, FL</h1>
              <span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <span className="price">$28,000</span>
              <Link to={'/'} className="btn-custom p-3 px-4 bg-primary">View Details <span className="icon-plus ml-1"></span></Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="slider-item" style={{backgroundImage:'url(images/bg_2.jpg)'}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
            {/* <div className="col-md-6 text p-4 ftco-animate">
              <h1 className="mb-3">3015 Grand Avenue, CocoWalk</h1>
              <span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <span className="price">$28,000</span>
              <Link to={'/'} className="btn-custom p-3 px-4 bg-primary">View Details <span className="icon-plus ml-1"></span></Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
<Search/> 
    {/* <section className="ftco-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-pin"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">Find Places Anywhere In The World</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-detective"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">We Have Agents With Experience</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex align-sel Searchf-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-house"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">Buy &amp; Rent Modern Properties</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-purse"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">Making Money</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>


    <section className="ftco-section ftco-properties">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Recent Posts</span>
            <h2 className="mb-4">Recent Properties</h2>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-12">
    				<div className="properties-slider owl-carousel ftco-animate">
    					<div className="item">
		    				<div className="properties">
		    					<Link href="#" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: "url(images/properties-1.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link href="#">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link href="#" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: "url(images/properties-2.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<div className="d-flex">
		    							<span className="status rent">Rent</span>
		    							<div className="one">
				    						<h3><Link href="#">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$2,000 <small>/ month</small></span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link href="#" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: "url(images/properties-3.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link href="#">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link href="#" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-4.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link href="#">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link href="#" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: "url(images/properties-5.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status rent">Rent</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link href="#">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$900 <small>/ month</small></span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link href="#" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/properties-6.jpg)'}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link href="#">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section> */}
    </Fragment>
  )
}

export default Home