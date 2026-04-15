//
function script15524(int0: int): [int, int] {
    var int1 = cc_getparam(679);
    var int2 = cc_getparam(678);
    var int3 = (int1 + int0);
    if ((int3 < int2)) {
        int3 = (int3 + 360);
    };
    var int4 = (int3 - int2);
    if ((int2 < int3)) {
        int2 = (int2 + 360);
    };
    var int5 = (int2 - int3);
    return [int4, int5];
}