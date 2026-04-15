//
function script3237(int0: component, int1: component, int2: component, int3: unknown_int, int4: fontmetrics, string0: string): void {
    var int5 = (IF_GETWIDTH(IF_GETPARENTLAYER(int1)) - 6);
    var int6 = STRING_LENGTH(string0);
    var int7 = STRINGWIDTH(string0, int4);
    var string1 = "";
    var int8 = 0;
    varclient_1099 = MIN(int6, MAX(0, varclient_1099));
    IF_SETPOSITION(script1551(varclient_1099, string0, int4, IF_GETX(int0)), 0, 0, 1, int2);
    if ((int7 <= int5)) {
        IF_SETPOSITION(0, 0, 1, 1, int1);
        IF_SETSIZE(6, 0, 1, 1, int1);
    } else {
        if ((int6 > 0)) {
            if ((varclient_1099 > 0)) {
                string1 = SUBSTRING(string0, 0, varclient_1099);
            };
            int8 = (STRINGWIDTH(string1, int4) - int5);
        };
        IF_SETPOSITION(0, 0, 0, 1, int1);
        IF_SETSIZE(MAX(int7, int5), 0, 0, 1, int1);
        if ((int8 > 0)) {
            IF_SETPOSITION((IF_GETX(int1) - int8), 0, 0, 1, int1);
            IF_SETPOSITION((IF_GETX(int2) - int8), 0, 0, 1, int2);
        };
    };
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(false, int2);
        IF_SETONTIMER(callback(script3238, CLIENTCLOCK(), int2, int3), int0);
    } else {
        IF_SETHIDE(true, int2);
        IF_SETONTIMER(callback(), int0);
    };
    if (((int3 == 100) || (int3 == 101))) {
        script15696();
    } else if ((int3 == 114)) {
        script15697();
    };
    return;
}