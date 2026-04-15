//
function script13191(int0: component, int1: int): [string, graphic] {
    if ((int1 < 0)) {
        return ["", -1 as graphic];
    };
    var string0 = "";
    var int2 = -1 as graphic;
    var int3 = -1 as obj;
    if ((int1 < 28)) {
        if (((int0 != comp(1844, 1)) && (varplayer_6808 > 0))) {
            int3 = INV_GETOBJ(93 as inv, int1);
            if ((script13088(int3) == 1)) {
                string0 = OC_NAME(int3);
            };
        };
    } else {
        switch ((int1 - 28)) {
            case 0: {
                string0 = `Buy ${struct_getparam(32103, 2533)}`;
                break;
            }
            case 1: {
                string0 = `Buy ${struct_getparam(32104, 2533)}`;
                break;
            }
            case 2: {
                string0 = `Buy ${struct_getparam(32105, 2533)}`;
                break;
            }
        };
        if ((STRING_LENGTH(string0) > 0)) {
            int2 = 29326 as graphic;
        };
    };
    return [string0, int2];
}