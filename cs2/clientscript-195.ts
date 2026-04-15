//[clientscript,friends_chat_onload]
function script195(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    var int3 = 19;
    var int4 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int3 = 27;
        int4 = 32 as fontmetrics;
        IF_SETHIDE(true, comp(1427, 16));
    };
    IF_SETONCLANTRANSMIT(callback(script203, int2), int0);
    IF_SETONFRIENDTRANSMIT(callback(script203, int2), int0);
    var int5 = script8049(int2, 72679457);
    var int6 = script8049(int2, 72679458);
    var int7 = script8049(int2, 72679460);
    var int8 = script8049(int2, 72679461);
    var int9 = script8049(int2, 72679459);
    if ((WORLDLIST_FETCH() == 0)) {
        IF_SETONTIMER(callback(script6306, int2, int7), int7);
    };
    script1600(int2);
    var int10 = 0;
    var int11 = 0;
    while ((int10 < 500)) {
        CC_CREATE(int5, 4, int10);
        CC_SETSIZE(0, int3, 1, 0);
        CC_SETPOSITION(8, int11, 0, 0);
        CC_SETCOLOUR(10787197);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTFONT(int4);
        CC_SETTEXTSHADOW(false);
        CC_SETLINKFRIENDCHAT(int10);
        CC_SETMAXLINES(1);
        CC_CREATE(int7, 4, int10);
        CC_SETSIZE(0, int3, 1, 0);
        CC_SETPOSITION(0, int11, 2, 0);
        CC_SETTEXTFONT(int4);
        CC_SETTEXTSHADOW(false);
        CC_CREATE(int9, 5, int10);
        CC_SETSIZE(24, 12, 0, 0);
        CC_SETPOSITION(2, ((int11 + ((int3 - 19) / 2)) + 3), 0, 0);
        CC_CREATE(int8, 4, int10);
        CC_SETSIZE(0, int3, 1, 0);
        CC_SETPOSITION(0, int11, 1, 0);
        CC_SETTEXTFONT(int4);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_CREATE(int6, 5, int10);
        CC_SETPOSITION(1, ((int11 + ((int3 - 19) / 2)) + 5), 0, 0);
        CC_SETSIZE(9, 9, 0, 0);
        int11 = (int11 + int3);
        int10 = (int10 + 1);
    };
    return;
}