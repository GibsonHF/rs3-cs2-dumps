//
function script20862(int0: number): number {
    var int1 = script20847();
    if ((int1 == -1)) {
        return int0;
    };
    var int2 = -1;
    switch (MAP_LANG()) {
        case 1: {
            int2 = dbrow_getfield(int1, 1552432, 0);
            break;
        }
        case 2: {
            int2 = dbrow_getfield(int1, 1552416, 0);
            break;
        }
        case 3: {
            int2 = dbrow_getfield(int1, 1552448, 0);
            break;
        }
        default: {
            int2 = dbrow_getfield(int1, 1552400, 0);
            break;
        }
    };
    var int3 = dbrow_getfield(int1, 1552480, 0);
    stack(int0);
    stack(int3);
    stack(int2);
    stack("Ends In");
    return script20680("Sale Ended");
}