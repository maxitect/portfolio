# Max's Flexy Flex Webbox
I'm Max and this is my personal website, dubbed Max's Flexy Flex Webbox. This website can adapt dynamically using CSS Flexbox.

## Credits

### Typeface
For both project I am using the a typeface created by Collletttivo called Necto Mono, webfont can be downloaded from their website at this address: https://www.collletttivo.it/typefaces/necto-mono

> [!NOTE]
> This Font Software is licensed under the SIL Open Font License, more information about this type of license found here: https://scripts.sil.org/OFL


## Website features

### Flexbox
The main feature of this website that I wanted to explore was using CSS flexbox to organise my website content dynamically, which can adjust to the screen the user is viewing the website from.

In order to achieve this, I followed the documentation from W3 school found here: https://www.w3schools.com/css/css3_flexbox.asp

Some properties that I found helpful:
- justify-content: This CSS property aligns items horizontally.
- align-items: This CSS property aligns items vertically.

These properties accept the following values:
- flex-start: Items align to the left side of the container.
- flex-end: Items align to the right side of the container.
- center: Items align at the center of the container.
- space-between: Items display with equal spacing between them.
- space-around: Items display with equal spacing around them.

> [!TIP]
> A fun resource to learn more about flexbox is Flexbox Froggy, found here: https://flexboxfroggy.com/

### SVGs
During this project I learned how to use SVGs to insert vector images/icons into your webpage using text only. 

The advantage of this is that you can make your icons in illustrator, export as SVGs and then open with the text editor and insert it into your html as an <svg> element without needing to have seperate image files in your github repo. As it is a vector graphic it is much crisper than a PNG. Keeping it in this format means that you can control things like colour, size, stroke etc directly from your css styles file and you can even animate these when a user hovers using css transition.

I used this for my external link logos so that when the user hovers over one to click, it can change colour just like links. But I also used it to animate the logo of my webpage, using transitions.

> [!CAUTION]
> SVGs written directly into HTML can present an accessibility issue that impacts users of assistive technology (AT). In order for your website to be accessible to all, all graphics need a description tag attribute to replace it if it is too distracting or not easily understood. To enable this, you need to add an additional <title> and/or <text> element nested inside the <svg> element.