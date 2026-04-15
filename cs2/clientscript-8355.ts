//
function script8355(int0: int, int1: int): void {
    if ((int0 == int1)) {
        return;
    };
    var int2 = script10405(int0);
    var int3 = script10405(int1);
    var int4 = script8418(int3, 0);
    var int5 = struct_getparam(int2, 3509);
    var int6 = struct_getparam(int3, 3509);
    var int7 = struct_getparam(int3, 3508);
    if ((((int5 == comp(-1, 65535)) || (int6 == comp(-1, 65535))) || (int7 == comp(-1, 65535)))) {
        return;
    };
    var int8 = script8374(int5);
    CC_DELETEALL(int6);
    script8363(int1);
    var int9 = 0;
    while ((int9 < int8)) {
        script8362(int1, script8371(int5, int9), int9);
        int9 = (int9 + 1);
    };
    IF_SETSIZE(IF_GETWIDTH(int5), IF_GETHEIGHT(int5), 0, 0, int6);
    IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(int5), IF_GETSCROLLHEIGHT(int5), int6);
    IF_SETSCROLLPOS(IF_GETSCROLLX(int5), IF_GETSCROLLY(int5), int6);
    script8359(int1, int8, script8372(int6, int1));
    script8378(0, int1);
    return;
}