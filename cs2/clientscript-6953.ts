//
function script6953(): dbrow {
    var int0 = 5;
    if ((int0 == 0)) {
        if ((varbitplayer_57808 == 0)) {
            script14039(82116613, 34881);
            script10619(1);
            int0 = 2;
        } else {
            int0 = varbitplayer_57808;
        };
    };
    stack(1179648);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        script12478("Promotion skin is null when getting fighter. Using default.");
        int1 = 13839 as dbrow;
    };
    return int1;
}