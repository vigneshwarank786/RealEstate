import React, { Fragment } from 'react'

const Search = () => {
  return (
<Fragment>
<section className="ftco-search">
    	<div className="container">
	    	<div className="row">
					<div className="col-md-12 search-wrap">
						<h2 className="heading h5 d-flex align-items-center pr-4"><span className="ion-ios-search mr-3"></span> Search Property</h2>
						<form action="#" className="search-property">
	        		<div className="row">
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Keyword</label>
	          				<div className="form-field">
	          					<div className="icon"><span className="icon-pencil"></span></div>
			                <input type="text" className="form-control" placeholder="Keyword" />
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Location</label>
	          				<div className="form-field">
	          					<div className="icon"><span className="icon-pencil"></span></div>
			                <input type="text" className="form-control" placeholder="City/Locality Name" />
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Property Type</label>
	        					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">Type</option>
	                        <option value="">Commercial</option>
	                        <option value="">- Office</option>
	                        <option value="">Residential</option>
	                        <option value="">Villa</option>
	                        <option value="">Condominium</option>
	                        <option value="">Apartment</option>
	                      </select>
	                    </div>
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Property Status</label>
	        					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">Type</option>
	                        <option value="">Rent</option>
	                        <option value="">Sale</option>
	                      </select>
	                    </div>
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Agents</label>
	        					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">Any</option>
	                        <option value="">Jonh Doe</option>
	                        <option value="">Doe Mags</option>
	                        <option value="">Kenny Scott</option>
	                        <option value="">Emily Storm</option>
	                      </select>
	                    </div>
			              </div>
		              </div>
	        			</div>
	        		</div>

	        		<div className="row">
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Min Beds</label>
	        					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">1</option>
	                        <option value="">2</option>
	                        <option value="">3</option>
	                        <option value="">4</option>
	                        <option value="">5</option>
	                      </select>
	                    </div>
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Min Bathroom</label>
	        					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">1</option>
	                        <option value="">2</option>
	                        <option value="">3</option>
	                        <option value="">4</option>
	                        <option value="">5</option>
	                      </select>
	                    </div>
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Min Price</label>
	        					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">Min Price</option>
	                        <option value="">1,000aed</option>
	                        <option value="">5,000aed</option>
	                        <option value="">10,000aed</option>
	                        <option value="">50,000aed</option>
	                        <option value="">100,000aed</option>
	                        <option value="">200,000aed</option>
	                        <option value="">300,000aed</option>
	                        <option value="">400,000aed</option>
	                        <option value="">500,000aed</option>
	                        <option value="">600,000aed</option>
	                        <option value="">700,000aed</option>
	                        <option value="">800,000aed</option>
	                        <option value="">900,000aed</option>
	                        <option value="">1,000,000aed</option>
	                      </select>
	                    </div>
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Max Price</label>
	        					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">Max Price</option>
	                        <option value="">5,000aed</option>
	                        <option value="">10,000aed</option>
	                        <option value="">50,000aed</option>
	                        <option value="">100,000aed</option>
	                        <option value="">200,000aed</option>
	                        <option value="">300,000aed</option>
	                        <option value="">400,000aed</option>
	                        <option value="">500,000aed</option>
	                        <option value="">600,000aed</option>
	                        <option value="">700,000aed</option>
	                        <option value="">800,000aed</option>
	                        <option value="">900,000aed</option>
	                        <option value="">1,000,000aed</option>
	                        <option value="">2,000,000aed</option>
	                      </select>
	                    </div>
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Min Area <span>(sq ft)</span></label>
	          				<div className="form-field">
	          					<div className="icon"><span className="icon-pencil"></span></div>
			                <input type="text" className="form-control" placeholder="Min Area" />
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Max Area <span>(sq ft)</span></label>
	          				<div className="form-field">
	          					<div className="icon"><span className="icon-pencil"></span></div>
			                <input type="text" className="form-control" placeholder="Max Area" />
			              </div>
		              </div>
	        			</div>
	        			<div className="col-md align-self-end">
	        				<div className="form-group">
	        					<div className="form-field">
			                <input type="submit" value="Search" className="form-control btn btn-primary" />
			              </div>
		              </div>
	        			</div>
	        		</div>
	        	</form>
					</div>
	    	</div>
	    </div>
    </section>
</Fragment>  
)
}

export default Search