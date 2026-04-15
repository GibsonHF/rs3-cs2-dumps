//
function script9681(int0: unknown_int): unknown_int {
    if ((MAP_MEMBERS() == 0)) {
        return 0;
    };
    var int1 = INV_GETOBJ(94 as inv, 1);
    switch (int0) {
        case 1: {
            if ((script9688(int1, 8) == 1)) {
                return 1;
            };
            break;
        }
        case 3: {
            if ((script9688(int1, 9) == 1)) {
                return 1;
            };
            break;
        }
        case 2: {
            if ((script9688(int1, 10) == 1)) {
                return 1;
            };
            break;
        }
        case 7: {
            if ((script9688(int1, 21) == 1)) {
                return 1;
            };
            break;
        }
    };
    return 0;
}