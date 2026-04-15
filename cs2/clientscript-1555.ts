//
function script1555(int0: int, int1: int): void {
    var string0 = script8521(int0);
    var int2 = script8557(int0);
    var int3 = script8556(int0);
    var int4 = IF_GETFONTMETRICS(int3);
    IF_SETPOSITION(script1551(varclient_1028, string0, int4, int1), IF_GETY(int2), 0, 0, int2);
    var int5 = IF_GETWIDTH(script8555(int0));
    var int6 = STRING_LENGTH(string0);
    var string1 = "";
    if ((varclient_1028 > 0)) {
        string1 = SUBSTRING(string0, 0, MIN(varclient_1028, int6));
    };
    var int7 = (STRINGWIDTH(string1, int4) - int5);
    IF_SETPOSITION(0, 0, 0, 2, int3);
    IF_SETSIZE(MAX(STRINGWIDTH(IF_GETTEXT(int3), int4), int5), 0, 0, 1, int3);
    if ((int7 > 0)) {
        IF_SETPOSITION((IF_GETX(int3) - int7), 0, 0, 2, int3);
        IF_SETPOSITION((IF_GETX(int2) - int7), 0, 0, 1, int2);
    };
    if ((((STRING_LENGTH(string0) <= 0) || (varclient_2873 != 8)) || (varclient_2231 != int0))) {
        IF_SETHIDE(true, int2);
        IF_SETONTIMER(callback(), int3);
    } else {
        if ((APPLET_HASFOCUS() == 1)) {
            IF_SETHIDE(false, int2);
        } else {
            IF_SETHIDE(true, int2);
        };
        script8522(int0, string0);
        IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), int2), int3);
    };
    return;
}