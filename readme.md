
# Installation:

## Step 1:

Install the ip-tooltip component as a dependency in the project:
<!-- TODO pending deployment on npm -->
```bash
npm install 
```

## Step 2:

Import module in script file: 

```bash
import '../node_modules/';
```

# Usage:

To use these components, we make us of tag: As input, we have the following options for each:
  
## Ip-email

  - **error-message** : The error message when the user enters a wrong username or email
  - **input-label** : The name of the input, it's default value is "Email".
  - **invalid** : It's a boolean Prop, you can attach it to your function, if invalid="true", the error-message is displayed.


## Ip-password

  - **error-message** : The error message when the user enters a wrong username or email.
  - **invalid** : It's a boolean Prop, you can attach it to your function, if invalid="true", the error-message is displayed.
  - **forgot-password-link** : your personal link for reinitialize password




*e.g:*

```html
    <form class="login-form">
      <ip-email
      class="form-group "
      error-message="The username entered is incorrect"
      invalid="true"
      input-label="User name"
    >
    </ip-email>
    <ip-password
    class="form-group "
    error-message="The password entered is incorrect"
    invalid="true"
    forgot-password-link="https://www.google.com"
    >
    </ip-password>
    <button class="btn" type="submit" >
      Login
    </button>

```

# Customization:

We have a set of predefined variable used to customisation the tooltip: 

- **--primary-color**
- **--secondary-color**

To update the values use the following:

```css
ip-email {
  --primary-color: #006342;
  --secondary-color: #000000;
}

ip-password{
  --primary-color: #006342;
  --secondary-color: #000000;
}
```