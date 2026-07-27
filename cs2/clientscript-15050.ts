//
function script15050(int0: number): void {
    if ((((int0 == 2) && (varclient_2235 == comp(105, 182))) && (strcmp(varclient_2250, "") != 0))) {
        varclient_85 = script17394(script17392(varclient_2250));
        IF_SETTEXT(TOSTRING_LOCALISED_LONG(varclient_85, 1), comp(105, 185));
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
        script15038(varclient_84, varclient_85, 0);
    };
    return;
}