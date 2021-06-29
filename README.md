**CS:GO Market Price Notifier**

Libraries used :

1. axios
2. cheerio
3. nodemailer

How to use : 

- Add your desired CS:GO skins and the required price by running *addItems.js* using **npm addItems.js** followed by the command line parameters specifying the nature of the skin   like wear and skin name.

- Command line parameters are strictly required and are of 5 types. 
  1. StatTrak / No StatTrak (0 - No StatTrak, 1 - StatTrak).
  2. Wear of the skin (*FN* - Factory New, *MW* - Minimal Wear, *FT* - Field Tested, *WW* - Well Worn, *BS* - Battle Scarred).
  3. Weapon name (Exact names can be referenced from **weapons.txt**).
  4. Skin name.
  5. Required price.

A sample parameter to the *addItems.js* file would look like **npm addItems.js 1 'BS' 'ak' 'Safari Mesh' 15.10**.


