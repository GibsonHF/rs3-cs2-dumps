//
function script292(int0: struct, int1: component, int2: int, int3: int): int {
    var int4 = MAX(20, script10082());
    if ((int0 == -1 as struct)) {
        var int0 = 280 as struct;
    };
    CC_CREATE[1](int1, 5, IF_GETNEXTSUBID(int1));
    CC_SETPOSITION[1](int3, (int2 + ((int4 - 20) / 2)), 2, 0);
    CC_SETSIZE[1](20, 20, 0, 0);
    CC_SETTILING[1](false);
    CC_SETGRAPHIC[1](struct_getparam(int0, 130));
    return (int3 + 10);
}