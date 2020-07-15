import React, { Component } from 'react'

import styles from './signup.module.css'

export default class extends Component {
  actionSignup = null
  script = null

  componentDidMount() {
    this.script = document.createElement('script')
    this.script.id = 'aoform-script-8cb720cf-340b-4191-8e54-6891b9f638fb:d-0001'
    this.script.type = 'text/javascript'
    this.script.async = true
    this.script.innerHTML =
      '!function(o,t,e,a){o._aoForms=o._aoForms||[],o._aoForms.push(a);var n=function(){var o=t.createElement(e);o.src=("https:"==t.location.protocol?"https://":"http://")+"info.fourkitchens.com/acton/content/form_embed.js",o.async=!0;for(var a=t.getElementsByTagName(e)[0],n=a.parentNode,c=document.getElementsByTagName("script"),r=!1,s=0;s<c.length;s++){if(c[s].getAttribute("src")==o.getAttribute("src"))r=!0;}r?typeof(_aoFormLoader)!="undefined"?_aoFormLoader.load({id:"8cb720cf-340b-4191-8e54-6891b9f638fb:d-0001",accountId:"42934",domain:"info.fourkitchens.com",isTemp:false,noStyle:false,prefill:false}):"":n.insertBefore(o,a)};window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1),n()}(window,document,"script",{id:"8cb720cf-340b-4191-8e54-6891b9f638fb",accountId:"42934",domain:"info.fourkitchens.com",isTemp:false,noStyle:false,prefill:false});'

    this.actonSignup = document.getElementById('acton-signup')
    this.actonSignup.appendChild(this.script)
  }

  componentWillUnmount() {
    if (this.actionSignup && this.script) {
      this.actionSignup.removeChild(this.script)
    }
  }

  render() {
    return (
      <div id="acton-signup" className={styles.signup}>
        <h2 className={styles.signupHeading}>
          Stay up to date with the latest news from Emulsify
        </h2>
      </div>
    )
  }
}
