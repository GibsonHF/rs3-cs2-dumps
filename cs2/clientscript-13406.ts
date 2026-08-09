//
function script13406(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): number {
    if ((script16260() == 0)) {
        return WORLDMAP_LISTELEMENT_START(1515520, 261, 3, 0);
    };
    var int9 = WORLDMAP_LISTELEMENT_START(1515520, 0, 4, 0);
    var int10 = -1;
    if ((int0 != 63)) {
        int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515600, int0, 3, 0));
    };
    if (((int1 != 127) && (int1 != 126))) {
        int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515616, int1, 3, 0));
    };
    switch (int3) {
        case 1: {
            int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515712, 1, 3, 0));
            break;
        }
        case 2: {
            int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515712, 0, 3, 0));
            break;
        }
    };
    switch (int4) {
        case 1: {
            int9 = IF_SETPLAYERHEAD_SELF(int9, DETAIL_WATERDETAIL_HIGH(1515792, 1515808, 4));
            break;
        }
        case 2: {
            int9 = IF_SETPLAYERHEAD_SELF(int9, DETAIL_WATERDETAIL_HIGH(1515792, 1515808, 1));
            break;
        }
    };
    if ((int5 == 1)) {
        int10 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(1515776, 52587, 3, 0));
        int9 = IF_SETPLAYERHEAD_SELF(int9, int10);
    };
    if ((int2 > 0)) {
        if ((int2 < 120)) {
            if ((int6 == 1)) {
                var int2 = MIN(int2, STAT(22 as stat));
            };
            int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515664, int2, 2, 0));
        } else if (((int6 == 1) && (STAT(22 as stat) < 120))) {
            int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515664, STAT(22 as stat), 2, 0));
        };
    } else if (((int6 == 1) && (STAT(22 as stat) < 120))) {
        int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515664, STAT(22 as stat), 2, 0));
    };
    if ((int7 == 1)) {
        int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515744, 0, 5, 0));
    };
    if ((int8 == 1)) {
        int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515904, 0, 3, 0));
    };
    if ((int8 == 2)) {
        int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515936, 0, 3, 0));
    };
    if ((int8 == 3)) {
        int9 = IF_SETPLAYERHEAD_SELF(int9, WORLDMAP_LISTELEMENT_START(1515920, 0, 3, 0));
    };
    return int9;
}