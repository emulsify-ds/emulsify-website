import { useEffect } from 'react';

const ActOn = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.id = "aoform-script-8cb720cf-340b-4191-8e54-6891b9f638fb:d-0001";
    script.type = "text/javascript"
    script.innerHTML = '!function(o,t,e,a){o._aoForms=o._aoForms||[],o._aoForms.push(a);var n=function(){var o=t.createElement(e);o.src=("https:"==t.location.protocol?"https://":"http://")+"info.fourkitchens.com/acton/content/form_embed.js",o.async=!0;for(var a=t.getElementsByTagName(e)[0],n=a.parentNode,c=document.getElementsByTagName("script"),r=!1,s=0;s<c.length;s++){if(c[s].getAttribute("src")==o.getAttribute("src"))r=!0;}r?typeof(_aoFormLoader)!="undefined"?_aoFormLoader.load({id:"8cb720cf-340b-4191-8e54-6891b9f638fb:d-0001",accountId:"42934",domain:"info.fourkitchens.com",isTemp:false,noStyle:false,prefill:false}):"":n.insertBefore(o,a)};window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1),n()}(window,document,"script",{id:"8cb720cf-340b-4191-8e54-6891b9f638fb",accountId:"42934",domain:"info.fourkitchens.com",isTemp:false,noStyle:false,prefill:false});';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  });
};

export default ActOn;
