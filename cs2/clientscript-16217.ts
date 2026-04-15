//
function script16217(int0: component, int1: component, int2: component, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    var int8 = 0;
    var int9 = ((int7 * 2) + (int3 * int6));
    if (((int9 - int7) > IF_GETWIDTH(int0))) {
        IF_SETSCROLLSIZE(int9, 0, int0);
        if ((int5 > -1)) {
            int8 = int5;
        } else if ((int4 > -1)) {
            int8 = (int4 * int6);
        };
        IF_SETSCROLLPOS(int8, 0, int0);
        IF_SETPARAM_INT(5946, int8, int0);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        IF_SETPARAM_INT(5946, 0, int0);
        CC_DELETEALL(int2);
        IF_SETHIDE(true, int1);
        return;
    };
    script8937(int2, int0, 30756 as struct);
    IF_SETHIDE(false, int1);
    if ((int6 > 132)) {
        IF_SETPARAM_INT(6315, (45 * 3), int2);
    } else {
        var int6 = (int6 * 3);
    };
    CC_CREATE(int1, 5, 0);
    CC_SETGRAPHIC(12878 as graphic);
    CC_SETSIZE(100, 0, 0, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETNOCLICKTHROUGH(true);
    CC_SETONCLICK(callback(script16218, int0, int1, int2, -1, int6, 1, 25));
    CC_SETMOUSEOVERCURSOR(7);
    CC_CREATE(int1, 5, 1);
    CC_SETGRAPHIC(12878);
    CC_SETHFLIP(1);
    CC_SETSIZE(100, 0, 0, 1);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETNOCLICKTHROUGH(1);
    CC_SETONCLICK(callback(script16218, int0, int1, int2, 1, int6, 1, 25));
    CC_SETMOUSEOVERCURSOR(6);
    return;
}