//
function script10147(int0: int): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    var int6 = -1;
    var string0 = "";
    var string1 = "";
    var int7 = -1;
    var int8 = -1;
    if ((varbitclient_23070 == 1)) {
        printmessage("Please wait a moment.");
        return;
    };
    stack(TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291));
    [int6, string0, string1] = stack();
    if ((int6 == -1)) {
        script10145();
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return;
    };
    int7 = TTV_WEBCAM_GETCAP_COUNT(int6);
    [int8, int1, int2, int3, int4] = TTV_WEBCAM_GETCAP_BYUNIQUEID(int6, varclient_4292);
    int8 = (int8 + int0);
    if (((int8 < 0) || (int8 >= int7))) {
        printmessage("No more options available.");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return;
    };
    [int8, int1, int2, int3, int4] = TTV_WEBCAM_GETCAP_BYINDEX(int6, int8);
    if ((int8 == -1)) {
        script10145();
        return;
    };
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    varbitclient_23070 = 1;
    varclient_4292 = int1;
    script10150(1);
    IF_SETTEXT(`${inttostring(int2, 10)} x ${inttostring(int3, 10)}, framerate: ${inttostring(int4, 10)}`, comp(232, 135));
    return;
}