//
function script13390(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = (255 - MIN(255, (MAX(0, (CLIENTCLOCK() - int2)) * 4)));
    var int8 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    var int9 = -1 as cs2enum;
    if ((int6 != -1)) {
        IF_SETTRANS(int7, comp(744, 17));  // loginscreen:nxt_background_graphic_fade_0
        IF_SETTRANS(int7, comp(744, 18));  // loginscreen:nxt_background_graphic_fade_1
        IF_SETTRANS(int7, comp(744, 19));  // loginscreen:nxt_background_graphic_fade_2
        IF_SETTRANS(int7, comp(744, 20));  // loginscreen:nxt_background_graphic_fade_3
        IF_SETTRANS(int7, comp(744, 21));  // loginscreen:nxt_background_graphic_fade_4
        IF_SETTRANS(int7, comp(744, 22));  // loginscreen:nxt_background_graphic_fade_5
        IF_SETTRANS(int7, comp(744, 23));  // loginscreen:nxt_background_graphic_fade_6
        IF_SETTRANS(int7, comp(744, 24));  // loginscreen:nxt_background_graphic_fade_7
        IF_SETTRANS(int7, comp(744, 25));  // loginscreen:nxt_background_graphic_fade_8
    };
    if ((int6 == -1)) {
        IF_SETTRANS(int7, int1);
        if ((int1 == comp(744, 14))) {  // loginscreen:background_fader
            IF_SETTRANS((255 - int7), comp(744, 30));  // loginscreen:runescape_logo
        };
    };
    if ((int7 == 0)) {
        if ((int3 == 111)) {
            IF_SETONTIMER(callback(script13387, int0, int1, CLIENTCLOCK(), 111), int0);
        };
        varclient_6040 = int4;
        int8 = enum_getvalue(0, 73, 12591 as cs2enum, int4);
        if ((int8 != -1 as struct)) {
            int9 = struct_getparam(int8, 6589);
            if ((int9 != -1 as cs2enum)) {
                varclient_6045 = int5;
                if ((varclient_6042 != 1)) {
                    IF_SETONTIMER(callback(script13387, int0, int1, CLIENTCLOCK(), varclient_6040), int0);
                };
            };
        };
        script13385();
        IF_SETONTIMER(callback(script13391, int1, CLIENTCLOCK(), int6), int1);
    };
    return;
}