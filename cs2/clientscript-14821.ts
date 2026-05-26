//
function script14821(): void {
    var int0 = script19772(varbitplayer_57205, 1);
    var int1 = script19772(varbitplayer_57205, 2);
    var int2 = script19772(varbitplayer_57205, 3);
    script14844(44892292, -1, -1, 44892295, 44892296, int0);
    script14844(44892301, -1, -1, 44892304, 44892305, int1);
    script14844(44892312, -1, -1, 44892315, 44892316, int2);
    if ((MAP_MEMBERS() == 0)) {
        if (((int0 != -1 as dbrow) && (dbrow_getfield(int0, 385072, 0) == true))) {
            IF_SETHIDE(false, comp(685, 248));
        };
        if (((int1 != -1 as dbrow) && (dbrow_getfield(int1, 385072, 0) == true))) {
            IF_SETHIDE(false, comp(685, 250));
        };
        if (((int2 != -1 as dbrow) && (dbrow_getfield(int2, 385072, 0) == true))) {
            IF_SETHIDE(false, comp(685, 252));
        };
    };
    return;
}