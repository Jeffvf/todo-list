import { makeHeader } from "./header.js";
import css from './styles.css'
import {sidebar} from './sidebar.js';
import {footer} from './footer.js'

makeHeader.addElements();

sidebar.createSidebar();

footer.insertFooterElements();