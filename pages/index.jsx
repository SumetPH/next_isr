import React, { Component } from 'react'
import Navbar from '../components/navbar/Navbar'
import classnames from 'classnames'

class Index extends Component {
   state = {
      animate: true
   }

   componentDidMount = () => {
      this.interval = setInterval(() => {
         this.setState({ animate: !this.state.animate })
      }, 2000)
   }

   componentWillUnmount = () => {
      clearInterval(this.interval)
   }

   render() {
      return (
         <div>
            <div className="hero is-dark is-fullheight bg">
               <div className="hero-head" style={{ margin: '2rem' }}>
                  <Navbar />
               </div>
               <div className="hero-body">
                  <div
                     className={classnames({
                        'container has-text-centered': true,
                        'animated pulse': this.state.animate
                     })}>
                     <p className="title is-3">
                        การพัฒนาเว็บไซต์ โปรแกรมวิชา ระบบสารสนเทศทางคอมพิวเตอร์
                        <br />
                        พัฒนาซอฟต์แวร์ (เทียบโอน)
                     </p>
                     <p className="title is-4">
                        ด้วย จาวาสคริป เฟรมเวิร์ค (Javascript Framework)
                     </p>
                     <p className="subtitle is-5 animated zoomIn delay-1s">
                        Information System.
                     </p>
                  </div>
               </div>
               <div className="hero-foot">
                  <h3
                     className="animated fadeInLeft delay-1s slow"
                     style={{ margin: '1rem' }}>
                     Power by ISr4B
                  </h3>
               </div>
            </div>
            {/* preload */}
            <div style={{ display: 'none' }}>
               <img src="/static/icons/isr4b.png" alt="" />
               <img src="/static/icons/isr4b-black.png" alt="" />
               <img src="/static/icons/login.png" alt="" />
            </div>
            {/* --- */}
         </div>
      )
   }
}
export default Index
