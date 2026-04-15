//
function script10152(): void {
    var int0 = 0;
    if ((varbitclient_23079 == 1)) {
        TTV_STREAM_STOP();
        int0 = stack();
        IF_SETHIDE(1, 15138821);
        IF_SETTEXT("Start Broadcast", 15204502);
        IF_SETHIDE(1, 15138822);
        varbitclient_23079 = 0;
        printmessage("Broadcast stopped.");
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
        script7698();
        stack(23641);
        stack(15138831);
        IF_SETGRAPHIC();
        IF_SETONTIMER(callback(), 15138823);
        IF_SETONTIMER(callback(), 15138820);
        IF_SETHIDE(1, 15138816);
        IF_SETHIDE(1, 15138817);
        IF_SETHIDE(1, 15204478);
        IF_SETHIDE(1, 15204476);
    } else {
        varbitclient_23079 = 1;
        IF_SETHIDE(true, comp(231, 5));
        script8290(1);
        script7698();
        stack(23644);
        stack(15138831);
        IF_SETGRAPHIC();
        IF_SETONTIMER(callback(script10153, 10), 15138820);
        if ((varbitclient_23068 > 0)) {
            IF_SETHIDE(false, comp(232, 124));
        } else {
            IF_SETHIDE(false, comp(232, 126));
        };
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    };
    return;
}