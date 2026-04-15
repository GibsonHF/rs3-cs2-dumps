//
function script12330(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component): void {
    var int7 = -1 as struct;
    var string0 = "";
    if ((script12278() == 1)) {
        IF_SETHIDE(true, int6);
        if ((int0 == 1)) {
            IF_SETHIDE(false, int5);
            string0 = "Settings (already open)";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int5);
        } else {
            IF_SETHIDE(true, int5);
            IF_SETONMOUSEREPEAT(callback(), int5);
        };
        int7 = 5696 as struct;
        string0 = "Open settings";
    } else {
        if ((varbitplayer_30732 == 0)) {
            IF_SETHIDE(false, int6);
        } else {
            IF_SETHIDE(true, int6);
        };
        IF_SETHIDE(true, int5);
        IF_SETONMOUSEREPEAT(callback(), int5);
        int7 = 31846;
        string0 = "Upgrade";
    };
    script10015(int1, int2, int3, int4, int5, int7);
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), IF_GETLAYER(int1));
    return;
}