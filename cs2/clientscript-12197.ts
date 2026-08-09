//
function script12197(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): number {
    if (((INV_GETOBJ(int1, int2) != int0) || (INV_GETNUM(int1, int2) == 0))) {
        return int6;
    };
    if ((OC_HASVAROBJ(int0) == 0)) {
        return int6;
    };
    var int7 = 0;
    if (((int6 > 0) && (CC_FIND(int5, (int6 - 1)) == 1))) {
        int7 = (CC_GETY() + CC_GETHEIGHT());
    };
    define_array[23](4);
    define_array[65559](4);
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    var int11 = 0;
    var int12 = INV_GETVAR(int1, int2, 30215);
    var int13 = INV_GETVAR(int1, int2, 30217);
    var int14 = INV_GETVAR(int1, int2, 30219);
    var int15 = INV_GETVAR(int1, int2, 30221);
    [int8, int9] = script12198(int12, INV_GETVAR(int1, int2, 30216));
    if ((int8 != -1)) {
        pop_array(int10, int8);
        pop_array[1](int10, int9);
        int10 = (int10 + 1);
    };
    [int8, int9] = script12198(int13, INV_GETVAR(int1, int2, 30218));
    if ((int8 != -1)) {
        pop_array(int10, int8);
        pop_array[1](int10, int9);
        int10 = (int10 + 1);
    };
    int11 = int10;
    [int8, int9] = script12198(int14, INV_GETVAR(int1, int2, 30220));
    if ((int8 != -1)) {
        pop_array(int10, int8);
        pop_array[1](int10, int9);
        int10 = (int10 + 1);
    };
    [int8, int9] = script12198(int15, INV_GETVAR(int1, int2, 30222));
    if ((int8 != -1)) {
        pop_array(int10, int8);
        pop_array[1](int10, int9);
        int10 = (int10 + 1);
    };
    if ((int10 == 0)) {
        return int6;
    };
    if (((int11 == int10) || (int11 == 0))) {
        int11 = -1;
    };
    var int16 = 16;
    var int17 = 6;
    var int18 = IF_GETWIDTH(int4);
    var int19 = 300;
    var int20 = (((int10 * (32 + int17)) - int17) + (int16 * 2));
    if ((int18 < int20)) {
        int18 = MIN(int20, 300);
    };
    var int21 = ((32 + int7) + int16);
    IF_SETSIZE(int18, int21, 0, 0, int4);
    var int22 = int16;
    var int23 = 0;
    if ((struct_getparam(int3, 4203) == 1)) {
        int22 = (((32 - (int10 * (32 + int17))) + int17) / 2);
        if ((int11 > 0)) {
            int22 = (int22 - int17);
        };
        int23 = 1;
    };
    var int24 = 0;
    while ((int24 < int10)) {
        stack(int5);
        stack(5);
        stack(int6);
        var int6 = (int6 + 1);
        CC_CREATE();
        CC_SETSIZE(32, 32, 0, 0);
        CC_SETPOSITION(int22, int7, int23, 0);
        CC_SETGRAPHIC(push_array(int24));
        if ((push_array[1](int24) != -1)) {
            stack(int5);
            stack(5);
            stack(int6);
            int6 = (int6 + 1);
            CC_CREATE();
            CC_SETSIZE(32, 32, 0, 0);
            CC_SETPOSITION(int22, int7, int23, 0);
            CC_SETGRAPHIC(push_array[1](int24));
        };
        int22 = ((int22 + 32) + int17);
        int24 = (int24 + 1);
        if ((int11 == int24)) {
            stack(int5);
            stack(9);
            stack(int6);
            int6 = (int6 + 1);
            CC_CREATE();
            if ((int23 == 1)) {
                CC_SETPOSITION((int22 - (32 / 2)), (int7 + 6), int23, 0);
            } else {
                CC_SETPOSITION(int22, (int7 + 6), int23, 0);
            };
            CC_SETSIZE(0, (32 - 12), 0, 0);
            script11024(7);
            int22 = ((int22 + int17) + 1);
        };
    };
    var int25 = INV_GETVAR(int1, int2, 30212);
    var int26 = script12071(int25);
    if (((int26 >= 20) || (script20157() == 1))) {
        if (((((script20178(script12076(int12)) == 1) || (script20178(script12076(int13)) == 1)) || (script20178(script12076(int14)) == 1)) || (script20178(script12076(int15)) == 1))) {
            IF_SETSIZE(int18, (int21 + 16), 0, 0, int4);
            stack(int5);
            stack(5);
            stack(int6);
            int6 = (int6 + 1);
            CC_CREATE();
            CC_SETGRAPHIC(31744 as graphic);
            CC_SETSIZE(16, 16, 0, 0);
            if (((int14 <= 0) || (int15 <= 0))) {
                CC_SETPOSITION(1, (int7 + 32), 1, 0);
            } else {
                CC_SETPOSITION(-2, (int7 + 32), 1, 0);
            };
        };
    };
    return int6;
}