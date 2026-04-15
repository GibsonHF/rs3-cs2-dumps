//
function script3392(): unknown_int {
    if ((script16276() == 1)) {
        return 0;
    };
    if ((script4148() == true)) {
        return 0;
    };
    var int0 = script12203(varplayer_3079);
    var int1 = dbrow_getfield(3581 as dbrow, 430112, 0);
    var int2 = dbrow_getfield(3581 as dbrow, 430128, 0);
    var int3 = DATE_RUNEDAY_FROMDATE(dbrow_getfield(2442 as dbrow, 315472, 0));
    if (((varplayer_3079 >= int1) && (varplayer_3079 <= int2))) {
        if (((varplayer_3079 == int1) && (int0 < 12))) {
            return 0;
        };
        if ((((int3 == int2) && (varplayer_3079 == int2)) && (int0 >= 12))) {
            return 0;
        };
        return 1;
    };
    return 0;
}