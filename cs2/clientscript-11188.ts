//
function script11188(): void {
    if ((((IF_HASSUBMODAL(script8074(), 1253 as interface) == 0) || (script16199(82116677) == 1)) || (script17301() == false))) {
        return;
    };
    if (((script18808() == 1) && (varbitplayer_58043 == 0))) {
        script10943("Please select a promotion before viewing promotion information.", comp(1253, 69));
        return;
    };
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    if ((script18482() == false)) {
        script18481();
        script16198(true, 82116677);
        script6574(1);
    } else {
        if ((script17333() == 1)) {
            script10943("Please claim your reward before viewing promotion information.", comp(1253, 69));
            return;
        };
        if (((struct_getparam(script16161(), 8676) == true) && (varclient_7075 == true))) {
            return;
        };
        script17009();
    };
    script3904();
    return;
}