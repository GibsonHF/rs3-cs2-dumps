//
function script16404(int0: int, int1: int, int2: int, int3: int): void {
    var int4 = 0;
    if ((varplayer_8745 != -1 as dbrow)) {
        int4 = script18932(varplayer_8746);
    };
    var int5 = IF_GETWIDTH(comp(955, 8));
    var int6 = IF_GETHEIGHT(comp(955, 8));
    var int7 = (int0 - 20);
    var int8 = int1;
    var int9 = comp(955, 23);
    var int10 = 2;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int11, int12, int13, int14] = script14244();
    var int0 = (int0 - (int5 / 2));
    int8 = (int1 - 85);
    var int1 = ((int1 - int6) - 73);
    IF_SETPOSITION(MIN(MAX(int11, int0), ((int13 - int5) + 15)), int1, 0, 0, comp(955, 8));
    IF_SETPOSITION(MIN(MAX((int11 + 15), int7), (int13 - 56)), int8, 0, 0, int9);
    IF_SETHIDE(true, comp(955, 23));
    IF_SETHIDE(true, comp(955, 21));
    IF_SETHIDE(true, comp(955, 27));
    IF_SETHIDE(true, comp(955, 25));
    if ((int4 == 0)) {
        IF_SETHIDE(false, int9);
    };
    if ((varclient_7047 != int10)) {
        script16405(int9);
    };
    varclient_7047 = 0;
    script16406(int9);
    return;
}