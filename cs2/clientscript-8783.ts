//
function script8783(int0: int, int1: int, int2: component): void {
    IF_SETONRESIZE(callback(), int2);
    var int3 = ENUM_GETOUTPUTCOUNT(7717);
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = 1;
    var int8 = script10405(int0);
    var int9 = -1;
    if ((int8 != -1)) {
        int9 = struct_getparam(int8, 3503);
        if (((int9 != comp(-1, 65535)) && (IF_GETHIDE(int9) == false))) {
            while ((int1 >= 0)) {
                int4 = enum_getvalue(0, 0, 7717 as cs2enum, int1);
                int5 = script10405(int4);
                if ((int5 != -1 as struct)) {
                    int6 = struct_getparam(int5, 3503);
                    if (((((int6 != comp(-1, 65535)) && (IF_GETHIDE(int6) == false)) && (struct_getparam(int5, 3529) == false)) && (script8394(int9, int6) == 1))) {
                        if ((script12612(int5) == true)) {
                            script8356(int4, int0, script8374(struct_getparam(int5, 3509)), 0, 0);
                            int7 = 1;
                            var int1 = 0;
                        } else {
                            int7 = 0;
                        };
                        varclient_3472 = 1;
                    };
                };
                int1 = (int1 - 1);
            };
            if (((int7 == 0) && (script8786(int0, 0) == 0))) {
                IF_SETONRESIZE(callback(script8782, int0, int1, -2147483645, IF_GETX(int9), IF_GETY(int9), IF_GETWIDTH(int9), IF_GETHEIGHT(int9), 1), int2);
                IF_CALLONRESIZE(int2);
                varclient_3474 = (varclient_3474 + 1);
            };
        };
    };
    script8784();
    return;
}