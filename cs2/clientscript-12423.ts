//
function script12423(int0: int, int1: int): boolean {
    var int2 = script13415(int0);
    if ((int2 == -1 as struct)) {
        return false;
    };
    var int3 = -1 as struct;
    switch (int1) {
        case 1: {
            int3 = struct_getparam(int2, 3448);
            break;
        }
        case 2: {
            int3 = struct_getparam(int2, 3449);
            break;
        }
        case 3: {
            int3 = struct_getparam(int2, 3450);
            break;
        }
        case 4: {
            int3 = struct_getparam(int2, 3451);
            break;
        }
        case 5: {
            int3 = struct_getparam(int2, 3452);
            break;
        }
        case 6: {
            int3 = struct_getparam(int2, 3453);
            break;
        }
    };
    if ((((varbitplayer_38842 == 1) && (int3 != -1 as struct)) && (struct_getparam(int3, 7130) != -1 as struct))) {
        int3 = struct_getparam(int3, 7130);
    };
    var int4 = -1;
    if ((int3 != -1 as struct)) {
        int4 = struct_getparam(int3, 5721);
        if ((int4 != -1)) {
            if ((int4 == 1)) {
                return true;
            };
            return false;
        };
    };
    return struct_getparam(int2, 5720);
}