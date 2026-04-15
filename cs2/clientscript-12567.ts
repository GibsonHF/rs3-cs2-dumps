//
function script12567(int0: component, int1: component, int2: component): void {
    var int3 = script12564();
    var int4 = IF_GETHEIGHT(int0);
    var int5 = IF_GETWIDTH(int0);
    int3 = SCALE(int5, 100, int3);
    IF_SETSIZE(int3, int4, 0, 0, int1);
    IF_SETSIZE(int3, int4, 0, 0, int2);
    return;
}