//
function script17485(int0: dbrow, int1: dbrow): unknown_int {
    if (((int0 == -1 as dbrow) || (int1 == -1 as dbrow))) {
        return -1;
    };
    if ((script17492(int1) == true)) {
        return 2;
    };
    if (((script17483(int0) == 0) || (script17491(int1) == 0))) {
        return 0;
    };
    return 1;
}