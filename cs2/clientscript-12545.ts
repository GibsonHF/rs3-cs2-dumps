//
function script12545(int0: dbrow): unknown_int {
    if (((varbitplayer_57723 == 1) || (int0 == -1 as dbrow))) {
        return 0;
    };
    var int1 = script12477();
    if ((int1 < 8412)) {
        return 0;
    };
    if (((int0 == 14944 as dbrow) && (PLAYERMEMBER() == false))) {
        return 0;
    };
    return 1;
}