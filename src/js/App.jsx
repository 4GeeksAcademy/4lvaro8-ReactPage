import React from 'react';
import NavBar from './component/Navbar';
import Jumbotron from './component/Jumbotron';
import Card from './component/Card';
import Footer from './component/Footer';





const App = () => {
    return (
        <div>
            <NavBar title={"Start Bootstrap"} />
            <div className='container w-75'>
                <Jumbotron
                    h1={"A Warm Welcome!"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas temporibus omnis libero autem! Deserunt accusamus earum commodi blanditiis similique ea eos consequatur necessitatibus. Ducimus corporis illum eveniet qui eos."}
                    button={"Call to action!"}
                />
                <div className="row">

                    <div className="col-lg-3 col-xs-12">
                        <Card img={"https://www.latercera.com/resizer/sDZWiBfVXmWWAXUy2SQ9l2ax12w=/arc-anglerfish-arc2-prod-copesa/public/AWZCXRQ2GNBCNEEMYD6CBRQYX4.jpg"} cardTitle={"Card title"} textButton={"Find Out More"} cardDescription={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis"} />
                    </div>

                    <div className="col-lg-3 col-xs-12">
                        <Card img={"https://www.latercera.com/resizer/sDZWiBfVXmWWAXUy2SQ9l2ax12w=/arc-anglerfish-arc2-prod-copesa/public/AWZCXRQ2GNBCNEEMYD6CBRQYX4.jpg"} cardTitle={"Card title"} textButton={"Find Out More"} cardDescription={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis"} />
                    </div>

                    <div className="col-lg-3 col-xs-12">
                        <Card img={"https://www.latercera.com/resizer/sDZWiBfVXmWWAXUy2SQ9l2ax12w=/arc-anglerfish-arc2-prod-copesa/public/AWZCXRQ2GNBCNEEMYD6CBRQYX4.jpg"} cardTitle={"Card title"} textButton={"Find Out More"} cardDescription={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis"} />
                    </div>

                    <div className="col-lg-3 col-xs-12">
                        <Card img={"https://www.latercera.com/resizer/sDZWiBfVXmWWAXUy2SQ9l2ax12w=/arc-anglerfish-arc2-prod-copesa/public/AWZCXRQ2GNBCNEEMYD6CBRQYX4.jpg"} cardTitle={"Card title"} textButton={"Find Out More"} cardDescription={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis"} />
                    </div>

                </div>
            </div>
            <Footer
                text={"Copyright @ your website 2019"}
            />
        </div>
    );
}


export default App;