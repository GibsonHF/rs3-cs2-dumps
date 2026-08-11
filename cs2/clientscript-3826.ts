//
function script3826(int0: number, int1: number): void {
    var int2 = script8552(int1);
    var int3 = script8553(int1);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    [int4, int5, int6] = script8548(int1);
    if (((int4 - int5) == int6)) {
        if ((int0 == 0)) {
            int7 = 0;
        } else if ((int5 == 0)) {
            if ((int0 == 1)) {
                int7 = int4;
            } else {
                return;
            };
        } else {
            return;
        };
    } else if ((int5 == 0)) {
        if ((int0 == 1)) {
            int7 = int4;
        } else {
            return;
        };
    } else {
        return;
    };
    if (((int3 != comp(-1, 65535)) && (IF_GETHIDE(comp(276, 27)) == false))) {  // toplevel_v2_mobile:chat_panel
        IF_SETHIDE(false, int3);
        script72(int3, int2, int7);
        IF_SETONSCROLLWHEEL(callback(script36, int3, int2, -2147483646), int2);
        script14178(int3, int2);
    };
    script8549(int1, IF_GETSCROLLHEIGHT(int2), IF_GETSCROLLY(int2), IF_GETHEIGHT(int2));
    return;
}