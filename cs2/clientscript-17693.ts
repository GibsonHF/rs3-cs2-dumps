//
function script17693(int0: obj, int1: obj): int {
    if ((item_getparam(int0, 4338) != -1 as obj)) {
        var int0 = item_getparam(int0, 4338);
    };
    switch (script9865(int0, int1)) {
        case 1: {
            return item_getparam(int0, 4332);
        }
        case 2: {
            return item_getparam(int1, 4332);
        }
    };
    return 0;
}