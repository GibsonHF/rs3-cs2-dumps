//
function script14095(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    if (((CC_FIND(int0, int1) == 1) || (IF_FIND(int0) == 1))) {
        int11 = CC_GETWIDTH();
        if ((int3 == 1)) {
            int11 = (IF_GETWIDTH(IF_GETPARENTLAYER(int0)) - int11);
        };
        int12 = CC_GETHEIGHT();
        if ((int5 == 1)) {
            int12 = (IF_GETHEIGHT(IF_GETPARENTLAYER(int0)) - int12);
        };
        int9 = (int2 - int11);
        int10 = (int4 - int12);
        if ((((int9 == 0) && (int10 == 0)) || ((int6 == 0) && (int7 == 0)))) {
            return;
        };
        if ((int7 > 0)) {
            var int6 = MAX(1, (MAX(ABS(int9), ABS(int10)) / int7));
        };
        CC_SETONTIMER(callback(script14096, int0, int1, 0, (int6 - 1), int11, int9, int3, int12, int10, int5, int8));
    };
    return;
}