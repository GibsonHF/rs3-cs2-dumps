//
function script8387(int0: int, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = script10405(int4);
    if ((int5 == -1 as struct)) {
        return;
    };
    var int6 = struct_getparam(int5, 3494);
    var int7 = struct_getparam(int5, 3503);
    if ((int7 == comp(-1, 65535))) {
        return;
    };
    var int8 = script1886(int4);
    if (((varbitplayer_27169 == 0) && (int6 != -1 as struct))) {
        var int2 = MIN(script20544(int6), MAX(int2, script20540(int6)));
        var int3 = MIN(script20545(int6), MAX(int3, script20541(int6)));
    };
    IF_SETSIZE(int2, int3, 0, 0, int7);
    IF_SETPOSITION(int0, int1, 0, 0, int7);
    script8390(int4);
    return;
}