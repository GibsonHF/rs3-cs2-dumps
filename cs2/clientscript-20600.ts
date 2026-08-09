//
function script20600(int0: number, int1: number): number {
    var int2 = -1;
    switch (MAP_LANG()) {
        case 1: {
            int2 = dbrow_getfield(int1, 1417312, 0);
            if ((int2 != -1)) {
                return int2;
            };
            break;
        }
        case 2: {
            int2 = dbrow_getfield(int1, 1417280, 0);
            if ((int2 != -1)) {
                return int2;
            };
            break;
        }
        case 3: {
            int2 = dbrow_getfield(int1, 1417296, 0);
            if ((int2 != -1)) {
                return int2;
            };
            break;
        }
    };
    return int0;
}