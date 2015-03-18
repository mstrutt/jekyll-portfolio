---
layout: post
title: Layout in CSS
date: 2012-12-07 13:57:10
categories:
- css
- layout
- box model
- floats
- inline-block
- positioning
---

Achieving the layout you desire is probably the starting point of any webpage you might be working on While it can seem like an easy task, there are often a lot of different options available when it comes to how to achieve this. I find when looking at how some sites have been coded, there are quite a few common pitfalls made when it comes to basic CSS layout.

## Vertical layout

Vertical layout is for all intents and purposes easy. You want a new section, you add a new element, the new element stacks below the old one, the order you place things in in your HTML is the order they will appear in vertically (from top to bottom) on the website.

## Horizontal layout

Horizontal layout is a completely different kettle of fish. Strictly speaking there is no pure way of placing a group of elements side by side. Of course there are ways, but none are really perfect, all of them can feel a tad hacky at times. The main methods of I will be going through in this section will be `float`, `inline-block` and use of `position: relative;` and `position: absolute`. I would like to note at this point that the use of `table`, would also be able to achieve such horizontal layouts, but it is an outdated method and considered very bad practice.

## Floats

`float` have always been available to use for displaying elements side by side, but this wasn't the intended purpose of `float`, and so there are some unusual side effects. `float` was designed to allow newspaper-like layout of text around image. If you `float`ed an image `left` or `right` at the start of a block of text, then the text following it would flow around it, staying beside the image until that space was full, and then wrapping beneath it.

To use `float`s for layout you simply decide which way you want to them to `float`, `left` or `right`, and then each `float`ed element will appear beside the previous one until there is no more space on that line. If you are attempting to create a grid using `float`s then you will need to be careful about how tall the elements are. If they are the same height, then there shouldn't be any problems. If, however, the elements are different heights then be aware that, without `clear`ing, the first element that doesn't fit on a line will fall back to the highest point it can, which could well be the few px sticking out below from a slightly taller element in the previous row.

The main problem with `float`ed elements is that they don't "have layout". What I mean by this is, although other elements will flow around it, and it will change their positioning, a `float`ed element on it's own won't have a height that it takes up on the page. In a way, it's taken out of the flow of the DOM. If there was an element, with only one child element, and that child element was `float`ed, then the parent element would have a computed `height` of 0 (assuming it hasn't got another number specified in the CSS).

### Clearing Floats

Categorically, all `float`s need to be cleared. Clearing floats is what gives them layout again, and stops unwanted behavior from other elements flowing around them. Clearing floats can be quite simple, all you need is some kind of element following your last floated element, with the CSS property of `clear: both;` (`left` and `right` are also options, but `both` is a safer bet). While this is great if there is already an element about to do this, usually that isn't the case, it would be bad practice to add an element to the page just for the purposes of clearing a `float`, and so a couple of CSS only method have come about.

One is to simply use `overflow: hidden;` on the parent element, this forces the parent to respect the layout of the `float`ed children. While this is clean and simple, it does have drawbacks, for starters it's limiting, and often it can cause more problems with the layout. I've seen `overflow: hidden;` applied to the body element before when `float`s were used for the main layout, and this stopped the user from being able to scroll on the page and see all of the content. It can also cut off visual effect such as `box-shadow` which rely on flowing outside of the usual space of an element.

### Clearfix

There is a newer alternative to the clearing problem, the clearfix. To explain entirely how it works, you'll need a basic understanding of the `:before` and `:after` pseudo-elements and how you can use them with CSS-generated content. It uses the after element to place a hidden pseudo-element at the end of the element to which the class is applied. This hidden pseudo-element has the `clear:both;` CSS applied to is and so does the clearing without any extra elements being added to the page. In a nutshell, adding this class to the parent of elements you've floated will sort out the clearing for you. While this is a basic explanation, the implementation in terms of CSS is changing all the time as people come up with newer better ways to do things, the principal is the same, so just [Google it](http://lmgtfy.com/?q=clearfix) when you need it for a project

### Floating pitfalls

When it comes to `float`ing, it can be a bit of a mine-field sometimes, and it's not hard to get things wrong, the whole thing's a bit of a hack from the beginning. But one fundamental I see people messing up again and again is this: Only `float` siblings, simple as that. For elements to `float` properly together they need to be direct siblings in the dom, it's no good `float`ing the child of one element next to the child of another element, it's only going to cause problems.

The other thing is what to `clear`. The answer is always the direct parent. If you `float` an element, apply your clearfix to it's direct parent. It's doing no good on the one above that, if you inspect element on a webpage, nothing should have a `height` less than the `height` of it's children.

## Inline-block

Now if all that business with `float`s seems like too much of a hack (which, while it depends on the situation, I'm of the opinion that it does) there is a newer alternative: `display: inline-block`. [I've explained the basics of how inline-block works previously](/blog/2012/10/the-box-model) so I won't go into vast detail here, but what it does is allows multiple elements to display on the same line, have layout, and not break the flow of the page. What it also has is a massive downfall, which unfortunately (and it's after much research that I discover this) is by design.

Due to the nature of the `inline` `display` type, from which `inline-block` takes a lot of it's properties, whitespace before and after the element is counted. This means that if there is a row of `inline-block` elements, a small space will appear between them if there is any indentation or spacing around them in the markup. This will cause any pixel-perfect layouts using `inline-block` for a grid or similar to break. These can be tackled used a negative `margin` between elements, but this really is a hack, and the size of the space will vary with the `font-size` of the parent element.

### HTML5 to the rescue

Forgive me for [dropping a buzz-word](/blog/2012/5/is-that-html5), but this time I mean it. I think this is possibly my favourite of the new bits that HTML5 has brought. When using a list, under the HTML5 spec, the closing `</li>` tag can be omitted as the only thing that can be inside a `<ul>` or `<ol>` is an `<li>`. When the browser comes to the next `<li>` tag it simply adds in the closing `<li>` from the previous list item. This means that it adds it directly before the element, with no whitespace. This mean that when using an unordered list for, say, a product grind, with the closing tags omitted, the elements can be set, pixel-perfect into nice `width`s (eg: `25%` for 4-across) and nothing will break.

## Position relative and absolute

Generally speaking, if you're using `position: relative;` for layout, then you're doing something wrong. To my mind it should only be used it you just need to nudge something into place, but like the position it currently holds in the DOM; and even then I'd still be looking into using `margin`s (negative one side, positive the other) as a first port of call. For me, `position: relative;` is only there for use with `position: absolute`. You make the parent `relative` (with no offset) so that when you're using `position: absolute; top: 0;` you can reset the starting point the the bounds of the element you want (usually some sort of wrapping div).

`position: absolute;` takes an element out of the flow of the DOM, and places it wherever it's offset specifies. The offset is made up of the `top`, `right`, `bottom` and `left` properties, though often, at least two of these are left as `auto`. These values are offset against the closest, non-statically `position`ed parent element. Or to phrase it differently, the closest parent that is `position: relative;` or also `position: absolute`. This positioning gives you complete, or `absolute`, control over where an element is positioned on the page, regardless of the other elements around it, which might be dynamically changed. It can be very useful for things like top nav elements which appear above previous elements in the dom, or for overlays, as these shouldn't disrupt the rest of the page layout

## So there it is, all laid out

That's all the important bases covered with regards to layout in CSS. I find that once the basics of knowing what methods are available, and knowing what situation to use each one in, everything seem to just fall into place.