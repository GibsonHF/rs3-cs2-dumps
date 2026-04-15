//
function script3218(int0: component, int1: component, int2: component, int3: int, string0: string): void {
    var int4 = IF_GETFONTMETRICS(int1);
    IF_SETPOSITION(script1551(varclient_1099, string0, int4, (IF_GETX(int0) + 6)), IF_GETY(int2), 0, 0, int2);
    varclient_3686 = int3;
    var int5 = (IF_GETWIDTH(int0) - 11);
    var int6 = STRING_LENGTH(string0);
    var string1 = "";
    if ((varclient_1099 > 0)) {
        string1 = SUBSTRING(string0, 0, MIN(varclient_1099, int6));
    };
    var int7 = (STRINGWIDTH(string1, int4) - int5);
    IF_SETPOSITION(6, IF_GETY(int1), 0, 0, int1);
    IF_SETSIZE(MAX(STRINGWIDTH(string0, int4), int5), IF_GETHEIGHT(int1), 0, 0, int1);
    if ((int7 > 0)) {
        IF_SETPOSITION((IF_GETX(int1) - int7), IF_GETY(int1), 0, 0, int1);
        IF_SETPOSITION((IF_GETX(int2) - int7), IF_GETY(int2), 0, 0, int2);
    };
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(false, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    IF_SETONTIMER(callback(script3219, CLIENTCLOCK(), int2, int3), int0);
    return;
}