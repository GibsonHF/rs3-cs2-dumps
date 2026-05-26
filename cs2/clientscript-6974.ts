//
function script6974(): void {
    script3915();
    IF_SETHIDE(1, 82116698);
    IF_SETHIDE(1, 82116873);
    IF_SETHIDE(1, 82116699);
    IF_SETHIDE(1, 82117127);
    IF_SETHIDE(0, 82116623);
    IF_SETHIDE(0, 82116618);
    var int0 = script16161();
    script20040(int0);
    switch (int0) {
        case 33217: {
            IF_SETHIDE(1, 82116616);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(1, 82116697);
            IF_SETGRAPHIC(27051 as graphic, 82116613);
            break;
        }
        case 33918:
        case 33522: {
            IF_SETHIDE(0, 82116616);
            IF_SETHIDE(0, 82116779);
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 33919: {
            IF_SETHIDE(0, 82116616);
            IF_SETHIDE(0, 82116779);
            IF_SETHIDE(0, 82116697);
            IF_SETGRAPHIC(21204 as graphic, 82116613);
            break;
        }
        case 34277: {
            IF_SETHIDE(1, 82116616);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(1, 82116697);
            IF_SETGRAPHIC(28095 as graphic, 82116613);
            IF_SETGRAPHIC(script12723(), 117047297);
            break;
        }
        case 1515:
        case 40380:
        case 7229:
        case 44604:
        case 49941: {
            script19019(int0);
            break;
        }
        case 37490: {
            IF_SETHIDE(0, 82116616);
            IF_SETHIDE(0, 82116779);
            IF_SETHIDE(0, 82116697);
            IF_SETHIDE(1, 82116623);
            IF_SETHIDE(1, 82116618);
            IF_SETGRAPHIC(27752 as graphic, 82116613);
            break;
        }
        case 19622: {
            IF_SETHIDE(0, 82116616);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(1, 82116697);
            if ((script16682() == 1)) {
                IF_SETHIDE(1, 82116873);
                IF_SETHIDE(1, 64487441);
            };
            break;
        }
        default: {
            IF_SETHIDE(0, 82116616);
            IF_SETHIDE(0, 82116779);
            IF_SETHIDE(0, 82116697);
            IF_SETGRAPHIC(struct_getparam(int0, 8206), 82116613);
            break;
        }
    };
    script3904();
    if ((varclient_4745 != -1 as struct)) {
        IF_SETHIDE(0, 82116680);
        IF_SETHIDE(0, 82116677);
        IF_SETHIDE(0, 82116678);
    };
    switch (int0) {
        case 47035: {
            script19918();
            break;
        }
        default: {
            script16198(1, 82116873);
            break;
        }
    };
    varclient_4083 = 2;
    script10877();
    if ((script18808() == 0)) {
        script6574(1);
    };
    return;
}