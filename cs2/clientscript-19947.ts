//
function script19947(int0: number): void {
    if ((CC_FIND(87556122, int0) == 1)) {
        script7872(1, 1, 1, 1);
    };
    var int1 = -1 as dbrow;
    var int2 = 17865;
    var int3 = -1;
    var int4 = 0;
    var int5 = -1;
    switch (varbitplayer_57881) {
        case 1: {
            int2 = 17866;
            break;
        }
        case 2: {
            int2 = 17867;
            break;
        }
        case 3: {
            int2 = 15221;
            break;
        }
        case 4: {
            int2 = 15222;
            break;
        }
    };
    int3 = CC_SETPARAM_STRING(WORLDMAP_LISTELEMENT_START(1306640, int2, 3, 0), 1306624, 1, -1, 0);
    while ((++int5 < int3)) {
        dbrow_findnext();
        int1 = stack();
        if ((int1 != -1)) {
            int4 = dbrow_getfield(int1, 1306624, 0);
            if (((CC_FIND(87556122, int4) == 1) && (int4 != int0))) {
                script7872(1, 1, 1, 0);
            };
        };
    };
    script19948(int0);
    return;
}