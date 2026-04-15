//
function script8365(int0: int, int1: int): void {
    var int2 = script10405(int1);
    var int3 = struct_getparam(int2, 3503);
    var int4 = script10405(int0);
    var int5 = struct_getparam(int4, 3503);
    if (((int3 == comp(-1, 65535)) || (int5 == comp(-1, 65535)))) {
        return;
    };
    if ((IF_FIND(int5) == 1)) {
        CC_SETHIDE(true);
        script8387(CC_GETX(), CC_GETY(), CC_GETWIDTH(), CC_GETHEIGHT(), int1);
        IF_SETHIDE(false, int3);
        script6739(5);
    };
    script8355(int0, int1);
    script8370(int1, script8372(struct_getparam(int2, 3509), int1));
    script8705(int0);
    script8705(int1);
    script117(int0, int1);
    script13842(int0);
    script13842(int1);
    return;
}