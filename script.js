

        const mandanten = {
         
            zeit: 'www.zeit.de',
            faz: 'www.faz.net',
            wirtschaftsWoche: 'www.wiwo.de',
            sueddeutsche: 'www.sueddeutsche.de',
            szMagazin: 'www.sz-magazin.sueddeutsche.de',
            jetzt: 'www.jetzt.de',
            handelsblatt: 'www.handelsblatt.com',

            wissen: 'www.wissen.de',

            ariva: 'www.ariva.de',
            tagesSpiegel: 'www.tagesspiegel.de',
            spiegel: 'www.spiegel.de',
            managerMagazin: 'www.manager-magazin.de',
            elfFreunde: 'www.11freunde.de',
            edisonMedia: 'www.edison.media',
            btcEcho: 'www.btc-echo.de',
            DUS: 'www.dus.com',
            HamburgerFlughafen: 'www.hamburg-airport.de',
            sächsischeZeitung: 'www.saechsische.de',
            spektrum: 'www.spektrum.de',
            monopol: 'www.monopol-magazin.de',
            cicero: 'www.cicero.de',
            derFreitag: 'www.freitag.de',  

            del2: 'www.del-2.org',
            theFan: 'www.thefan.fm',
            postillon: 'www.der-postillon.com',
            weltkunst: 'www.weltkunst.de',
            nautano: 'www.nautano.de',

            // special interest
            theEuropean: 'www.theeuropean.de',
            boerseAmSonntag: 'www.boerse-am-sonntag.de',
            MarktUndMittelstand: 'www.marktundmittelstand.de',
            wissen: 'www.wissen.de',
            scinexx: 'www.scinexx.de',
            genios: 'www.genios.de',
            forschungUndWissen: 'www.forschung-und-wissen.de',
            tilasto: 'www.tilasto.de',
            damals: 'www.damals.de',
            natur: 'www.natur.de',
            scienceBlogs: 'www.scienceblogs.de',
            wirtschaftsKurier: 'www.wirtschaftskurier.de',
            wissenschaft: 'www.wissenschaft.de',
    
        } 

        const queryStart = 'iqadtest=iqdtests,'
 
        const output = document.querySelector('output')
        const input = document.querySelector('#custom-params')
        const button = document.querySelector('#create-links')
        button.addEventListener('click', () => {
            output.innerHTML = ''
            createLinks()
        })
        function createLinks() {
            const customquery = input.value
            const queryParams = queryStart + customquery
            Object.entries(mandanten).forEach(([key, value]) => {
                const anchor = document.createElement('a')
                anchor.href = `https://${value}?${queryParams}`
           
                anchor.innerText = key
                anchor.style.marginBottom = '10px'
                anchor.target = '_blank'
                output.appendChild(anchor)
            })
        }
       
 