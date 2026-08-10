//
function script18931(int0: number): number {
    var int1 = -1;
    switch (int0) {
        case 13581: {
            if ((CC_FIND(comp(1284, 29), 0) == 1)) {
                int1 = 0;
            };
            break;
        }
        case 19938: {
            int1 = script17441(0, 1);
            break;
        }
        case 19939:
        case 19940: {
            int1 = script17441(3, 1);
            break;
        }
        default: {
            int1 = dbrow_getfield(int0, 295024, 0);
            break;
        }
    };
    return int1;
}