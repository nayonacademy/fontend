import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import Category from "./category";
function CategoryIndex(props){
        return(
            <>
            <Header />
            <div className="breadcrumbs">
            <h1 className="breakcrumbs-heading">
                <a href="../../conference/dashboard.html" className="link">
                Settings
                </a>
            </h1>
            <img
                src="../../images/chevron-right.svg"
                width={18}
                
                className="image-2"
            />
            <h1 className="breakcrumbs-heading current">Category</h1>
            </div>
            <Category />
            <Footer />
            </>
        )
}
export default CategoryIndex;