//
function script15684(): string {
    switch (CLIENTOPTION_GET(34)) {
        case 1: {
            return "de-DE";
        }
        case 2: {
            return "fr-FR";
        }
        case 3: {
            return "pt-BR";
        }
    };
    return "en-GB";
}