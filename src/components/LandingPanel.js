import React, { Component } from 'react';
import MidSection from './MidSection';
import ContactSection from './ContactSection';
import ServiceSection from './ServiceSection';
import DidYouKnowSection from './DidYouKnowSection';
import PatronizeUsSection from './PatronizeUsSection';
import MediaSection from './MediaSection';
import CommonProblemsSection from './CommonProblemsSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

export default class LandingPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      client: {}
    }
  }
  
  componentDidMount() {
    this.setState({
      client: this.refs.land.clientHeight
    });
  }

  render() {
    const { tilesList, socialMedia } = this.props.iconDisplay;
    const text = (
      <div>
        "<span>eMaxie</span> is the <span>Number 1</span> IT centre in Ife"
      </div>
    );

    return (
      <section className="landing-panel" ref="land">
      	<MidSection />
        <ContactSection />
      	<ServiceSection tilesList={tilesList} iconDisplay={this.props.iconDisplay} />
        <AboutSection iconDisplay={this.props.iconDisplay} />
      	<DidYouKnowSection text={text} />
      	<PatronizeUsSection />
      	<MediaSection tilesList={socialMedia} iconDisplay={this.props.iconDisplay} />
      	<CommonProblemsSection />        
        <DidYouKnowSection />
        <Footer />
      </section>
    );
  }
}