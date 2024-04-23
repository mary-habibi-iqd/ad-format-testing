const mandanten = {
    "Gesellschafter": {
        FAZ: 'www.faz.net',
        Handelsblatt: 'www.handelsblatt.com',
        WirtschaftsWoche: 'www.wiwo.de',
        Sueddeutsche: 'www.sueddeutsche.de',
        SZMagazin: 'www.sz-magazin.sueddeutsche.de',
        Jetzt: 'www.jetzt.de',
        ZEITOnline: 'www.zeit.de/index'
    },
    "Premium Portfolio": {
        Ariva: 'www.ariva.de',
        Tagesspiegel: 'www.tagesspiegel.de',
        SpiegelOnline: 'www.spiegel.de',
        ManagerMagazin: 'www.manager-magazin.de',
        ElfFreunde: 'www.11freunde.de',
        Edison: 'www.edison.media',
        BTCEcho: 'www.btc-echo.de',
        DUSFlughafen: 'www.dus.com',
        HamburgAirport: 'www.hamburg-airport.de',
        SaechsischeZeitung: 'www.saechsische.de',
        Spektrum: 'www.spektrum.de',
        Monopol: 'www.monopol-magazin.de',
        Cicero: 'www.cicero.de',
        DerFreitag: 'www.freitag.de',
        DEL2: 'www.del-2.org',
        TheFan: 'www.thefan.fm',
        DerPostillon: 'www.der-postillon.com',
        Weltkunst: 'www.weltkunst.de',
        Nautano: 'www.nautano.de'
    },
    "Special Interest - Erstvermarktung": {
        TheEuropean: 'www.theeuropean.de',
        BoerseAmSonntag: 'www.boerse-am-sonntag.de',
        MarktUndMittelstand: 'www.marktundmittelstand.de',
        Wissen: 'www.wissen.de',
        Scinexx: 'www.scinexx.de',
        Genios: 'www.genios.de',
        ForschungUndWissen: 'www.forschung-und-wissen.de',
        Tilasto: 'www.tilasto.de',
        Damals: 'www.damals.de',
        Natur: 'www.natur.de',
        ScienceBlogs: 'www.scienceblogs.de',
        Wirtschaftskurier: 'www.wirtschaftskurier.de',
        Wissenschaft: 'www.wissenschaft.de'
    }
};

const queryStart = 'iqadtest=iqdtests,';
const output = document.querySelector('#output');
const input = document.querySelector('#custom-params');
const button = document.querySelector('#create-links');

button.addEventListener('click', () => {
    output.innerHTML = '';
    createLinks();
});

function createLinks() {
    const customquery = input.value;
    const queryParams = queryStart + customquery;

    for (const [group, websites] of Object.entries(mandanten)) {
        const header = document.createElement('h2');
        header.textContent = group;
        output.appendChild(header);

        const list = document.createElement('ul');

        for (const [website, url] of Object.entries(websites)) {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `https://${url}?${queryParams}`;
            anchor.textContent = website;
            anchor.target = '_blank';
            listItem.appendChild(anchor);
            list.appendChild(listItem);
        }

        output.appendChild(list);
    }
}

const notification = document.querySelector('#notification');

button.addEventListener('click', () => {
    output.innerHTML = '';
    createLinks();
    showNotification();
});

function showNotification() {
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Hide the notification after 3 seconds
}
