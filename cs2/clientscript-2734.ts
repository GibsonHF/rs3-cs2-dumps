//
function script2734(int0: number, int1: number, int2: number, int3: number): [number, number, number] {
    switch (int0) {
        case 2351: {
            if ((INV_GETOBJ(94 as inv, 12) == 2568 as obj)) {
                if ((int1 == 440)) {
                    var int3 = (int3 - 1);
                } else if ((int1 == 47066)) {
                    if ((int2 == 3)) {
                        int3 = (int3 - 1);
                    } else if (((int1 == 47067) && (int2 == 3))) {
                        int3 = (int3 - 1);
                    };
                } else if (((int1 == 47067) && (int2 == 3))) {
                    int3 = (int3 - 1);
                };
            };
            break;
        }
        case 53065:
        case 53055:
        case 53050:
        case 53043:
        case 53060: {
            switch (int1) {
                case 51806:
                case 51808:
                case 51810:
                case 51804: {
                    if ((script17423(int0) == 1)) {
                        return [int1, int2, 1];
                    };
                    break;
                }
            };
            break;
        }
    };
    int3 = script20150(int0, int3);
    return [int1, int2, int3];
}