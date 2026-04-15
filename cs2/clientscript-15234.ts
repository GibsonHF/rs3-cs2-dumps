//
function script15234(int0: unknown_int): void {
    var string0 = "en-gb";
    switch (CLIENTOPTION_GET(34)) {
        case 1: {
            string0 = "de";
            break;
        }
        case 2: {
            string0 = "fr";
            break;
        }
        case 3: {
            string0 = "pt-br";
            break;
        }
    };
    var string1 = "";
    var string2 = "articles";
    switch (int0) {
        case 1000: {
            string1 = "206462839";
            break;
        }
        case 1001: {
            string1 = "206344209";
            break;
        }
        case 1002: {
            string1 = "207498275";
            break;
        }
        case 1003: {
            string1 = "206666409";
            break;
        }
        case 1004: {
            string1 = "207506215";
            break;
        }
        case 1005: {
            string1 = "206558669";
            break;
        }
        case 1006: {
            string1 = "207498255";
            break;
        }
        case 1007: {
            string1 = "211453769";
            break;
        }
        case 1008: {
            string1 = "206747519";
            break;
        }
        case 1009: {
            string2 = "categories";
            string1 = "200977401";
            break;
        }
        case 1010: {
            string2 = "categories";
            string1 = "200977411";
            break;
        }
        case 1011: {
            string1 = "209366569";
            break;
        }
        case 1012:
        case 1013: {
            OPENURLRAW("https://secure.runescape.com/m=offence-appeal/c=ZhD-M0df1ec/account-history", 0);
            return;
        }
        case 1014: {
            if (((PLATFORMTYPE() == 0) || (PLATFORMTYPE() == 5))) {
                string1 = "207256855";
            } else {
                script15240();
            };
            break;
        }
        case 1015: {
            string1 = "360013471957";
            break;
        }
        case 1016: {
            string1 = "206853909";
            break;
        }
        case 1017: {
            string1 = "360000775978";
            break;
        }
        case 1018: {
            string1 = "360001358698";
            break;
        }
        default: {
            return;
        }
    };
    OPENURLRAW(`https://support.runescape.com/hc/${string0}/${string2}/${string1}`, 0);
    return;
}