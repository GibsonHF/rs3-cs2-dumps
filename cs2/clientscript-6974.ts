//
function script6974(): void {
    script3915();
    IF_SETHIDE(true, comp(1253, 90));
    IF_SETHIDE(true, comp(1253, 265));
    IF_SETHIDE(true, comp(1253, 91));
    IF_SETHIDE(true, comp(1253, 519));
    IF_SETHIDE(false, comp(1253, 15));
    IF_SETHIDE(false, comp(1253, 10));
    var int0 = script16161();
    script20040(int0);
    switch (int0) {
        case 33217: {
            IF_SETHIDE(true, comp(1253, 8));
            IF_SETHIDE(true, comp(1253, 171));
            IF_SETHIDE(true, comp(1253, 89));
            stack(27051);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 33918:
        case 33522: {
            IF_SETHIDE(false, comp(1253, 8));
            IF_SETHIDE(false, comp(1253, 171));
            IF_SETHIDE(true, comp(1253, 89));
            break;
        }
        case 33919: {
            IF_SETHIDE(false, comp(1253, 8));
            IF_SETHIDE(false, comp(1253, 171));
            IF_SETHIDE(false, comp(1253, 89));
            stack(21204);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 34277: {
            IF_SETHIDE(true, comp(1253, 8));
            IF_SETHIDE(true, comp(1253, 171));
            IF_SETHIDE(true, comp(1253, 89));
            stack(28095);
            stack(82116613);
            IF_SETGRAPHIC();
            stack(script12723());
            stack(117047297);
            IF_SETGRAPHIC();
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
            IF_SETHIDE(false, comp(1253, 8));
            IF_SETHIDE(false, comp(1253, 171));
            IF_SETHIDE(false, comp(1253, 89));
            IF_SETHIDE(true, comp(1253, 15));
            IF_SETHIDE(true, comp(1253, 10));
            stack(27752);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 19622: {
            IF_SETHIDE(false, comp(1253, 8));
            IF_SETHIDE(true, comp(1253, 171));
            IF_SETHIDE(true, comp(1253, 89));
            if ((script16682() == true)) {
                IF_SETHIDE(true, comp(1253, 265));
                IF_SETHIDE(true, comp(984, 17));
            };
            break;
        }
        default: {
            IF_SETHIDE(false, comp(1253, 8));
            IF_SETHIDE(false, comp(1253, 171));
            IF_SETHIDE(false, comp(1253, 89));
            stack(struct_getparam(int0, 8206));
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
    };
    script3904();
    if ((varclient_4745 != -1 as struct)) {
        IF_SETHIDE(false, comp(1253, 72));
        IF_SETHIDE(false, comp(1253, 69));
        IF_SETHIDE(false, comp(1253, 70));
    };
    switch (int0) {
        case 47035: {
            script19918();
            break;
        }
        default: {
            script16198(true, 82116873);
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