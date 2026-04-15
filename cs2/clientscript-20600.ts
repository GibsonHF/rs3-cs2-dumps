//
function script20600(int0: graphic, int1: dbrow): graphic {
    var int2 = -1 as graphic;
    switch (MAP_LANG()) {
        case 1: {
            int2 = dbrow_getfield(int1, 1417312, 0);
            if ((int2 != -1 as graphic)) {
                return int2;
            };
            break;
        }
        case 2: {
            int2 = dbrow_getfield(int1, 1417280, 0);
            if ((int2 != -1 as graphic)) {
                return int2;
            };
            break;
        }
        case 3: {
            int2 = dbrow_getfield(int1, 1417296, 0);
            if ((int2 != -1 as graphic)) {
                return int2;
            };
            break;
        }
    };
    return int0;
}