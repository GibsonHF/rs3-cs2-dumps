//
function script14502(int0: dbrow): unknown_int {
    var int1 = dbrow_getfield(int0, 344240, 0);
    if ((int1 != -1 as struct)) {
        return script14503(int1);
    };
    switch (int0) {
        case 2659: {
            if ((varbitplayer_46463 >= 75)) {
                return 2;
            };
            break;
        }
    };
    return 0;
}