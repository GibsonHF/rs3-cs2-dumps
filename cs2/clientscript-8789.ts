//
function script8789(int0: component, int1: int, int2: component, int3: int, int4: int): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((int1 == -1)) {
        if (((((script8403(int0) >= (0 - int4)) && (script8403(int0) <= (IF_GETWIDTH(int0) + int4))) && (script8404(int0) >= (0 - int3))) && (script8404(int0) <= (IF_GETHEIGHT(int0) + int3)))) {
            return;
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        int7 = CC_GETWIDTH();
        int8 = CC_GETHEIGHT();
        [int5, int6] = script8406(int0, int1);
        if (((((GET_MOUSEX() > (int5 - int4)) && (GET_MOUSEX() < ((int5 + int7) + int4))) && (GET_MOUSEY() > (int6 - int3))) && (GET_MOUSEY() < ((int6 + int8) + int3)))) {
            return;
        };
    };
    if (((((script8403(int2) >= (0 - int4)) && (script8403(int2) <= (IF_GETWIDTH(int2) + int4))) && (script8404(int2) >= (0 - int3))) && (script8404(int2) <= (IF_GETHEIGHT(int2) + int3)))) {
        return;
    };
    if ((((IF_GETHIDE(comp(1477, 785)) == false) && (script8403(comp(1477, 785)) >= 0)) && (script8403(comp(1477, 785)) <= IF_GETWIDTH(comp(1477, 785))))) {
        return;
    };
    script2256(int2);
    return;
}