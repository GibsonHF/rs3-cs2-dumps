//
function script2734(int0: obj, int1: obj, int2: int, int3: int): [obj, int, int] {
    switch (int0) {
        case 2351: {
            if (((INV_GETOBJ(94 as inv, 12) == 2568 as obj) && ((int1 == 440 as obj) || (((int1 == 47066 as obj) && (int2 == 3)) || ((int1 == 47067 as obj) && (int2 == 3)))))) {
                var int3 = (int3 - 1);
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
                    if ((script17423(int0) == true)) {
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