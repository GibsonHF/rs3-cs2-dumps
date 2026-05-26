//
function script10116(): void {
    var string0 = varclient_4285;
    var string1 = varclient_4287;
    varclient_4287 = "";
    IF_SETTEXT("", 15204445);
    var int0 = 0;
    if (((STRING_LENGTH(string0) > 0) && (STRING_LENGTH(string1) > 0))) {
        int0 = TTV_LOGIN(string0, string1);
        IF_SETHIDE(1, 15204416);
        IF_SETHIDE(1, 15204424);
        IF_SETHIDE(1, 15204425);
        IF_SETHIDE(1, 15204418);
        IF_SETHIDE(0, 15204421);
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
    };
    return;
}