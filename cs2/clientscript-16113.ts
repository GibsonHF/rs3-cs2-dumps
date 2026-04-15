//
function script16113(): dbrow {
    var int0 = script9032();
    if ((int0 == -1 as dbrow)) {
        stack(348384);
        stack(varplayer_1784);
        DB_FIND(0);
        dbrow_findnext();
        int0 = stack();
    };
    return int0;
}