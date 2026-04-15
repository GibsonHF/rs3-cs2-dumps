//
function script3784(int0: component, int1: component, int2: component): void {
    var int3 = IF_GETSCROLLHEIGHT(int2);
    var int4 = IF_GETHEIGHT(int1);
    var int5 = IF_GETHEIGHT(int0);
    var int6 = IF_GETSCROLLY(int2);
    var int7 = 0;
    var int8 = 0;
    if ((int6 > 0)) {
        int7 = (int3 - IF_GETHEIGHT(int2));
        if ((int7 == 0)) {
            int7 = 1;
        };
        if ((int6 > int7)) {
            IF_SETSCROLLPOS(IF_GETSCROLLX(int2), int7, int2);
            int6 = int7;
        };
        int8 = SCALE(int6, int7, (int4 - int5));
        int8 = MIN(MAX(int8, 0), (int4 - int5));
    };
    IF_SETONCLICK(callback(script3785, int1, int2, -2147483646, int0), int1);
    if ((((int0 != -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int1, 1) == 1))) {
        CC_SETDRAGGABLE(int1, -1);
        CC_SETDRAGRENDERBEHAVIOUR(3);
        CC_SETONDRAG(callback(script3787, int1, int2, -2147483646, 0, int0));
        CC_SETONDRAGCOMPLETE(callback(script3787, int1, int2, -2147483646, 1, int0));
    };
    IF_SETONSCROLLWHEEL(callback(script3789, int1, int2, -2147483646, int0), int1);
    IF_SETONSCROLLWHEEL(callback(script3789, int1, int2, -2147483646, int0), int2);
    script3800(int1, int2, int0);
    return;
}