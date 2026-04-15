//
function script17350(): string {
    var string0 = "en-gb";
    switch (CLIENTOPTION_GET(34)) {
        case 1: {
            string0 = "de-DE";
            break;
        }
        case 2: {
            string0 = "fr-FR";
            break;
        }
        case 3: {
            string0 = "pt-BR";
            break;
        }
    };
    return string0;
}