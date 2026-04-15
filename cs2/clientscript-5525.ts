//
function script5525(int0: component, int1: int): void {
    var int2 = GET_MOUSEX();
    var int3 = GET_MOUSEY();
    if ((varclient_6539 == true)) {
        varclient_6539 = false;
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = comp(-1, 65535);
    var int9 = 2;
    if ((CC_FIND(int0, int1) == 1)) {
        int8 = CC_GETLAYER();
        if ((int8 != comp(-1, 65535))) {
            [int4, int5, int6, int7] = [(script3365(int8) + int9), (script3366(int8) + int9), (IF_GETHEIGHT(int8) - (int9 * 2)), (IF_GETWIDTH(int8) - (int9 * 2))];
            if (((((int2 < int4) || (int3 < int5)) || (int2 > (int4 + int7))) || (int3 > (int5 + int6)))) {
                return;
            };
        };
        [int4, int5, int6, int7] = [script6355(), script6356(), CC_GETHEIGHT(), CC_GETWIDTH()];
        if (((((int2 >= int4) && (int2 < (int4 + int7))) && (int3 >= int5)) && (int3 < (int5 + int6)))) {
            GETDEFAULTWINDOWMODE(cc_getparam(7258), cc_getparam(7259), script8401(), script8402());
            script14228();
            MINIMENU_CLOSE();
        };
    };
    return;
}