//
function script15565(int0: component, int1: component): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    if ((CLIENTOPTION_GET(23) == 0)) {
        if (((varclient_1394 > 0) && (varclient_1394 <= 255))) {
            script15567(int0, int1, SCALE(varclient_1394, 255, IF_GETWIDTH(int0)), 23);
        } else {
            script15567(int0, int1, 127, 23);
        };
    } else {
        script15567(int0, int1, 0, 23);
    };
    return;
}