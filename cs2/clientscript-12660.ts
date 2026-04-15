//
function script12660(int0: dbrow, int1: int): int {
    if ((((int0 == -1 as dbrow) || (int0 == 4369 as dbrow)) || (dbrow_getfield(int0, 569376, 0) == 0))) {
        return int1;
    };
    if (((varplayer_3079 < dbrow_getfield(int0, 569392, 0)) || (varplayer_3079 > dbrow_getfield(int0, 569408, 0)))) {
        return int1;
    };
    if ((PLAYERMEMBER() == false)) {
        return dbrow_getfield(int0, 569344, 0);
    };
    return dbrow_getfield(int0, 569360, 0);
}