//
function script9825(int0: struct, int1: dbrow): dbrow {
    var int2 = 0;
    switch (int0) {
        case 4136: {
            if ((varbitplayer_51271 > 0)) {
                return 5452 as dbrow;
            };
            break;
        }
        case 45877: {
            if ((script12477() < 8644)) {
                if ((MAP_MEMBERS() == 1)) {
                    return 4695 as dbrow;
                };
                return 14401 as dbrow;
            };
            if ((MAP_MEMBERS() == 1)) {
                return 17234 as dbrow;
            };
            return 17235 as dbrow;
        }
        case 38119: {
            int2 = script18405();
            if ((int2 < 8692)) {
                return 14691 as dbrow;
            };
            if ((int2 < 8694)) {
                return 17434 as dbrow;
            };
            if ((int2 < 8697)) {
                return 17435 as dbrow;
            };
            if ((int2 < 8702)) {
                return 17436 as dbrow;
            };
            return 14675 as dbrow;
        }
    };
    return int1;
}