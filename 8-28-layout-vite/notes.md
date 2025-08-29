<!-- macro layout: define overall content flow and structure of the page
    how do these multiple articles fit together on a single page? where does navigation go?
micro layout: only cover small portion of screen, may be re-used multiple times in single page
    how does this icon and associated title sit next to each other? what about an image and its caption?
Grid or flexbox
    underlying principles of page composition can go a long way in interpreting lessons learn from online

Box Model
4 shelss that make up every box:
content (inside)
padding (next)
border (outside padding)
margin (outside everything)

CSS box-sizing proptery
    when specify size of box, CSS needs to know WHICH of the four aprts of box you are trying to specify size of
box-sizing: content-box;
    default style for box elemetns
    width and heigh properties determine size of conent
    overal dimensions = specified size + padding + border + margin
box-sizing: border-box;
    never default
    width and heigh determin content, padding, and border ALL TOGETHER
    overall dimensions = specified size + margin

Responsive Design
media queries
    allows us developers to ask basic qs about users' device information
    useful for theming: is user's device in light/dark mode?
    useful for responsive design: what is user's screen size right now?

flexible designs
    inherently work with many different screen sizes
    use rem and/or em instead of px - "hard" values based on device or container font size
    use % instead of px = "soft" values based on device or container size
    min-width, min-height, max-width, max-height - use "hard" values on min/max, "soft" on width/height
        means flexible containers with bounds
    flexbox, aka display: flex - king of all flexible containers

Flexbox
display: flex;
    turn it into parent/container box whose children will be automatically and flexibly laid out
very similar to auto-layout frame in figma
layout determined by parent container's size, as well as various CSS properties that can be set on parent container, and CSS properties that can be set on children elements

Flexbox properties: flex-direction
flex-direction: row/row-reverse/column/column-reverse
    flex-direction: row;
        lay out children elements in writing direction of page (english = left to right)
    flex-direction: column;
        will lay out children elements in flow of direction of page (top to bottom for most)
    reverses go the opposite way

Flexbox properties: flex-wrap
flex-wrap: wrap/nowrap;
    wraped onto newline or not
flex-wrap: wrap;
    default! will wrap children to new line if do not fit all within main axis of container
nowrap
    don't go to new line, will prioritize shrinking children if flex-shrink is set on them

Flexbox properties: flex-flow
flex-flow : <flex-direction> <flex-wrap>;
combines flex-direction and flex-wrap properties into one. Example:
flex-flow: row nowrap;
flex-flow: column;
flex-flow: column-reverse wrap;

Flexbox properties: justify-content
justify-content: normal/center/start/end/stretch(?)/space-between/space-around/space-evenly;
controls position of non-growing children along main axis of container

Flexbox properties: align-items
align-items: normal/center/start/end/baseline/stretch
controls position of all children along cross axis of the container

Flexbox child properties: flex-basis
flex-bases: <size>;
determines starting size (before shrinking or growing) of element in main-axis direction
MUST have units (rem, em, px, %)
width essentially

Flexbox child properties: flex-grow
flex-grow: <number>;
how much it grows relative to its siblings
No units
0 not grow at all (default)
1 will grow to fill extra space
3 will grow 3 times more than any siblings that have 1, and half as much as those with 6

Flexbox child properties: flex-shrink
flex-shrink: <number>;
determines if and how relative to siblings should shrink to accomodate other elemtns if parent container is too small
numbers same as above

flexbox child properties: shorthand
flex: <flex-grow> <flex-shrink> <flex-basis>;
flex: 0 1 200px; 
flex: 1 1; no flex-basis
flex: 2 30rem; no flex-shrink

Flexbox child properties: align-self

Grid
display: grid
turn element into parent/container box whose children will be laid out in strict grid-like fashion
more control over placement of items
can be flexible, but COMPLICATED
don't be super griddy (LOL)

Grid container properties: grid-template-columns
defines number and size of columns on grid
unlimited nubmer of values separated by spaces
values can be size, key word, function
sizes: px, em/rem, %, fr (fractionals)
key words: auto, min-content, max-content
functions: minmax() allows value clamping, repeat() allows to repeat columns without having to write all out
    repeat(5,10) 5 times make it 10 px

Grid container properties: grid-template-rows
same thing but rows instead

Grid container properties: grid-column and grid-row
specifies starting and ending columns/rows of grid item
start and end separated by slash, end is optional (default start is 1)
both start and end numbers correspond to START of column/row
if want item to occupy just row 3 across span of col 1,2,3:
    .myItem {
        grid-row: 3;
        grid-column: 1 / 4;
    }
    NOTICE end number is 4 to go to the 3rd column (means END AT START OF 4TH COLUMN)
 -->
