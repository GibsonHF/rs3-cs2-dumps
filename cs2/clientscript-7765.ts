//
function script7765(int0: struct, int1: quest, int2: achievement): int {
    var int3 = 0;
    if ((((int0 == -1 as struct) && (int1 == -1 as quest)) && (int2 == -1 as achievement))) {
        return int3;
    };
    if (((int0 != -1 as struct) && (struct_getparam(int0, 4253) != -1 as struct))) {
        var int0 = struct_getparam(int0, 4253);
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = script7663(int0, int1, int2);
    switch (int7) {
        case 2: {
            if ((int2 != -1 as achievement)) {
                int3 = ACHIEVEMENT_REQSTATE(int2);
            };
            break;
        }
        case 1: {
            if ((int1 != -1 as quest)) {
                if ((script18524(int1) == 0)) {
                    int3 = -1;
                } else {
                    switch (script2193(int1)) {
                        case 2: {
                            int3 = -2;
                            break;
                        }
                        default: {
                            int3 = 0;
                            break;
                        }
                    };
                };
            };
            break;
        }
        case 6:
        case 0: {
            if ((script7761(int0) == 0)) {
                int3 = -1;
            } else {
                int3 = 0;
            };
            break;
        }
        case 4: {
            int3 = 0;
            break;
        }
        case 8: {
            if ((struct_getparam(int0, 1353) > script1432())) {
                int3 = -1;
            } else if ((script16088(int0) == 0)) {
                int3 = -1;
            };
            if ((int3 == -2)) {
                int3 = 0;
            };
            break;
        }
        case 7: {
            int3 = 0;
            break;
        }
        case 3: {
            if ((script13290(int0) == 0)) {
                int3 = -1;
            } else {
                [int4, int5, int6] = script13289(struct_getparam(int0, 8072));
                if ((int4 >= int5)) {
                    int3 = -2;
                } else {
                    [int3, int0] = script6301(int0, 0, -1);
                };
            };
            break;
        }
        default: {
            script12478(`Unhandled struct of system #${inttostring(int7, 10)} in [proc,crs_req_status]. Can't get reqs`);
            break;
        }
    };
    return int3;
}