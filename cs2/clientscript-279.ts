//
function script279(int0: int): int {
    var int1 = script13415(int0);
    if ((int1 == -1 as struct)) {
        return 0;
    };
    var int2 = -1 as struct;
    var int3 = 1;
    var int4 = -1;
    while ((int3 <= 6)) {
        switch (int3) {
            case 1: {
                int2 = struct_getparam(int1, 3448);
                break;
            }
            case 2: {
                int2 = struct_getparam(int1, 3449);
                break;
            }
            case 3: {
                int2 = struct_getparam(int1, 3450);
                break;
            }
            case 4: {
                int2 = struct_getparam(int1, 3451);
                break;
            }
            case 5: {
                int2 = struct_getparam(int1, 3452);
                break;
            }
            case 6: {
                int2 = struct_getparam(int1, 3453);
                break;
            }
        };
        if ((((varbitplayer_38842 == 1) && (int2 != -1 as struct)) && (struct_getparam(int2, 7130) != -1 as struct))) {
            int2 = struct_getparam(int2, 7130);
        };
        if ((int2 != -1 as struct)) {
            switch (struct_getparam(int2, 5721)) {
                case -1: {
                    if ((struct_getparam(int1, 5720) == true)) {
                        return int3;
                    };
                    break;
                }
                case 1: {
                    return int3;
                }
            };
        };
        int3 = (int3 + 1);
    };
    return 0;
}