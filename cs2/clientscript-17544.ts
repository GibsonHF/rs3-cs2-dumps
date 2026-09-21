//
function script17544(int0: number, int1: number): void {
    var int2 = script18321(int0, 76742679);
    var int3 = script18321(int0, 76742673);
    var int4 = script18321(int0, 76742668);
    var int5 = script18321(int0, 76742675);
    var int6 = script18321(int0, 76742665);
    var int7 = script18321(int0, 76742676);
    var int8 = script18321(int0, 76742678);
    var int9 = script18321(int0, 76742677);
    var int10 = script18321(int0, 76742661);
    var int11 = script18321(int0, 76742681);
    var int12 = script18321(int0, 76742670);
    var int13 = script18321(int0, 76742671);
    var int14 = script18321(int0, 76742663);
    var int15 = script18321(int0, 76742664);
    var int16 = script18321(int0, 76742662);
    var int17 = script18321(int0, 76742682);
    var int18 = script18321(int0, 76742666);
    var int19 = 100;
    var int20 = varplayer_10946;
    var string0 = varclient_7157;
    if ((((int20 != -1) && (struct_getparam(int20, 8990) != -1)) && (int2 != 76742679))) {
        int20 = struct_getparam(int20, 8990);
        string0 = struct_getparam(int20, 8849);
    };
    var int21 = struct_getparam(int20, 8870);
    var int22 = SCALE((CLIENTCLOCK() - int1), 300, 300);
    var int23 = 0;
    if ((int20 != -1)) {
        IF_SETONVARTRANSMIT(callback(script17545, int0, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 11535, 11536, 9), int8);
    };
    if ((int22 <= 100)) {
        int23 = (255 - SCALE(255, 100, int22));
    };
    if (((int21 == 0) && (int20 != -1))) {
        IF_SETTEXT(string0, int17);
        IF_SETSIZE(MIN(400, (STRINGWIDTH(IF_GETTEXT(int17), 55 as fontmetrics) + 60)), 33, 0, 0, int18);
    };
    if ((int21 == 0)) {
        IF_SETTRANS(int23, int14);
        IF_SETTRANS(int23, int15);
        IF_SETTRANS(int23, int16);
        IF_SETTRANS(int23, int17);
    };
    IF_SETTRANS(int23, int5);
    IF_SETTRANS(int23, int6);
    IF_SETTRANS(int23, int7);
    IF_SETTRANS(int23, int8);
    IF_SETTRANS(int23, int9);
    IF_SETTRANS(int23, int10);
    IF_SETTRANS(int23, int12);
    IF_SETTRANS(int23, int11);
    IF_SETHIDE(false, int3);
    IF_SETTRANS(int23, int3);
    IF_SETTRANS(255, int4);
    if ((int20 != -1)) {
        IF_SETGRAPHIC(struct_getparam(int20, 9156), int10);
        IF_SETCOLOUR(struct_getparam(int20, 8860), int10);
        IF_SETCOLOUR(struct_getparam(int20, 8860), int9);
        IF_SETCOLOUR(struct_getparam(int20, 8860), int8);
        if ((struct_getparam(int20, 9157) != -1)) {
            IF_SETHIDE(false, int12);
            IF_SETCOLOUR(struct_getparam(int20, 9157), int12);
        };
        if ((struct_getparam(int20, 9155) != -1)) {
            int19 = IF_GETWIDTH(int13);
            IF_SETSIZE(struct_getparam(int20, 9155), 33, 0, 0, int13);
        };
    };
    if ((int22 >= 255)) {
        IF_SETHIDE(false, int4);
        IF_SETONVARTRANSMIT(callback(script17545, int0, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 11535, 11536, 9), int8);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}