//
function script14579(int0: number): number {
    var int1 = 0;
    switch (varbitplayer_47023) {
        case 1: {
            if ((PLAYERMEMBER() == 1)) {
                int1 = 2;
            };
            break;
        }
        case 2: {
            if ((PLAYERMEMBER() == 1)) {
                int1 = 4;
            };
            break;
        }
        case 3: {
            if ((PLAYERMEMBER() == 1)) {
                int1 = 6;
            };
            break;
        }
        case 4: {
            if ((PLAYERMEMBER() == 1)) {
                int1 = 8;
            };
            break;
        }
    };
    return (dbrow_getfield(int0, 389120, 0) + int1);
}