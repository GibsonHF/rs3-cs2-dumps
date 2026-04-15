//
function script11142(int0: component, int1: component, int2: int, int3: obj, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int): void {
    var int10 = (int2 * 40);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETOBJECT(int3, -1);
    CC_SETPOSITION((int10 + 2), 10, 0, 0);
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(int3), int0, CC_GETID()));
    if ((((int1 != -1) && (int3 != -1 as obj)) && (CC_FIND[1](int1, item_getparam(int3, 4882)) == 1))) {
        CC_SETHIDE[1](false);
        CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
    };
    script11141(int0, int10, 50, int4, 1, int3);
    script11141(int0, int10, 80, int5, 2, int3);
    script11141(int0, int10, 110, int6, 3, int3);
    script11141(int0, int10, 140, int7, 4, int3);
    script11141(int0, int10, 170, int8, 5, int3);
    script11141(int0, int10, 200, int9, 6, int3);
    return;
}