# Storyteller Task

I opted to use NextJS for this simply for the ease of setting everything up, and because it future-proofs everything.

I considered a few UI libraries such as MUI, Antd or Chakra, but since I wanted to implement the styles correctly without fighting with an existing library's styles I decided to make all the components and styles myself.

I initially setup the project with Tailwind but ended up mostly using Sass for styling.

### What could be improved

* The sort indicators on the table could use some work. They're not aligned correctly and the images are blurry
* The table header scrolls up after you've finished scrolling the table
* Some of the highlighting for focused inputs could look a bit nicer
* It would've been nice to have an `<IconButton />` component or something so that I could avoid putting `<Image />` components inside `<Button>`s
* I'm not certain that all needed accessibility features are there. I used appropriate html tags wherever possible and `aria-` props wherever else I thought was necessary.
