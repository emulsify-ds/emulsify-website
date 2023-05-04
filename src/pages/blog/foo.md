# Foo

Adding a JavaScript library to an Emulsify component may seem daunting if you're new to the process, but it's not as complicated as it may seem. In this guide, we'll show you how to add a JavaScript library to an Emulsify component step-by-step, using the Swiper library as an example.

{% callout %}Tags are composable!{% /callout %}

## Step 1: Find the Library You Want to Use

Before you can add a library to your Emulsify component, you need to know which library you want to use. For this example, we'll use the Swiper library for a carousel component.

## Step 2: Install the Library

Once you've identified the library you want to use, you'll need to install it using npm. From your theme directory, run the following command:

```
npm install swiper --save
```

The `--save` flag will add the library to your `package.json file`, so it isn't just installed on your local setup.

## Step 3: Create a New JavaScript File

Next, move into your component folder and create a new JavaScript file. For our example, we'll call the file `carousel.js`. This is where you will include the library and use it on your component.

## Step 4: Include the Custom JS File in Your Stories File

Include the custom JS file you just created in your `carousel.stories.js` file using the following import statement:

```
import './carousel';
```

## Step 5: Import the JS Library

Next, you need to import the JS library you just installed into `carousel.stories.js`. In our example, we'll import the Swiper library files using the following statement:

```
// Import Swiper library files
import 'swiper/swiper-bundle.min';
```

If there are any CSS files from the library that you'll need, you can also add them to the `carousel.stories.js` file using the following import statement:

```
// import Swiper styles
import 'swiper/swiper-bundle.min.css';
```

Hint: If you start typing the path, your IDE (PHP Storm, VS Code) may help you fill in your path so you can ensure it is correct. It will also prompt you to leave off the `.js` file extension.

## Step 6: Import the Function You Need

In your custom JS file—`carousel.js` in our example—import the function you'll be needing from the library at the top of the file using the following statement:

```
import Swiper from 'swiper/swiper-bundle';
```

## Step 7: Write the Drupal Behavior Function

If you're using this with a Drupal site, you can write the Drupal behavior function in `carousel.js` like so:

```
Drupal.behaviors.carousel = {
  attach(context) {
    // Locate the elements to apply swiper to.
    const carousel = context.getElementsByClassName('swiper');

    if (carousel) {
      // Apply swiper function.
      const swiper = new Swiper('.swiper', {
        // carousel settings go here
      });
      swiper.init();
    }
  },
};
```

This will locate the elements to apply swiper to and apply the swiper function.

## Step 8: Add the Libraries to Your Drupal  Files

When you're ready to use the component in Drupal, you'll need to add the library to your `yourtheme.libraries.yml` file. In our example, we're separating out the swiper library and the carousel custom JS file (but you could also probably put them together into one "library"):

```
carousel:
  js:
    path/to/carousel.js: {}
  dependencies:
    - core/drupal

swiper:
  css:
    theme:
      node_modules/swiper/swiper-bundle.min.css: {}
js:
  node_modules/swiper/swiper-bundle.min.js: {}
  dependencies:
    - core/drupal
```

And include the libraries in your Drupal template file (i.e., `paragraph--carousel.html.twig`):

```
{{ attach_library('yourtheme/swiper') }}
{{ attach_library('yourtheme/carousel') }}
```

## Conclusion and reference files

Now you know how to add a JavaScript library to an Emulsify component.

Here are the files used in this article for your reference.

<script src="https://gist.github.com/amazingrando/df9c1ee90c450e6324d2c84f140df6cc.js"></script>
