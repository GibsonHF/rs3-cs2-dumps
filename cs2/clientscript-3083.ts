//
function script3083(int0: component): void {
    if (((int0 == comp(-1, 65535)) || (IF_GETHIDE(int0) == true))) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = GET_MOUSEX();
    var int6 = GET_MOUSEY();
    if ((IF_FIND(int0) == 1)) {
        int1 = (script6355() - 20);
        int2 = (script6356() - 20);
        int3 = (CC_GETWIDTH() + 40);
        int4 = ((CC_GETHEIGHT() + IF_GETHEIGHT(int0)) + 40);
        if (((((int5 >= int1) && (int5 <= (int1 + int3))) && (int6 >= int2)) && (int6 <= (int2 + int4)))) {
            return;
        };
    };
    IF_SETHIDE(true, int0);
    IF_SETONTIMER(callback(), int0);
    return;
}