import { addCrimesToList } from './crimes-list.js';
import { addCrimesToMap } from './crimes-map.js';

function initFilters() {
    const radioGroup = document.querySelector('.radiogroup');
    const names = ['Aggravated Assault', 'Burglary', 'Drug Violations', 
                    'Fraud', 'Other Assaults', 'Other Crimes', 'Rape', 'Robbery', 'Sex Offenses', 
                    'Thefts', 'Vandalism', 'Weapon Violations'];
    
    let html = `
        <div class='radio'>
            <input type="radio" name="radiogroup" class="filter-input" id="input-all" value="all" checked>
            <label for="input-all">All</label>
        </div>`;

    for (const name of names) {
        html += `
        <div class='radio'>
            <input type="radio" name="radiogroup" class="filter-input" id="input-${name}" value="${name}">
            <label for="input-${name}">${name}</label>
        </div>`
    }

    radioGroup.innerHTML = html;

    const filters = radioGroup.querySelectorAll('input');
    for (const filter of filters) {
        filter.addEventListener("click", event => {
            addCrimesToList(filter.value);
            addCrimesToMap(filter.value);
        } );
    }
}

export{
    initFilters,
}