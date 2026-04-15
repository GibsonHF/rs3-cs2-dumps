//
function script2542(int0: obj, int1: int): obj {
    if ((int0 == -1 as obj)) {
        script12478("$item is null, no upgrade can be found.");
        return -1 as obj;
    };
    if ((item_getparam(int0, 7808) == true)) {
        return int0;
    };
    if ((item_getparam(int0, 7806) != -1 as obj)) {
        var int0 = item_getparam(int0, 7806);
    };
    if ((int1 == 0)) {
        return int0;
    };
    var int2 = item_getparam(int0, 7805);
    var int3 = 0;
    if ((int1 == 50)) {
        int3 = 1;
        var int1 = (int2 + 1);
    } else if ((int1 > int2)) {
        int1 = int2;
    };
    var int4 = 1;
    while ((int4 <= int1)) {
        if ((item_getparam(int0, 7807) != -1 as obj)) {
            int0 = item_getparam(int0, 7807);
        } else {
            return int0;
        };
        int4 = (int4 + 1);
    };
    if ((int3 == 1)) {
        if ((item_getparam(int0, 7803) == 1)) {
            return int0;
        };
        script12478(`We failed to find a burial item for item ${OC_NAME(int0)}`);
        return int0;
    };
    if ((item_getparam(int0, 7804) == int1)) {
        return int0;
    };
    script12478(`We've failed to find the correct upgrade for item ${OC_NAME(int0)}`);
    return int0;
}