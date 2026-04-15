//[proc,notes_click]
function script2449(int0: unknown_int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = script7799(int0, comp(34, 12));
    var int4 = script7799(int0, comp(34, 6));
    var int5 = script7799(int0, comp(34, 15));
    while ((CC_FINDBYCATEGORY(int3, int2, 0) == 1)) {
        CC_SETOP(1, "Select");
        int2 = (int2 + 1);
    };
    if (((varplayer_98 != -1) && (CC_FINDBYCATEGORY(int3, varplayer_98, 0) == 1))) {
        CC_SETOP(1, "Unselect");
        if ((IF_GETHIDE(script7799(int0, comp(34, 13))) == false)) {
            IF_SETHIDE(true, int5);
            return;
        };
        IF_SETHIDE(false, int5);
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, int5);
        IF_SETSIZE(0, CC_GETHEIGHT(), 1, 0, int5);
        if ((int1 == 1)) {
            if ((CC_GETY() < IF_GETSCROLLY(int3))) {
                script157(int4, int3, (CC_GETY() - 5), 1);
            } else if (((CC_GETY() + CC_GETHEIGHT()) > (IF_GETSCROLLY(int3) + IF_GETHEIGHT(int3)))) {
                script157(int4, int3, (((CC_GETY() - IF_GETHEIGHT(int3)) + CC_GETHEIGHT()) + 5), 1);
            };
        };
    } else {
        IF_SETHIDE(true, int5);
    };
    return;
}