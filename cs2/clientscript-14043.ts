//
function script14043(): void {
    switch (varbitplayer_39853) {
        case 0: {
            IF_SETHIDE(true, comp(1433, 47));  // escape_menu:csat_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1433, 47));  // escape_menu:csat_layer
            IF_SETHIDE(true, comp(1433, 49));  // escape_menu:csat_stars
            IF_SETHIDE(false, comp(1433, 55));  // escape_menu:csat_thumbs
            script14044();
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1433, 47));  // escape_menu:csat_layer
            IF_SETHIDE(false, comp(1433, 49));  // escape_menu:csat_stars
            IF_SETHIDE(true, comp(1433, 55));  // escape_menu:csat_thumbs
            script14047(varbitclient_39859, 0);
            break;
        }
    };
    return;
}