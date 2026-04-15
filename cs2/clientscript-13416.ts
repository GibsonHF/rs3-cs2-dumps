//
function script13416(int0: struct, int1: int): struct {
    var int2 = -1 as struct;
    switch (int1) {
        case 1: {
            int2 = struct_getparam(int0, 3448);
            break;
        }
        case 2: {
            int2 = struct_getparam(int0, 3449);
            break;
        }
        case 3: {
            int2 = struct_getparam(int0, 3450);
            break;
        }
        case 4: {
            int2 = struct_getparam(int0, 3451);
            break;
        }
        case 5: {
            int2 = struct_getparam(int0, 3452);
            break;
        }
        case 6: {
            int2 = struct_getparam(int0, 3453);
            break;
        }
    };
    if ((((varbitplayer_38842 == 1) && (int2 != -1 as struct)) && (struct_getparam(int2, 7130) != -1 as struct))) {
        int2 = struct_getparam(int2, 7130);
    };
    return int2;
}