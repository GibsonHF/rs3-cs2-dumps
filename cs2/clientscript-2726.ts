//
function script2726(int0: component, int1: int, int2: int): void {
    var int3 = 18;
    var int4 = 16;
    var int5 = 5;
    var int6 = 4;
    var int7 = MIN(int5, (int2 + 1));
    var int8 = ((int2 / int5) + 1);
    var int9 = ((MODULO(int2, int5) * (int3 + int6)) + int6);
    var int10 = (((int2 / int5) * (int4 + int6)) + int6);
    CC_CREATE(int0, 5, int2);
    CC_SETSIZE(int3, int4, 0, 0);
    CC_SETOBJECT(enum_getvalue(0, 33, 5734 as cs2enum, int1), -1);
    CC_SETPOSITION(int9, int10, 0, 0);
    var string0 = OC_NAME(enum_getvalue(0, 33, 5734 as cs2enum, int1));
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    var int11 = ((int7 * (int3 + int6)) + int6);
    var int12 = ((int8 * (int4 + int6)) + int6);
    IF_SETSIZE(int11, int12, 0, 0, 61931545);
    return;
}