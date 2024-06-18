import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ip-email',
  styleUrl: 'ip-email.scss',
  shadow: true, 
})
export class PasswordToggle {
    @Element() el: HTMLElement;
    @Prop()errorMessage: string;
    @Prop() invalid: boolean = false;
    @Prop() inputLabel: string = 'Email';

  render() {
    return (
      <div class="input">
        <label htmlFor="email" class="input__label">
           {this.inputLabel}
            <span aria-hidden="true" class="required-asterisk">*</span>
        </label>
            <input
                type="email"
                id="email"
                class="input__input"
                autocomplete="email"
                required
                placeholder={`Type your ${this.inputLabel} here...`}
            />
            {this.invalid && 
                    <p class="input__error">{this.errorMessage}</p>
            }

        </div>
    )};
  
}
