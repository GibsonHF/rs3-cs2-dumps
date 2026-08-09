//
function script11226(int0: number, int1: number): number {
    var int2 = 0;
    var int3 = 0;
    if ((int0 == -1)) {
        return 1;
    };
    if ((struct_getparam(int0, 4968) == 1)) {
        if ((STAFFMODLEVEL() < 2)) {
            int2 = 1;
        } else if ((int1 != 0)) {
            int3 = struct_getparam(int0, 4952);
            switch (int1) {
                case 1: {
                    if ((int3 != 1)) {
                        int2 = 1;
                    };
                    break;
                }
                case 2: {
                    if ((((int3 != 2) && (int3 != 3)) && (int3 != 7))) {
                        int2 = 1;
                    };
                    break;
                }
                case 3: {
                    if (((((int3 == 1) || (int3 == 2)) || (int3 == 3)) || (int3 == 7))) {
                        int2 = 1;
                    };
                    break;
                }
            };
        };
    } else if ((int1 != 0)) {
        int3 = struct_getparam(int0, 4952);
        switch (int1) {
            case 1: {
                if ((int3 != 1)) {
                    int2 = 1;
                };
                break;
            }
            case 2: {
                if ((((int3 != 2) && (int3 != 3)) && (int3 != 7))) {
                    int2 = 1;
                };
                break;
            }
            case 3: {
                if (((((int3 == 1) || (int3 == 2)) || (int3 == 3)) || (int3 == 7))) {
                    int2 = 1;
                };
                break;
            }
        };
    };
    return int2;
}