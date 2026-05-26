//
function script6976(): void {
    script3915();
    script17165(script16161(), 1);
    script19064();
    if (((varbitplayer_4323 <= 0) && (varbitplayer_25803 == 0))) {
        script6974();
        return;
    };
    var int0 = script16161();
    IF_SETHIDE(1, 82116616);
    IF_SETHIDE(1, 82116779);
    IF_SETHIDE(1, 82116698);
    IF_SETHIDE(0, 82116873);
    IF_SETHIDE(1, 82116699);
    IF_SETHIDE(1, 82117127);
    switch (int0) {
        case 33217: {
            IF_SETHIDE(1, 82116697);
            IF_SETGRAPHIC(27051 as graphic, 82116613);
            break;
        }
        case 34277: {
            IF_SETHIDE(1, 82116697);
            IF_SETGRAPHIC(28095 as graphic, 82116613);
            IF_SETGRAPHIC(script12723(), 117047297);
            break;
        }
        case 34949: {
            script12906();
            break;
        }
        case 1530: {
            IF_SETMODELANIM(-1, 45613061);
            break;
        }
        case 33918:
        case 33522: {
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 19622: {
            if ((script16682() == 1)) {
                IF_SETHIDE(1, 82116873);
                IF_SETHIDE(0, 64487441);
            };
            break;
        }
        case 32986:
        case 50263:
        case 2951: {
            IF_SETHIDE(0, 82116697);
            IF_SETGRAPHIC(struct_getparam(int0, 8206), 82116613);
            break;
        }
        default: {
            IF_SETHIDE(0, 82116697);
            IF_SETGRAPHIC(struct_getparam(int0, 8206), 82116613);
            break;
        }
    };
    script3904();
    varclient_4083 = 4;
    script16198(0, 82116873);
    if ((varbitplayer_4321 == 0)) {
        SOUND_VORBIS_VOLUME(43568, 1, 0, 120);
    };
    script9123();
    return;
}