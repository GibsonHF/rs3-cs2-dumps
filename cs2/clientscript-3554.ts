//
function script3554(int0: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 1417440, 0);
    var int2 = dbrow_getfield(int0, 1417424, 0);
    if (((int1 == 0) && (int2 == 0))) {
        return 1;
    };
    if (((int1 == 1) && (PLAYERMEMBER() == true))) {
        return 0;
    };
    if (((int2 == 1) && (PLAYERMEMBER() == false))) {
        return 0;
    };
    return 1;
}