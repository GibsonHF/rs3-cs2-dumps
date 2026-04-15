//
function script12198(int0: int, int1: int): [graphic, unknown_int] {
    if ((int0 == 0)) {
        return [-1 as graphic, -1];
    };
    stack(32768);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return [-1 as graphic, -1];
    };
    var int3 = -1;
    if ((DB_GETFIELDCOUNT(int2, 32880) > 1)) {
        switch (int1) {
            case 1: {
                int3 = 24238;
                break;
            }
            case 2: {
                int3 = 24239;
                break;
            }
            case 3: {
                int3 = 24240;
                break;
            }
            case 4: {
                int3 = 24253;
                break;
            }
            case 5: {
                int3 = 10564;
                break;
            }
            case 6: {
                int3 = 10600;
                break;
            }
        };
    };
    return [dbrow_getfield(int2, 32800, 0), int3];
}