import { makeHeader } from "./header.js";
import css from './styles.css'
import {body} from './body.js'
import {footer} from './footer.js'

makeHeader.addElements();

body.appendElements();

footer.insertFooterElements();