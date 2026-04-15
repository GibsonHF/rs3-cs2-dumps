//
function script9867(int0: obj, int1: obj): string {
    if ((item_getparam(int0, 4338) != -1 as obj)) {
        var int0 = item_getparam(int0, 4338);
    };
    switch (script9865(int0, int1)) {
        case 1: {
            return script17732(28430, int0);
        }
        case 2: {
            return script17732(28430, int1);
        }
    };
    return struct_getparam(28430, 2795);
}