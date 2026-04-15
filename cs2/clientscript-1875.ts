//
function script1875(int0: component, int1: component, string0: string): void {
    var int2 = comp(808, 10);
    var int3 = IF_GETFONTMETRICS(int0);
    IF_SETPOSITION(script1551(varclient_1097, string0, int3, IF_GETX(int2)), IF_GETY(int1), 0, 0, int1);
    var int4 = IF_GETWIDTH(int2);
    var int5 = STRING_LENGTH(string0);
    var string1 = "";
    if ((varclient_1097 > 0)) {
        string1 = SUBSTRING(string0, 0, MIN(varclient_1097, int5));
    };
    var int6 = (STRINGWIDTH(string1, int3) - int4);
    IF_SETSIZE(MAX(STRINGWIDTH(string0, int3), int4), IF_GETHEIGHT(int0), 0, 0, int0);
    IF_SETPOSITION(2, 0, 0, 1, int0);
    if ((int6 > 0)) {
        IF_SETPOSITION((IF_GETX(int0) - int6), IF_GETY(int0), 0, 0, int0);
        IF_SETPOSITION(MIN((IF_GETX(int1) - int6), (int4 - 1)), IF_GETY(int1), 0, 0, int1);
    };
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    IF_SETONTIMER(callback(script1876, CLIENTCLOCK(), int1), int0);
    return;
}