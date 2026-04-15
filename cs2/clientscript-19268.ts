//
function script19268(): unknown_int {
    if (((varplayer_11901 == -1 as dbrow) || (varplayer_11902 == -1 as dbrow))) {
        return 0;
    };
    if ((DB_GETROWTABLE(varplayer_11902) != 298)) {
        return 0;
    };
    if ((varbitplayer_56168 >= (DB_GETFIELDCOUNT(varplayer_11902, 1220688) - 1))) {
        return 0;
    };
    return 1;
}