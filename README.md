# zyBooks Auto Solver

Fork of [craftablescience/zybooks-solver](https://github.com/craftablescience/zybooks-solver)

An automated userscript for automatically solving participation activities in zyBooks, written in JavaScript.

Ironically, I forked and improved this project to autocomplete a zyBooks course that teaches JavaScript. If you're one of my professors reading this, go ahead and close the tab :)

---

## Installation Guide

This script has been tested with [Violentmonkey](https://violentmonkey.github.io/) and [Tampermonkey](https://www.tampermonkey.net/). on Microsoft Edge.

Violentmonkey seems to work better in my testing, and is [open-source](https://github.com/violentmonkey/violentmonkey).

| Extension         | Chrome Web Store                                                                                | Microsoft Edge Add-ons                                                                                   |
| :---------------- | :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Violentmonkey** | [Link](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) | [Link](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao) |
| **Tampermonkey**  | [Link](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  | [Link](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)  |

After installing either Violentmonkey or Tampermonkey, add `zybooks-solver.js` from this repository as a user script. Make sure Developer mode is enabled on your browser, and make sure the extension and script are enabled.

You may have to reload pages for the script to work.

Not all participation activites are supported, especially drag & drop activites. You may have to disable the userscript temporarily to complete those.

---

## ⚠️ Disclaimer

This tool is for **educational and research purposes only**. Using automated solvers may violate your institution's academic integrity policy or the zyBooks Terms of Service. The developers are not responsible for any consequences resulting from the use of this software.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
