import React, { FC } from 'react'

const html = `<div id="aoform-8cb720cf-340b-4191-8e54-6891b9f638fb" style="visibility: visible">
  <form class="ao-form" id="ao-form-8cb720cf-340b-4191-8e54-6891b9f638fb" action="#" data-validate-blur="" >
    <div class="ao-row" id="row-r1594328490896">
      <div class="ao-column ao-column-12 tablet-ao-column-1 mobile-ao-column-1" id="column-c1594328479534" >
        <div class="ao-column-inner">
          <div style="padding-bottom: 0px" class="ao-block-wrapper">
            <div id="block-b1594328211647" class="ao-input-block ao-left">
              <label for="b1594328211647" class="ao-form-label">Enter your email<span class="ao-required">*</span></label>
              <input id="b1594328211647" name="Email" type="text" placeholder=" " value="" data-type="text" tabindex="1" class="ao-form-field ao-left" data-error-message="required|Required field::email|Invalid email address" data-validator="required|email" />
              <span class="ao-form-error-message">&nbsp;</span>
            </div>
          </div>
          <div style="" class="ao-block-wrapper">
            <div id="block-b1594328322862" class="ao-submit-block">
              <div style="text-align: center">
                <button type="submit" class="ao-form-submit" style=" background-color: rgb(26, 150, 202); background-image: none; background-repeat: no-repeat; background-size: auto; background-position: center center; color: rgb(255, 255, 255); border-radius: 2px; display: inline-block; text-decoration: none; font-size: 13pt; font-weight: bold; font-family: Arial, Helvetica, sans-serif; font-style: normal; border-style: solid; border-color: transparent; border-width: 0px; padding: 10px; " tabindex="2" onmouseover="this.style.backgroundColor = '#177da8'; this.style.color = '#ffffff'; this.style.borderColor = 'transparent';" onmouseout="this.style.backgroundColor = 'rgb(26, 150, 202)'; this.style.color = '#ffffff'; this.style.borderColor = 'transparent';" >Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
`

export const ActonForm: FC = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)
