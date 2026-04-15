//
function script2577(int0: component, int1: int, int2: struct, int3: int): void {
    if ((MODULO(CLIENTCLOCK(), (50 * 2)) != 0)) {
        return;
    };
    var int4 = -1 as obj;
    var int5 = 0;
    if ((CC_FIND[1](int0, int1) == 1)) {
        if ((int2 == -1 as struct)) {
            CC_SETONTIMER[1](callback());
            return;
        };
        var int3 = (int3 + 1);
        [int4, int5, int5] = script2615(int2, int3);
        if ((int4 == -1 as obj)) {
            int3 = 1;
            [int4, int5, int5] = script2615(int2, int3);
            if ((int4 == -1 as obj)) {
                CC_SETONTIMER[1](callback());
                return;
            };
        };
        CC_SETOBJECT_NONUM[1](int4, 0);
        CC_SETONTIMER[1](callback(script2577, -2147483645, -2147483643, int2, int3));
    };
    return;
}