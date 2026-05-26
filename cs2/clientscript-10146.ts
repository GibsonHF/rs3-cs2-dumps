//
function script10146(int0: number): void {
    var int1 = -1;
    var string0 = "";
    var string1 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    stack(TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291));
    [int1, string0, string1] = stack();
    if ((int1 == -1)) {
        script10145();
        SOUND_VORBIS_VOLUME(10046, 1, 0, 150);
        return;
    };
    int3 = TTV_WEBCAM_GETDEVICE_COUNT();
    int1 = (int1 + int0);
    if ((int3 > 1)) {
        IF_SETHIDE(0, 15204484);
        IF_SETHIDE(0, 15204485);
    } else {
        IF_SETHIDE(1, 15204484);
        IF_SETHIDE(1, 15204485);
    };
    if (((int1 < 0) || (int1 >= int3))) {
        printmessage("No more cameras available.");
        SOUND_VORBIS_VOLUME(10046, 1, 0, 150);
        return;
    };
    stack(TTV_WEBCAM_GETDEVICE_BYINDEX(int1));
    [int1, string0, string1] = stack();
    if ((int1 != -1)) {
        IF_SETHIDE(1, 15204490);
        IF_SETHIDE(0, 15204481);
        IF_SETTEXT(string1, 15204483);
        varclient_4291 = string0;
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
        varclient_4292 = 0;
        [int4, int5, int6, int7, int8] = TTV_WEBCAM_GETCAP_BYINDEX(int1, varclient_4292);
        if ((int4 == -1)) {
            script10145();
            return;
        };
        script10150(1);
        IF_SETTEXT(`${inttostring(int6, 10)} x ${inttostring(int7, 10)}, framerate: ${inttostring(int8, 10)}`, 15204487);
    };
    return;
}