//
function script1478(int0: unknown_int, int1: int): cs2enum {
    stack(262144);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return -1 as cs2enum;
    };
    var int3 = dbrow_getfield(int2, 262160, int1);
    if ((int3 == -1 as dbrow)) {
        return -1 as cs2enum;
    };
    return dbrow_getfield(int3, 266256, (varbitplayer_4945 - 1));
}