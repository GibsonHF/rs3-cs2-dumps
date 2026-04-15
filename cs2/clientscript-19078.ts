//
function script19078(int0: dbrow): unknown_int {
    if (((varbitplayer_18798 == 1) || (int0 == -1 as dbrow))) {
        return 0;
    };
    var int1 = script12477();
    if ((int1 < 8209)) {
        return 0;
    };
    if (((int0 == 13932 as dbrow) && (PLAYERMEMBER() == false))) {
        return 0;
    };
    return 1;
}