//
function script19150(int0: struct): dbrow {
    var int1 = -1 as dbrow;
    switch (int0) {
        case 32986: {
            if ((varbitplayer_51600 < 0)) {
                script12478("Invalid monster id.");
            };
            stack(790528);
            stack(varbitplayer_51600);
            DB_FIND(0);
            dbrow_findnext();
            int1 = stack();
            break;
        }
        case 50263: {
            if ((varbitplayer_56041 < 0)) {
                script12478("Invalid node id.");
            };
            stack(1204224);
            stack(varbitplayer_56041);
            DB_FIND(0);
            dbrow_findnext();
            int1 = stack();
            break;
        }
        case 2951: {
            if ((varbitplayer_57719 < 0)) {
                script12478("Invalid node id.");
            };
            stack(1290240);
            stack(varbitplayer_57719);
            DB_FIND(0);
            dbrow_findnext();
            int1 = stack();
            break;
        }
        default: {
            script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
            break;
        }
    };
    if ((int1 == -1 as dbrow)) {
        script12478("Cannot find a valid dbrow.");
    };
    return int1;
}