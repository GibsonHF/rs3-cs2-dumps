//
function script10290(int0: obj, int1: inv, int2: int, int3: struct, int4: component, int5: component, int6: int, string0: string): int {
    if (((INV_GETOBJ(int1, int2) != int0) || (INV_GETNUM(int1, int2) == 0))) {
        return int6;
    };
    if ((OC_HASVAROBJ(int0) == 0)) {
        return int6;
    };
    var int7 = item_getparam(int0, 8605);
    var int8 = -1 as obj;
    var int9 = -1;
    while ((++int9 < int7)) {
        int8 = script9692(int1, int2, int9);
        if ((int8 != -1 as obj)) {
            var int6 = script7235(script3509(int8), string0, int3, int4, int5, int6);
        };
    };
    return int6;
}