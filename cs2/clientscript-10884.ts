//
function script10884(int0: component, int1: struct): void {
    var int2 = struct_getparam(int1, 2802);
    var int3 = -1 as graphic;
    if ((struct_getparam(int1, 8118) == true)) {
        int3 = script11094(int1);
        if ((int3 != -1 as graphic)) {
            int2 = int3;
        };
    };
    var int4 = struct_getparam(int1, 4677);
    var int5 = 1;
    var int6 = -1 as obj;
    var int7 = -1;
    if ((struct_getparam(int1, 8117) == true)) {
        [int6, int7] = script11091(int1);
        if ((int6 != -1 as obj)) {
            int4 = int6;
        };
        if ((int7 != -1)) {
            int5 = int7;
        };
    };
    var int8 = 0;
    if ((CC_FIND[1](int0, 0) == 1)) {
        if (((int2 != -1 as graphic) && (CC_GETGRAPHIC[1]() != int2))) {
            CC_SETGRAPHIC[1](int2);
        } else if (((int4 != -1 as obj) && (CC_GETINVOBJECT[1]() != int4))) {
            CC_SETOBJECT_NONUM[1](int4, int5);
        };
        if (((struct_getparam(int1, 8112) == true) && (struct_getparam(int1, 7216) == true))) {
            int8 = (script11073(int1) - CLIENTCLOCK());
            if (((int8 > 0) && (int8 <= 500))) {
                CC_SETTRANS[1](script11318(int1));
            } else {
                CC_SETTRANS[1](0);
            };
        } else {
            CC_SETTRANS[1](0);
        };
    };
    return;
}