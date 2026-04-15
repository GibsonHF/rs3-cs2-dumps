//
function script19254(int0: struct, int1: int): graphic {
    var int2 = PLAYERMEMBER();
    var int3 = -1 as graphic;
    var int4 = struct_getparam(int0, 9364);
    switch (int1) {
        case 0: {
            if (((int4 != -1) && (int4 <= script12477()))) {
                int3 = struct_getparam(int0, 6382);
                if ((int3 == -1 as graphic)) {
                    script12478("Promotion specifies a second motw banner date, could not find, defaulting to base EN banner.");
                    int3 = struct_getparam(int0, 6381);
                };
            } else {
                int3 = struct_getparam(int0, 9190);
                if (((int3 == -1 as graphic) || (int2 == true))) {
                    int3 = struct_getparam(int0, 6381);
                };
            };
            break;
        }
        case 2: {
            if (((int4 != -1) && (int4 <= script12477()))) {
                int3 = struct_getparam(int0, 9366);
                if ((int3 == -1 as graphic)) {
                    script12478("Promotion specifies a second motw banner date, could not find, defaulting to base FR banner.");
                    int3 = struct_getparam(int0, 6386);
                };
            } else {
                int3 = struct_getparam(int0, 9192);
                if (((int3 == -1 as graphic) || (int2 == true))) {
                    int3 = struct_getparam(int0, 6386);
                };
            };
            break;
        }
        case 1: {
            if (((int4 != -1) && (int4 <= script12477()))) {
                int3 = struct_getparam(int0, 9365);
                if ((int3 == -1 as graphic)) {
                    script12478("Promotion specifies a second motw banner date, could not find, defaulting to base DE banner.");
                    int3 = struct_getparam(int0, 6385);
                };
            } else {
                int3 = struct_getparam(int0, 9191);
                if (((int3 == -1 as graphic) || (int2 == true))) {
                    int3 = struct_getparam(int0, 6385);
                };
            };
            break;
        }
        case 3: {
            if (((int4 != -1) && (int4 <= script12477()))) {
                int3 = struct_getparam(int0, 9367);
                if ((int3 == -1 as graphic)) {
                    script12478("Promotion specifies a second motw banner date, could not find, defaulting to base PT banner.");
                    int3 = struct_getparam(int0, 6387);
                };
            } else {
                int3 = struct_getparam(int0, 9193);
                if (((int3 == -1 as graphic) || (int2 == true))) {
                    int3 = struct_getparam(int0, 6387);
                };
            };
            break;
        }
    };
    return int3;
}