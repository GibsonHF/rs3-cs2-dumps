//
function script15760(int0: unknown_int): unknown_int {
    switch (PLATFORMTYPE()) {
        case 0:
        case 5: {
            stack(int0);
            stack(815200);
            stack(0);
            dbrow_getfield();
            if ((stack() == 1)) {
                return 1;
            };
            break;
        }
        case 3:
        case 2: {
            stack(int0);
            stack(815232);
            stack(0);
            dbrow_getfield();
            if ((stack() == 1)) {
                return 1;
            };
            break;
        }
        case 1: {
            stack(int0);
            stack(815216);
            stack(0);
            dbrow_getfield();
            if ((stack() == 1)) {
                return 1;
            };
            break;
        }
        default: {
            return 1;
        }
    };
    return 0;
}