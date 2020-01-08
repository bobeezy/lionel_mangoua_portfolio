/*!
                 _____________________
                 |###################|          
                 |###################|          
                 |###################|          
                 |###################|          
     ((-----------------------------------------
     | \         /  /@@ \      /@@ \  \
      \ \,      /  (     )    (     )  \            _____
       \ \      |   \___/      \___/   |           /  __ \
        \ ""*-__/                      \           | |  | |
         ""*-_                         "-_         | |  """
              \    -.  _________   .-   __"-.__.-((  ))
               \,    \^    U    ^/     /  "-___--((  ))
                 \,   \         /    /'            | |
                  |    \       /   /'              | |
                  |     "-----"    \               | |
                 /                  "*-._          | |
                /   /\          /*-._    \         | |
               /   /  "\______/"     /   /         | |
              /   /                 /   /          | |
             /. ./                  |. .|          """
            /  | |                  / | \
           /   |  \                /  |  \   
          /.-./.-.|               /.-.|.-.\
*/ /*!  
 * @description: Blazingchilli
 * @version: 1.0
 * @author: Alex Littlejohn
 */ /*! normalize.css v2.1.1 | MIT License | git.io/normalize */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden] {
  display: none;
}
html {
  color: #2c3e50;
  font-size: 100%;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  line-height: 1.5;
  background: #fff;
  color: #383838;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: inherit;
}
a:focus {
  outline: 0;
}
a:active,
a:hover {
  outline: 0;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
h1,
h2,
h4,
h5,
h6,
strong {
  font-weight: 300;
}
h2 {
  font-size: 34px;
}
h3 {
  font-weight: 400;
  margin: 0 0 60px 0;
  padding: 0 0 20px 0;
  position: relative;
}
h3:after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 25%;
  height: 1px;
  background: #e5e5e5;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: 700;
}
mark {
  background: #ff0;
  color: #000;
}
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}
pre {
  white-space: pre-wrap;
}
q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 0;
}
label[for] {
  cursor: pointer;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
button,
input,
select,
textarea {
  font-family: sans-serif;
  font-weight: 400;
  font-size: 100%;
  margin: 0;
  color: #2c3e50;
}
button,
input {
  line-height: normal;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="search"] {
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body {
  height: 100%;
}
.section {
  width: 100%;
  padding: 80px 40px;
  overflow: hidden;
  background: #fff;
}
.center {
  max-width: 1280px;
  margin: 0 auto;
}
.sectionHeading {
  margin: 0 0 40px 0;
}
.contact {
  background-color: #fff;
}
.sectionHeader {
  text-align: center;
  padding: 30px;
}
.sectionHeader h2 {
  color: #fff;
}
.column {
  padding: 3% 0;
}
@media screen and (min-width: 30em) {
  .sectionHeader {
    padding: 60px;
  }
}
@media screen and (min-width: 48em) {
  .sectionHeader {
    padding: 100px;
  }
}
@media screen and (min-width: 60em) {
  .sectionHeader {
    padding: 140px;
  }
  .no-flexbox .columns {
    overflow: hidden;
  }
  .no-flexbox .column {
    float: left;
  }
  .column {
    width: 33%;
    padding: 0 3%;
  }
  .flexbox .columns {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
.navBar {
  padding: 0 20px;
  width: 100%;
  position: absolute;
}
.logo {
  text-align: center;
  display: block;
  padding: 20px 0;
  float: left;
}
.logo img {
  margin: 0;
  height: 60px;
}
.logo .mobile {
  display: block;
}
.logo .desktop {
  display: none;
}
.nav {
  list-style: none;
  margin: 0;
  text-align: center;
  float: right;
  padding: 0;
}
.nav li {
  display: inline-block;
}
.nav a {
  padding: 0 15px;
  color: #c0202f;
}
.nav a:hover {
  background: #fff;
  color: #c0202f;
}
@media screen and (max-width: 60em) {
  .logo {
    float: left;
    height: 60px;
    padding: 0;
    margin-top: 20px;
  }
  .logo img {
    height: 100%;
  }
  .navContainer {
    background: #c0202f url(images/list.png) center center no-repeat;
    width: 44px;
    height: 44px;
    position: fixed;
    margin-top: 20px;
    right: 20px;
    z-index: 10;
  }
  .nav {
    display: none;
    background: #c0202f;
    position: absolute;
    right: 0;
    top: 100%;
    text-align: left;
  }
  .nav li {
    display: block;
  }
  .nav a {
    display: block;
    height: 44px;
    line-height: 44px;
    padding: 0 24px;
    color: #fff;
  }
}
@media screen and (min-width: 30em) {
  .introBlurb {
    font-size: 32px;
  }
}
@media screen and (min-width: 48em) {
  .intro {
    bottom: 30px;
  }
  .introBlurb {
    font-size: 36px;
  }
  .callToAction {
    font-size: 20px;
    margin: 30px 0 0 0;
  }
}
@media screen and (min-width: 60em) {
  .logo .mobile {
    display: none;
  }
  .logo .desktop {
    display: block;
  }
  .intro {
    bottom: 50px;
  }
  .introBlurb {
    font-size: 40px;
  }
  .callToAction {
    font-size: 24px;
    margin: 50px 0 0 0;
  }
  .nav {
    padding: 40px 0 0 0;
    display: block !important;
  }
  .navBar {
    background: #fff;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: fixed;
    z-index: 10;
  }
}
.header {
  height: 100%;
  position: relative;
  text-align: center;
}
.particles {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #c0202f url(images/background.jpg) center center;
  background-size: 100% 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.definitionImage {
  padding: 0 30px;
  max-width: 100%;
}
.definition {
  color: #fff;
}
.introBlurb {
  padding: 5% 30px 0 30px;
  color: #fff;
  font-size: 26px;
  margin: 0;
  font-weight: 300;
}
.intro {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
}
.callToAction {
  padding: 0 32px;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  color: #fff;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 15px 0 0 0;
  -webkit-transition: all 0.15s ease-out;
  -moz-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  position: relative;
  background: #941924;
}
.callToAction:hover {
  background-color: #69111a;
}
.logos {
  list-style: none;
  text-align: center;
  margin-top: 35px;
}
.logos li {
  display: inline-block;
  padding: 10px 20px;
}
.logos img {
  max-height: 24px;
}
@media screen and (min-width: 30em) {
  .introBlurb {
    font-size: 32px;
  }
}
@media screen and (min-width: 48em) {
  .intro {
    bottom: 30px;
  }
  .introBlurb {
    font-size: 36px;
  }
  .callToAction {
    font-size: 20px;
    margin: 30px 0 0 0;
  }
}
@media screen and (min-width: 60em) {
  .intro {
    bottom: 50px;
  }
  .introBlurb {
    font-size: 40px;
  }
  .callToAction {
    font-size: 24px;
    margin: 50px 0 0 0;
  }
}
.aboutItem {
  text-align: center;
  margin: 40px;
}
.bubbleIcon {
  border-radius: 50%;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  background: #331c26;
  padding: 25px;
  box-shadow: 0 0 0 0 #331c26;
}
.aboutItem:hover .bubbleIcon,
.bubbleIcon:hover {
  box-shadow: 0 0 0 4px #331c26;
}
.about h2 {
  margin: 0 0 10px 0;
}
.about h3 {
  margin: 0 0 60px 0;
}
@media screen and (min-width: 48em) {
  .aboutItem {
    float: left;
    width: 45%;
    margin: 0 5% 0 0;
  }
}
@media screen and (min-width: 60em) {
  .aboutItem {
    width: 21%;
    margin: 0 2% 0 2%;
  }
}
.focus .columns {
  padding: 3% 0;
}
.focus h3:after {
  background: #555;
}
.focus ul {
  margin: 0;
  padding: 0;
}
.focus h3 {
  margin: 40px 0 40px 0;
}
.focus .bubbleIcon {
  margin: 0 auto;
  display: block;
}
.columnHeader h4 {
  margin-bottom: 0;
}
@media screen and (min-width: 60em) {
  .focus h2 {
    padding-left: 1.5%;
  }
  .focus .column {
    width: 30%;
    margin: 1.5%;
    padding: 30px;
    background: #f5f5f5;
  }
}
.contact {
  padding-bottom: 200px;
}
.contact h4 {
  margin-bottom: 1px;
}
.contact p {
  margin-top: 0;
}
/*# sourceMappingURL=blazingchilli.css.map */
