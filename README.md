# redactle-utils
Tools to make Redactle even more fun

## showLetterCounts.user.js

This is a userscript to display the letter counts of each redacted word and
of the word being guessed.

### How to install

**Option 1**

Install from [Greasy Fork](https://greasyfork.org/en/scripts/445440-showlettercounts).

**Option 2**
1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Click the Tampermonkey icon to open it
3. Choose _Create a new script..._
4. Paste in the code from the file `showLetterCounts.user.js`, completely replacing the template code
5. Save the script: _Editor > File > Save_

### How to use
When you open the page at https://www.redactle.com/, the letter counts should appear automatically and look like this:

![Letter count example](images/letter-counts.png)

The letter count for the guess you are typing in is displayed to the right of the input field. (Code is from this [Reddit message](https://www.reddit.com/r/Redactle/comments/uui6kg/redactle_count_display)).
