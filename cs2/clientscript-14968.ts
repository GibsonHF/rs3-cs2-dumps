//
function script14968(int0: int): dbrow {
    var int1 = 0;
    switch (int0) {
        case 1: {
            int1 = varbitplayer_33764;
            break;
        }
        case 2: {
            int1 = varbitplayer_33765;
            break;
        }
        case 3: {
            int1 = varbitplayer_33766;
            break;
        }
        case 4: {
            int1 = varbitplayer_33767;
            break;
        }
        case 5: {
            int1 = varbitplayer_37037;
            break;
        }
        case 6: {
            int1 = varbitplayer_37038;
            break;
        }
        case 7: {
            int1 = varbitplayer_37039;
            break;
        }
        case 8: {
            int1 = varbitplayer_37040;
            break;
        }
    };
    stack(270336);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}