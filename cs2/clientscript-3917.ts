//
function script3917(int0: struct, int1: int, int2: int, int3: int): [unknown_int, string] {
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 8973) == true)) {
            return [0, ""];
        };
        if ((struct_getparam(int0, 8979) == true)) {
            return [0, ""];
        };
    };
    if ((int1 == 1)) {
        return [0, "OWNED"];
    };
    switch (int2) {
        case -1: {
            return [0, ""];
        }
        case 0: {
            return [0, "FREE!"];
        }
    };
    if ((int3 != int2)) {
        return [1, `${TOSTRING_LOCALISED(int2, 1)}   <str=9B9B9B><col=9B9B9B>${TOSTRING_LOCALISED(int3, 1)}</col></str>`];
    };
    return [0, TOSTRING_LOCALISED(int2, 1)];
}