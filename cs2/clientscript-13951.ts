//
function script13951(int0: component, int1: int): void {
    var int2 = struct_getparam(script10405(1000), 3503);
    var int3 = IF_GETWIDTH(int2);
    var int4 = IF_GETHEIGHT(int2);
    if ((int1 > 0)) {
        if (((int4 - 189) > 555)) {
            IF_SETSIZE(int1, 189, 0, 1, int0);
        } else {
            IF_SETSIZE(int1, 555, 0, 0, int0);
        };
    };
    if ((int3 < 900)) {
        IF_SETPOSITION(5, 0, 0, 0, int0);
    } else {
        IF_SETPOSITION(0, 0, 1, 0, int0);
    };
    return;
}