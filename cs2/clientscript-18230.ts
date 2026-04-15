//
function script18230(int0: struct): void {
    var int1 = 0;
    var int2 = 0;
    int1 = script12869(int0);
    int2 = MIN(SCALE(int1, (struct_getparam(int0, 6142) * struct_getparam(int0, 6144)), IF_GETWIDTH(comp(1343, 138))), IF_GETWIDTH(comp(1343, 138)));
    if ((CC_FIND(comp(1343, 138), 0) == 1)) {
        CC_SETTEXT(`${TOSTRING_LOCALISED((int1 / struct_getparam(int0, 4926)), 1)}/${TOSTRING_LOCALISED(((struct_getparam(int0, 6142) * struct_getparam(int0, 6144)) / struct_getparam(int0, 4926)), 1)}`);
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = -1 as graphic;
    var int8 = struct_getparam(int0, 6146);
    var int9 = comp(1343, 139);
    while ((int3 < 7)) {
        if ((CC_FIND(int9, int3) == 1)) {
            int6 = enum_getvalue(0, 33, int8, int3);
            [int5, int4] = script18229(int3, 1);
            int7 = item_getparam(int6, 6276);
            if (((int1 >= int4) && (int5 == 0))) {
                int7 = item_getparam(int6, 4909);
            } else if ((int1 < int4)) {
                int5 = 2;
                int7 = item_getparam(int6, 4912);
            };
            CC_SETGRAPHIC(int7);
            script15824(int0, int9, int7, int6, 1, int4, int5);
        };
        int3 = (int3 + 1);
    };
    IF_SETONTIMER(callback(script12886, 88014988, 88014974, 88014975, int2), 88014988);
    return;
}