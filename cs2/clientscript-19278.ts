//
function script19278(): void {
    IF_SETTEXT(dbrow_getfield(varplayer_11901, 1216544, 0), comp(1290, 15));
    var int0 = -1;
    switch (varbitplayer_56167) {
        case 0: {
            int0 = 34430;
            break;
        }
        case 1: {
            int0 = 34431;
            break;
        }
        case 2: {
            int0 = 34432;
            break;
        }
        case 3: {
            int0 = 34433;
            break;
        }
        case 4: {
            int0 = 34434;
            break;
        }
        case 5: {
            int0 = 34435;
            break;
        }
        case 6: {
            int0 = 34436;
            break;
        }
    };
    stack(int0);
    stack(84541458);
    IF_SETGRAPHIC();
    var int1 = 34439;
    var int2 = 46;
    var int3 = 46;
    var int4 = 0;
    var int5 = 0;
    var int6 = 28;
    var int7 = 28;
    var int8 = DB_GETFIELDCOUNT(varplayer_11901, 1216560);
    var int9 = -1;
    var int10 = -1;
    while ((++int10 < int8)) {
        switch (int10) {
            case 0: {
                [int4, int5] = [0, 0];
                break;
            }
            case 1: {
                [int4, int5] = [17, 57];
                break;
            }
            case 2: {
                [int4, int5] = [95, 0];
                break;
            }
            case 3: {
                [int4, int5] = [80, 51];
                break;
            }
            case 4: {
                [int4, int5] = [0, 125];
                break;
            }
            case 5: {
                [int4, int5] = [103, 95];
                break;
            }
            case 6: {
                int1 = 34442 as graphic;
                [int2, int3] = [58, 58];
                [int4, int5] = [46, 150];
                [int6, int7] = [42, 42];
                break;
            }
        };
        script15938(comp(1290, 16), int10, 0, int4, int5, 0, 0, int2, int3, 0, 0);
        script7918(int10, 1, 0, 0, 1, 1, 0, 0, 1, 1, -1 as graphic);
        if ((varbitplayer_56167 == int10)) {
            CC_SETGRAPHIC(int1);
        };
        int9 = dbrow_getfield(varplayer_11901, 1216560, int10);
        script7918(int10, 2, 0, 0, 1, 1, int6, int7, 0, 0, -1 as graphic);
        switch (DB_GETROWTABLE(int9)) {
            case 298: {
                script3537("Map");
                break;
            }
            case 299: {
                script3537("Bonus Encounter");
                break;
            }
            case 300: {
                script3537("Boss Encounter");
                break;
            }
        };
        if ((varbitplayer_56167 >= int10)) {
            switch (DB_GETROWTABLE(int9)) {
                case 298: {
                    CC_SETGRAPHIC(34443 as graphic);
                    break;
                }
                case 299: {
                    CC_SETGRAPHIC(34445 as graphic);
                    break;
                }
                case 300: {
                    CC_SETGRAPHIC(34447 as graphic);
                    break;
                }
            };
        } else {
            switch (DB_GETROWTABLE(int9)) {
                case 298: {
                    CC_SETGRAPHIC(34444 as graphic);
                    break;
                }
                case 299: {
                    CC_SETGRAPHIC(34446 as graphic);
                    break;
                }
                case 300: {
                    CC_SETGRAPHIC(34448 as graphic);
                    break;
                }
            };
        };
    };
    var int11 = -1 as obj;
    var int12 = 0;
    var int13 = 1;
    var int14 = 0;
    while ((++int14 <= 8)) {
        [int11, int12, int13] = script19217(int14);
        script15938(comp(1290, 20), int14, 0, 0, 0, 1, 1, 35, 43, 0, 0);
        script7918(int14, 2, 0, 0, 1, 1, 0, 0, 1, 1, script227(int13));
        script3537(script10876(int13));
    };
    return;
}