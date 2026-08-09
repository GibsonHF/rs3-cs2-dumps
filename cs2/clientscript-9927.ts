//
function script9927(int0: number): number {
    var int1 = script9743((int0 / 4));
    if ((int1 == -1)) {
        return -1;
    };
    var int2 = 0;
    switch (MODULO(int0, 4)) {
        case 0: {
            int2 = GETBIT_RANGE(int1, 0, 7);
            break;
        }
        case 1: {
            int2 = GETBIT_RANGE(int1, 8, 15);
            break;
        }
        case 2: {
            int2 = GETBIT_RANGE(int1, 16, 23);
            break;
        }
        case 3: {
            int2 = GETBIT_RANGE(int1, 24, 31);
            break;
        }
    };
    if ((int2 <= 0)) {
        return -1;
    };
    stack(1540096);
    stack(int2);
    DB_FIND(0);
    return dbrow_findnext();
}