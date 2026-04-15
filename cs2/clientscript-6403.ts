//
function script6403(int0: int): unknown_int {
    var int1 = struct_getparam(script10405(int0), 3503);
    if ((int1 == comp(-1, 65535))) {
        return 0;
    };
    var int2 = IF_GETWIDTH(int1);
    var int3 = IF_GETHEIGHT(int1);
    if ((((((IF_GETHIDE(int1) == false) && (script8403(int1) >= 0)) && (script8403(int1) <= int2)) && (script8404(int1) >= 0)) && (script8404(int1) <= int3))) {
        return 1;
    };
    return 0;
}