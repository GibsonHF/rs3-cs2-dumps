//
function script17870(int0: dbrow, int1: int): var_reference {
    var int2 = -1 as var_reference;
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 242))) {
        script12478("Invalid pass!");
        return -1 as var_reference;
    };
    switch (int1) {
        case 0: {
            int2 = dbrow_getfield(int0, 991425, 0);
            break;
        }
        case 1: {
            int2 = dbrow_getfield(int0, 991426, 0);
            break;
        }
        case 2: {
            int2 = dbrow_getfield(int0, 991427, 0);
            break;
        }
        case 3: {
            int2 = dbrow_getfield(int0, 991428, 0);
            break;
        }
        default: {
            script12478("Invalid var index!");
            return -1 as var_reference;
        }
    };
    return int2;
}