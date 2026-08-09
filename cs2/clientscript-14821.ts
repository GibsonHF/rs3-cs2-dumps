//
function script14821(): void {
    var int0 = script19772(varbitplayer_57205, 1);
    var int1 = script19772(varbitplayer_57205, 2);
    var int2 = script19772(varbitplayer_57205, 3);
    script14844(44892294, -1, -1, 44892297, 44892298, int0);
    script14844(44892303, -1, -1, 44892306, 44892307, int1);
    script14844(44892314, -1, -1, 44892317, 44892318, int2);
    if ((MAP_MEMBERS() == 0)) {
        if (((int0 != -1) && (dbrow_getfield(int0, 385072, 0) == 1))) {
            IF_SETHIDE(false, comp(685, 250));
        };
        if (((int1 != -1) && (dbrow_getfield(int1, 385072, 0) == 1))) {
            IF_SETHIDE(false, comp(685, 252));
        };
        if (((int2 != -1) && (dbrow_getfield(int2, 385072, 0) == 1))) {
            IF_SETHIDE(false, comp(685, 254));
        };
    };
    return;
}