//
function script14635(int0: dbrow): graphic {
    if ((int0 == -1 as dbrow)) {
        return -1 as graphic;
    };
    var int1 = dbrow_getfield(int0, 368720, 0);
    if ((int1 != -1 as graphic)) {
        return int1;
    };
    var int2 = dbrow_getfield(int0, 368672, 0);
    switch (int2) {
        case 2802: {
            return 10291 as graphic;
        }
        case 2803: {
            return 10289 as graphic;
        }
        case 2804: {
            return 10290 as graphic;
        }
        case 2805: {
            return 10292 as graphic;
        }
        case 2806: {
            return 10293 as graphic;
        }
        case 3703: {
            return 12027 as graphic;
        }
        case 4408: {
            return 15139 as graphic;
        }
        case 13665: {
            return 33842 as graphic;
        }
    };
    return 10288 as graphic;
}