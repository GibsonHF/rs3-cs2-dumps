//
function script10144(): void {
    TTV_WEBCAM_SUPPORTED();
    var int0 = stack();
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    var string0 = "";
    var string1 = "";
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    if ((int0 == 0)) {
        printmessage("No supported webcam detected.");
        IF_SETHIDE(false, comp(232, 138));
        IF_SETHIDE(true, comp(232, 129));
        script10145();
        return;
    };
    int1 = TTV_WEBCAM_GETDEVICE_COUNT();
    if ((int1 == 0)) {
        printmessage("No webcam detected. If you connect a webcam you must log out and back in to Twitch to detect it.");
        IF_SETHIDE(false, comp(232, 138));
        script10145();
        return;
    };
    printmessage("Webcam detected.");
    if ((int1 > 1)) {
        IF_SETHIDE(false, comp(232, 132));
        IF_SETHIDE(false, comp(232, 133));
    } else {
        IF_SETHIDE(true, comp(232, 132));
        IF_SETHIDE(true, comp(232, 133));
    };
    stack(TTV_WEBCAM_GETDEVICE_BYINDEX(0));
    [int2, string0, string1] = stack();
    if ((int2 == -1)) {
        script10145();
    } else {
        [int4, int5, int6, int7, int8] = TTV_WEBCAM_GETCAP_BYINDEX(int2, 0);
        if ((int4 == -1)) {
            script10145();
            return;
        };
        varclient_4291 = string0;
        varclient_4292 = int5;
        IF_SETTEXT(string1, comp(232, 131));
        IF_SETHIDE(true, comp(232, 138));
        IF_SETTEXT(`${inttostring(int6, 10)} x ${inttostring(int7, 10)}, framerate: ${inttostring(int8, 10)}`, comp(232, 135));
    };
    return;
}