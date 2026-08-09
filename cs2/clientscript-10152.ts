//
function script10152(): void {
    var int0 = 0;
    if ((varbitclient_23079 == 1)) {
        TTV_STREAM_STOP();
        int0 = [];
        IF_SETHIDE(true, comp(231, 5));
        IF_SETTEXT("Start Broadcast", comp(232, 150));
        IF_SETHIDE(true, comp(231, 6));
        varbitclient_23079 = 0;
        printmessage("Broadcast stopped.");
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        script7698();
        IF_SETGRAPHIC(23641 as graphic, comp(231, 15));
        IF_SETONTIMER(callback(), comp(231, 7));
        IF_SETONTIMER(callback(), comp(231, 4));
        IF_SETHIDE(true, comp(231, 0));
        IF_SETHIDE(true, comp(231, 1));
        IF_SETHIDE(true, comp(232, 126));
        IF_SETHIDE(true, comp(232, 124));
    } else {
        varbitclient_23079 = 1;
        IF_SETHIDE(true, comp(231, 5));
        script8290(1);
        script7698();
        IF_SETGRAPHIC(23644 as graphic, comp(231, 15));
        IF_SETONTIMER(callback(script10153, 10), comp(231, 4));
        if ((varbitclient_23068 > 0)) {
            IF_SETHIDE(false, comp(232, 124));
        } else {
            IF_SETHIDE(false, comp(232, 126));
        };
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    };
    return;
}