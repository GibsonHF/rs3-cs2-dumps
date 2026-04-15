//
function script9716(int0: obj, int1: inv, int2: int, int3: component, int4: component, int5: int, int6: int): int {
    if (((INV_GETOBJ(int1, int2) != int0) || (INV_GETNUM(int1, int2) == 0))) {
        return int5;
    };
    if ((OC_HASVAROBJ(int0) == 0)) {
        return int5;
    };
    var int7 = 0;
    if (((int5 > 0) && (CC_FIND(int4, (int5 - 1)) == 1))) {
        int7 = (CC_GETY() + CC_GETHEIGHT());
    };
    var int8 = 0;
    var int9 = item_getparam(int0, 8605);
    var int10 = -1;
    while ((++int10 < int9)) {
        if ((script9693(int1, int2, int10) > 0)) {
            int8 = (int8 + 1);
        };
    };
    if ((int8 == 0)) {
        return int5;
    };
    var int11 = 2;
    var int12 = IF_GETWIDTH(int3);
    var int13 = (((int8 * (36 + int11)) - int11) + (2 * 16));
    if ((int12 < int13)) {
        int12 = MIN(int13, 300);
    };
    var int14 = ((32 + int7) + 16);
    IF_SETSIZE(int12, int14, 0, 0, int3);
    var int15 = (((36 - (int8 * (36 + int11))) + int11) / 2);
    int7 = (int7 + int11);
    var int16 = -1 as obj;
    var int17 = 0;
    var int18 = INV_GETVAR(int1, int2, 50377);
    int10 = -1;
    while ((++int10 < int9)) {
        [int16, int17] = script9689(int1, int2, int10);
        if ((int16 != -1 as obj)) {
            CC_CREATE(int4, 5, int5++);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(int15, int7, 1, 0);
            CC_SETOBJECT_ALWAYSNUM(int16, int17);
            if (((int8 > 1) && (int18 == int10))) {
                CC_SETOUTLINE(2);
            };
            int15 = (int15 + (36 + int11));
        };
    };
    return int5;
}