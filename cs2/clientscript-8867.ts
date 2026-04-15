//
function script8867(int0: unknown_int): void {
    var int1 = struct_getparam(21300, 3503);
    var int2 = struct_getparam(21300, 3505);
    var int3 = comp(1477, 739);
    if ((int0 == 1)) {
        if ((IF_HASSUB(int2) == 0)) {
            return;
        };
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETHIDE(true, int3);
    } else if ((int0 == 2)) {
        if ((IF_HASSUB(int3) == 0)) {
            return;
        };
        IF_SETHIDE(false, int1);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(false, int3);
    };
    return;
}