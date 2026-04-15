//
function script17436(int0: dbrow): unknown_int {
    if (((varbitplayer_53104 == 1) || (int0 == -1 as dbrow))) {
        return 0;
    };
    var int1 = script12477();
    if (((int1 < 7831) || (int1 > 7977))) {
        return 0;
    };
    if (((int0 == 7542 as dbrow) && (PLAYERMEMBER() == false))) {
        return 0;
    };
    return 1;
}