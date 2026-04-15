//
function script11856(int0: component, int1: component): void {
    var int2 = MAX(1, script7081());
    var int3 = MAX(0, SCALE(script5256(), int2, IF_GETHEIGHT(int1)));
    IF_SETSIZE(IF_GETWIDTH(int0), int3, 0, 0, int0);
    return;
}