//
function script14635(int0: number): number {
    if ((int0 == -1)) {
        return -1;
    };
    var int1 = dbrow_getfield(int0, 368720, 0);
    if ((int1 != -1)) {
        return int1;
    };
    var int2 = dbrow_getfield(int0, 368672, 0);
    switch (int2) {
        case 2802: {
            return 10291;
        }
        case 2803: {
            return 10289;
        }
        case 2804: {
            return 10290;
        }
        case 2805: {
            return 10292;
        }
        case 2806: {
            return 10293;
        }
        case 3703: {
            return 12027;
        }
        case 4408: {
            return 15139;
        }
        case 13665: {
            return 33842;
        }
        case 18292: {
            return 36062;
        }
    };
    return 10288;
}