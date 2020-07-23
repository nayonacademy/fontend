import React, {Component} from 'react';
import { category_all } from '../../components/repository';
import Header from "../headerSimple";
import Footer from "../footer";
import Layout from "../layouts";

class CategoryView extends Component {
    state = {
        data: []
      }
      componentDidMount() {
        category_all()
          .then(data => {
            this.setState({ data });
          })
      }
      
    render(){
    return(
        <Layout>
        <Header />
        <div className="breadcrumbs">
        <h1 className="breakcrumbs-heading">
            <a href="../../conference/dashboard.html" className="link">Settings</a>
        </h1>
        <h1 className="breakcrumbs-heading current">Category</h1>
        </div>
        <div className="body-wrapper-cat">
        <div className="b2b-container-category">
            <div className="card">
            <div className="w-form">
                <div className="category-container w-row">
                    <div className="w-col w-col-3">
                    { this.state.data.map(data =>
      
                            <label className="category-select w-radio">
                            <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button-8 w-radio-input" />
                            <input
                            type="radio"
                            data-name="category"
                            id="Animals and Pets"
                            name="category"
                            defaultValue="Animals and Pets"
                            style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                            />
                            <span className="category-select-radio w-form-label">
                            {data.name}
                            </span>
                        </label>
                    )}  
                    </div>
                    <div className="w-col w-col-3">


                    </div>
                    <div className="w-col w-col-3">

                    </div>
                    <div className="w-col w-col-3">


                    </div>
                </div>
                <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer />
        </Layout>
    )
}
}
export default CategoryView;