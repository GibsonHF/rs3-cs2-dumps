//
function script14579(int0: dbrow): int {
    var int1 = 0;
    switch (varbitplayer_47023) {
        case 1: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 2;
            };
            break;
        }
        case 2: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 4;
            };
            break;
        }
        case 3: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 6;
            };
            break;
        }
        case 4: {
            if ((PLAYERMEMBER() == true)) {
                int1 = 8;
            };
            break;
        }
    };
    return (dbrow_getfield(int0, 389120, 0) + int1);
}