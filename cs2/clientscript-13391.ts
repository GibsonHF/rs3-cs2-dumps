//
function script13391(int0: number, int1: number, int2: number): void {
    var int3 = MIN(255, (MAX(0, (CLIENTCLOCK() - int1)) * 4));
    var int4 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    var int5 = -1;
    if ((int2 != -1)) {
        IF_SETTRANS(int3, comp(744, 17));  // loginscreen:nxt_background_graphic_fade_0
        IF_SETTRANS(int3, comp(744, 18));  // loginscreen:nxt_background_graphic_fade_1
        IF_SETTRANS(int3, comp(744, 19));  // loginscreen:nxt_background_graphic_fade_2
        IF_SETTRANS(int3, comp(744, 20));  // loginscreen:nxt_background_graphic_fade_3
        IF_SETTRANS(int3, comp(744, 21));  // loginscreen:nxt_background_graphic_fade_4
        IF_SETTRANS(int3, comp(744, 22));  // loginscreen:nxt_background_graphic_fade_5
        IF_SETTRANS(int3, comp(744, 23));  // loginscreen:nxt_background_graphic_fade_6
        IF_SETTRANS(int3, comp(744, 24));  // loginscreen:nxt_background_graphic_fade_7
        IF_SETTRANS(int3, comp(744, 25));  // loginscreen:nxt_background_graphic_fade_8
    };
    if ((int2 == -1)) {
        IF_SETTRANS(int3, int0);
        if ((int0 == comp(744, 14))) {  // loginscreen:background_fader
            IF_SETTRANS((255 - int3), comp(744, 30));  // loginscreen:runescape_logo
        };
    };
    if ((int3 == 255)) {
        if ((int0 != comp(-1, 65535))) {
            IF_SETHIDE(true, int0);
            IF_SETONTIMER(callback(), int0);
        };
        if (((int2 != -1) && (int0 == comp(744, 14)))) {  // loginscreen:background_fader
            IF_SETHIDE(true, comp(744, 15));  // loginscreen:background_fader_image
        };
    };
    return;
}