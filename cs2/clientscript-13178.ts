//
function script13178(int0: number): [number, number, number] {
    var int1 = 35515;
    var int2 = 29665;
    var int3 = 35559;
    if ((int0 != -1)) {
        if ((dbrow_getfield(int0, 667728, 0) == 2)) {
            if ((dbrow_getfield(int0, 667744, 0) == 19)) {
                int1 = 35508;
                int2 = 29662;
                int3 = 35554;
            } else if ((WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 668064, 0)) >= dbrow_getfield(int0, 668080, 0))) {
                int1 = 35508;
                int2 = 29662;
                if ((dbrow_getfield(int0, 667776, 0) == 12)) {
                    int3 = 35558;
                } else if (((dbrow_getfield(int0, 668096, 0) == 1) && (PLAYERMEMBER() == false))) {
                    int3 = 35555;
                };
            } else {
                switch (dbrow_getfield(int0, 667776, 0)) {
                    case 1:
                    case 2: {
                        int1 = 35522;
                        int2 = 29663;
                        break;
                    }
                    case 14: {
                        int1 = 35529;
                        int2 = 29664;
                        int3 = 35557;
                        break;
                    }
                    case 8:
                    case 9:
                    case 4: {
                        int1 = 35529;
                        int2 = 29664;
                        break;
                    }
                    case 12: {
                        int1 = 35508;
                        int2 = 29662;
                        int3 = 35558;
                        break;
                    }
                };
                if ((((int3 == 35559) && (dbrow_getfield(int0, 668016, 0) > (script12477() - 14))) && (dbrow_getfield(int0, 668016, 0) <= script12477()))) {
                    int3 = 35556;
                };
            };
        } else if ((WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 668064, 0)) >= dbrow_getfield(int0, 668080, 0))) {
            int1 = 35508;
            int2 = 29662;
            if ((dbrow_getfield(int0, 667776, 0) == 12)) {
                int3 = 35558;
            } else if (((dbrow_getfield(int0, 668096, 0) == 1) && (PLAYERMEMBER() == false))) {
                int3 = 35555;
            };
        } else {
            switch (dbrow_getfield(int0, 667776, 0)) {
                case 1:
                case 2: {
                    int1 = 35522;
                    int2 = 29663;
                    break;
                }
                case 14: {
                    int1 = 35529;
                    int2 = 29664;
                    int3 = 35557;
                    break;
                }
                case 8:
                case 9:
                case 4: {
                    int1 = 35529;
                    int2 = 29664;
                    break;
                }
                case 12: {
                    int1 = 35508;
                    int2 = 29662;
                    int3 = 35558;
                    break;
                }
            };
            if ((((int3 == 35559) && (dbrow_getfield(int0, 668016, 0) > (script12477() - 14))) && (dbrow_getfield(int0, 668016, 0) <= script12477()))) {
                int3 = 35556;
            };
        };
    };
    return [int1, int3, int2];
}