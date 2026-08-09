//
function script1478(int0: number, int1: number): number {
    stack(262144);
    stack(int0);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    if ((int2 == -1)) {
        return -1;
    };
    var int3 = dbrow_getfield(int2, 262160, int1);
    if ((int3 == -1)) {
        return -1;
    };
    return dbrow_getfield(int3, 266256, (varbitplayer_4945 - 1));
}