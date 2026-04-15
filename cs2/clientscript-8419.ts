//
function script8419(int0: struct, int1: unknown_int, int2: unknown_int): graphic {
    var int3 = -1 as graphic;
    switch (int1) {
        case 0: {
            if ((int2 == 1)) {
                int3 = struct_getparam(int0, 3627);
                if ((int3 == -1 as graphic)) {
                    int3 = struct_getparam(int0, 3598);
                };
            } else {
                int3 = struct_getparam(int0, 3598);
            };
            break;
        }
        case 1: {
            if ((int2 == 1)) {
                int3 = struct_getparam(int0, 3623);
                if ((int3 == -1 as graphic)) {
                    int3 = struct_getparam(int0, 3590);
                };
            } else {
                int3 = struct_getparam(int0, 3590);
            };
            break;
        }
        case 2: {
            if ((int2 == 1)) {
                int3 = struct_getparam(int0, 3624);
                if ((int3 == -1 as graphic)) {
                    int3 = struct_getparam(int0, 3591);
                };
            } else {
                int3 = struct_getparam(int0, 3591);
            };
            break;
        }
        case 3: {
            if ((int2 == 1)) {
                int3 = struct_getparam(int0, 4396);
                if ((int3 == -1 as graphic)) {
                    int3 = struct_getparam(int0, 3599);
                };
            } else {
                int3 = struct_getparam(int0, 3599);
            };
            break;
        }
        case 4: {
            if ((int2 == 1)) {
                int3 = struct_getparam(int0, 3625);
                if ((int3 == -1 as graphic)) {
                    int3 = struct_getparam(int0, 3600);
                };
            } else {
                int3 = struct_getparam(int0, 3600);
            };
            break;
        }
        case 5: {
            if ((int2 == 1)) {
                int3 = struct_getparam(int0, 3626);
                if ((int3 == -1 as graphic)) {
                    int3 = struct_getparam(int0, 3594);
                };
            } else {
                int3 = struct_getparam(int0, 3594);
            };
            break;
        }
    };
    return int3;
}