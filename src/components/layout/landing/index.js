import React, {Component}  from 'react';
import { connect } from 'react-redux';
import history from 'components/history';
import InfoCard from 'components/cards/infoCard'

class Landing extends Component {

    componentDidUpdate () {
        if (this.props.isAuthenticated) {
            history.push ('/home');
        }
    }

    render () {
        return (
            <main className="main" data-test='landing'>
                <section className="container">

                    <h2 className="text-center" data-test='landing-header'><span className="heading heading-dark">How It Works</span></h2>

                    <InfoCard   header="1. Search Our tutors" 
                                img_class="info-card__back-img"
                                desc="Blah Blah Blah."
                                desc_header="Blah" 
                                desc_items={['Blah', 'Blah Blah', 'Blah Blah Blah', 'Blah Blah Blah Blah.']} >
                    </InfoCard>

                    <InfoCard   side="right"
                                header="2. Select a Tutor" 
                                img_class="info-card__back-img"
                                desc="Blah Blah Blah."
                                desc_header="Blah" 
                                desc_items={['Blah', 'Blah Blah', 'Blah Blah Blah', 'Blah Blah Blah Blah.']} >
                    </InfoCard>

                    <InfoCard   header="3. Meet and Learn" 
                                img_class="info-card__back-img"
                                desc="Blah Blah Blah."
                                desc_header="Blah" 
                                desc_items={['Blah', 'Blah Blah', 'Blah Blah Blah', 'Blah Blah Blah Blah.']} >
                    </InfoCard>

                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);




// const Landing = (props) => {

//     return (
//         <main className="main" data-test='landing'>
//             <section className="container">

//                 <h2 className="text-center" data-test='landing-header'><span className="heading heading-dark">How It Works</span></h2>

//                 <InfoCard   header="1. Search Our tutors" 
//                             img_class="info-card__back-img"
//                             desc="Blah Blah Blah."
//                             desc_header="Blah" 
//                             desc_items={['Blah', 'Blah Blah', 'Blah Blah Blah', 'Blah Blah Blah Blah.']} >
//                 </InfoCard>

//                 <InfoCard   side="right"
//                             header="2. Select a Tutor" 
//                             img_class="info-card__back-img"
//                             desc="Blah Blah Blah."
//                             desc_header="Blah" 
//                             desc_items={['Blah', 'Blah Blah', 'Blah Blah Blah', 'Blah Blah Blah Blah.']} >
//                 </InfoCard>

//                 <InfoCard   header="3. Meet and Learn" 
//                             img_class="info-card__back-img"
//                             desc="Blah Blah Blah."
//                             desc_header="Blah" 
//                             desc_items={['Blah', 'Blah Blah', 'Blah Blah Blah', 'Blah Blah Blah Blah.']} >
//                 </InfoCard>

//             </section>
//         </main>
//     )
// }

// export default Landing;
