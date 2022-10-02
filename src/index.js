import { makeHeader } from "./header.js";
import css from './styles.css'
import {body} from './body.js'
import {footer} from './footer.js'
import {forms} from './modules/forms'

makeHeader.addElements();

body.appendElements();

forms.addClickEvents();

footer.insertFooterElements();