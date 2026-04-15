//
function script15407(): void {
    var int0 = IF_GETWIDTH(comp(264, 10));
    var int1 = IF_GETHEIGHT(comp(264, 10));
    var int2 = IF_GETX(comp(264, 16));
    var int3 = IF_GETY(comp(264, 16));
    var int4 = IF_GETWIDTH(comp(264, 16));
    var int5 = IF_GETHEIGHT(comp(264, 16));
    IF_SETSIZE(int2, 0, 0, 1, comp(264, 11));
    IF_SETSIZE(((int0 - int2) - int4), 0, 0, 1, comp(264, 12));
    IF_SETSIZE(0, int3, 1, 0, comp(264, 13));
    IF_SETSIZE(0, ((int1 - int3) - int5), 1, 0, comp(264, 14));
    IF_SETONTIMER(callback(script4156, int0, int1), comp(264, 10));
    return;
}