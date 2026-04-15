//
function script5335(int0: struct): int {
    var int1 = struct_getparam(int0, 7668);
    var int2 = struct_getparam(int0, 7669);
    var int3 = (int1 + SCALE(script2916(), 100, int2));
    if ((varbitplayer_27168 == 1)) {
        int3 = (int3 / 10);
    };
    return int3;
}