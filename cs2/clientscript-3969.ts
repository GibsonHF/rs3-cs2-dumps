//
function script3969(int0: inv, int1: int, int2: component, int3: int): void {
    var int4 = script14346(int0, int1);
    var int5 = script14347(int0, int1);
    if (((int4 == -1 as obj) || (int5 <= 0))) {
        return;
    };
    var int6 = OC_UNCERT(int4);
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    switch (int2) {
        case 33882329: {
            int8 = script14339(int0, int6);
            if ((int8 != -1)) {
                var int3 = int8;
            } else {
                int12 = script5798(int3);
            };
            script2347(int4, int6, int8, int5, int3, int12, int0, int1, 1, 1);
            return;
        }
        case 33882313: {
            int8 = script14339(int0, int6);
            if ((int8 != -1)) {
                script2347(int4, int6, int8, int5, int8, -1, int0, int1, 1, 1);
                return;
            };
            int7 = script14344(int3);
            if ((int7 == -1 as obj)) {
                script2347(int4, int6, int8, int5, int3, -1, int0, int1, 1, 1);
                return;
            };
            if ((int0 == 94 as inv)) {
                if (((OC_WEARPOS(int7) == -1) || (OC_WEARPOS(int7) != OC_WEARPOS(int6)))) {
                    script2347(int4, int6, int8, int5, int3, -1, int0, int1, 1, 1);
                } else {
                    int9 = script14345(int3);
                    if ((OC_STACKABLE(int7) == 1)) {
                        script6794(int7, int9, int3, int0, int1, int9, 0);
                    } else {
                        script6794(int7, 1, int3, int0, int1, int9, 0);
                    };
                };
            } else {
                script5786(int3, int0, int1, int1, 0);
            };
            return;
        }
        case 33882401: {
            script14386(int0, int1, int4, int5);
            return;
        }
        case 33882391: {
            script14387(int0, int1, int4, int5, int3);
            return;
        }
        case 33882277: {
            int12 = 1;
            break;
        }
        case 33882281: {
            int12 = script14372(int3);
            break;
        }
        case 33882317:
        case 33882318: {
            if ((varbitplayer_45141 == 1)) {
                int12 = script14372(int3);
            } else {
                int12 = int3;
            };
            break;
        }
        default: {
            return;
        }
    };
    int8 = script14339(int0, int6);
    if (((script3802(int4) == false) && (int8 != -1))) {
        script2347(int4, int6, int8, int5, int8, -1, int0, int1, 1, 0);
        return;
    };
    if ((int12 >= 2)) {
        [int10, int11] = script5787(int12);
    } else {
        int11 = script14337();
    };
    script2347(int4, int6, int8, int5, int11, int12, int0, int1, 1, 1);
    script9323();
    return;
}