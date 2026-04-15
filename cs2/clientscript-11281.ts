//
function script11281(int0: int, int1: coordgrid): void {
    IF_SETHIDE(false, comp(1422, 18));
    IF_SETHIDE(false, comp(1612, 1));
    var int2 = comp(1612, 3);
    var int3 = comp(1612, 11);
    IF_SETTEXT("Yes", comp(1612, 14));
    IF_SETTEXT("No", comp(1612, 22));
    IF_SETONOP(callback(script10090), comp(1612, 19));
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    IF_SETOP(1, "", int3);
    var int4 = 0;
    while ((int4 < int0)) {
        CC_CREATE(int3, 5, int4);
        int4 = (int4 + 1);
    };
    CC_CREATE(int3, 5, int0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETOP(1, "Select");
    CC_CREATE(int2, 4, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, (IF_GETHEIGHT(int2) - IF_GETY(IF_GETLAYER(int3))), 1, 1);
    if ((int0 <= 33)) {
        CC_SETTEXT(`Teleport to ${enum_getvalue(22, 36, 5726 as cs2enum, int1)}?`);
    } else {
        CC_SETTEXT("Teleport to J-Mod?");
    };
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(1, 1, 0);
    return;
}