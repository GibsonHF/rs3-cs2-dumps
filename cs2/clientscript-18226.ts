//
function script18226(int0: int, int1: unknown_int): graphic {
    if (((int1 == 3) && (PLAYERMEMBER() == false))) {
        var int0 = 2;
    };
    if ((int1 == 3)) {
        switch (int0) {
            case 0: {
                return 11626 as graphic;
            }
            case 1: {
                return 11625 as graphic;
            }
            case 2: {
                return 11624 as graphic;
            }
        };
    } else {
        switch (int0) {
            case 0: {
                return 16958 as graphic;
            }
            case 1: {
                return 11628 as graphic;
            }
            case 2: {
                return 11627 as graphic;
            }
        };
    };
    return -1 as graphic;
}