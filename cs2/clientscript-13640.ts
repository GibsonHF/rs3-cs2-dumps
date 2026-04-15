//
function script13640(int0: obj, int1: int): obj {
    var int2 = -1;
    if ((((TESTBIT(varplayer_5195, int1) == 1) && (item_getparam(int0, 4949) == 0)) && (enum_getvalue(33, 33, 9904 as cs2enum, int0) != -1 as obj))) {
        return enum_getvalue(33, 33, 9904 as cs2enum, int0);
    };
    if ((((TESTBIT(varplayer_5195, int1) == 0) && (item_getparam(int0, 4949) == 1)) && (enum_getreversecount(33, 9904 as cs2enum, int0) > 0))) {
        return enum_getreverseindex(33, 33, 9904 as cs2enum, int0, 0);
    };
    return int0;
}