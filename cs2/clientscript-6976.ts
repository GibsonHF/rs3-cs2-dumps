//
function script6976(): void {
    script3915();
    script17165(script16161(), true);
    script19064();
    if (((varbitplayer_4323 <= 0) && (varbitplayer_25803 == 0))) {
        script6974();
        return;
    };
    var int0 = script16161();
    IF_SETHIDE(true, comp(1253, 8));
    IF_SETHIDE(true, comp(1253, 171));
    IF_SETHIDE(true, comp(1253, 90));
    IF_SETHIDE(false, comp(1253, 265));
    IF_SETHIDE(true, comp(1253, 91));
    IF_SETHIDE(true, comp(1253, 519));
    switch (int0) {
        case 33217: {
            IF_SETHIDE(true, comp(1253, 89));
            stack(27051);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 34277: {
            IF_SETHIDE(true, comp(1253, 89));
            stack(28095);
            stack(82116613);
            IF_SETGRAPHIC();
            stack(script12723());
            stack(117047297);
            IF_SETGRAPHIC();
            break;
        }
        case 34949: {
            script12906();
            break;
        }
        case 1530: {
            IF_SETMODELANIM(-1 as seq, comp(696, 5));
            break;
        }
        case 33918:
        case 33522: {
            IF_SETHIDE(true, comp(1253, 89));
            break;
        }
        case 19622: {
            if ((script16682() == true)) {
                IF_SETHIDE(true, comp(1253, 265));
                IF_SETHIDE(false, comp(984, 17));
            };
            break;
        }
        case 32986:
        case 50263:
        case 2951: {
            IF_SETHIDE(false, comp(1253, 89));
            stack(struct_getparam(int0, 8206));
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            IF_SETHIDE(false, comp(1253, 89));
            stack(struct_getparam(int0, 8206));
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
    };
    script3904();
    varclient_4083 = 4;
    script16198(false, 82116873);
    if ((varbitplayer_4321 == 0)) {
        SOUND_VORBIS_VOLUME(43568 as vorbis, 1, 0, 120);
    };
    script9123();
    return;
}