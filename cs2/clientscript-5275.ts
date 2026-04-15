//
function script5275(int0: struct): int {
    var int1 = struct_getparam(int0, 7665);
    var int2 = struct_getparam(int0, 7666);
    var int3 = struct_getparam(int0, 7667);
    var int4 = ((int1 + SCALE(script2916(), 100, int2)) + SCALE(varbitplayer_1668, 100, int3));
    if ((varbitplayer_27168 == 1)) {
        int4 = (int4 / 10);
    };
    return int4;
}