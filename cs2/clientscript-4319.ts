//
function script4319(int0: int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(1096, 29);
    var int5 = comp(1096, 19);
    var int6 = 71827491;
    var int7 = 71827492;
    var int8 = comp(1096, 31);
    var int9 = 71827477;
    if ((int0 > 0)) {
        int2 = (int0 - 1);
    } else {
        int2 = 0;
        int3 = IF_GETHEIGHT(int4);
        if ((int1 == 0)) {
            int3 = (int3 + 6);
            IF_SETVFLIP(0, int6);
            IF_SETVFLIP(0, int7);
            IF_SETOP(1, "Hide", int8);
            IF_SETONOP(callback(script4319, 0, 1), int8);
        } else {
            int3 = (int3 - 6);
            IF_SETVFLIP(1, int6);
            IF_SETVFLIP(1, int7);
            IF_SETOP(1, "Show", int8);
            IF_SETONOP(callback(script4319, 0, 0), int8);
        };
        int3 = MIN(int3, 224);
        int3 = MAX(int3, 115);
        IF_SETSIZE(IF_GETWIDTH(int4), int3, 0, 0, int4);
        IF_SETSIZE(IF_GETWIDTH(int5), (int3 - 62), 0, 1, int5);
        if (((int1 == 0) && (int3 >= 224))) {
            IF_SETONTIMER(callback(), int4);
        } else if (((int1 == 1) && (int3 <= 115))) {
            IF_SETONTIMER(callback(), int4);
        } else {
            IF_SETONTIMER(callback(script4319, int2, int1), int4);
        };
        script4302();
    };
    return;
}