Instructions:

-install live-server globally if you have not done so already by typing:
npm i live-server -g

-Open app by typing live-server in terminal.
-Add Kitties by clicking in each div. I've set this up so that you will get 1 kitty per click in the container that you click. The kitties will follow some random pre-determined flexbox rules.
-Change how the kitties are positioned within each div by adjusting the flex-box qualities in the CSS file (Flex-direction, justify-content, align-items).

-look at the HTML file and the classes assigned. Each class is in the CSS file and has a grid-area property. This grid area property is used to draw the grid. Please note that the HTML divs are not in any logical order at all. Please also note that I used the class name for the grid area in every case but one. "dogs" is used as the grid area for one of the classes.

-Now look at the CSS file and find the grid representaion. You should see 9 lines of strings with no seperating commas between each line somwere. This & the two lines above define our grid. If you want to add whitesapce to the grid, use a "." instead of one of the grid-area names like "dogs". Take your mouse and inspect the elements of the page. You should see a grid overlay on the page that you may not have seen before. The grid can be any n grid squares. You could have a 3x3 or 9x9 or 100x100. 9x9 is a pretty good place to start unless you need super dexterous/detailed control or user action tracking (mouse tracking etc). You decide the N size of your grid by setting the columns, rows, and by "drawling" the grid (this is the 9 lines of strings). The columns rows and drawling must all have the same n value. The colums and rows are split into relative fractions. 1fr means 1 fraction and .5fr is one half. You can use this to make your grid smaller/bigger in certain columns or rows. I think this is mostly unessasary. Best to start with all 1fr.

-The last thing that is important when building using this sort of style is to ensure that you do not use absolute values for any size or positioning besides media-queries. width: 100vw (100% of the view width) is MUCH better than width: 975px. use em's for text size, % sizes for internal componenets, and vw/vh for containers whenever possible.
