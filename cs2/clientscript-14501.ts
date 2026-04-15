//
function script14501(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = DB_GETFIELDCOUNT(int0, 344272);
    var int2 = -1 as obj;
    var int3 = 1;
    var int4 = -1;
    switch (int0) {
        case 2737: {
            int3 = 0;
            while ((++int4 < int1)) {
                int2 = dbrow_getfield(int0, 344272, int4);
                switch (int2) {
                    case 39590:
                    case 39586:
                    case 39588:
                    case 39592: {
                        if ((script14500(int2) > 0)) {
                            int3 = 1;
                        };
                        break;
                    }
                    default: {
                        if ((script14500(int2) == 0)) {
                            return 0;
                        };
                        break;
                    }
                };
            };
            break;
        }
        case 2752: {
            int3 = 0;
            while ((++int4 < int1)) {
                int2 = dbrow_getfield(int0, 344272, int4);
                switch (int2) {
                    case 33516:
                    case 33520:
                    case 33518: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 0);
                        };
                        break;
                    }
                    case 10334:
                    case 10330:
                    case 10332:
                    case 10336:
                    case 10338:
                    case 10340:
                    case 10342:
                    case 10344:
                    case 10346:
                    case 10348:
                    case 10350:
                    case 10352: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 1);
                        };
                        break;
                    }
                    case 33296:
                    case 33294: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 2);
                        };
                        break;
                    }
                    default: {
                        if ((script14500(int2) == 0)) {
                            return 0;
                        };
                        break;
                    }
                };
            };
            if ((BITCOUNT(int3) == 3)) {
                int3 = 1;
            } else {
                int3 = 0;
            };
            break;
        }
        case 2753: {
            int3 = 0;
            while ((++int4 < int1)) {
                int2 = dbrow_getfield(int0, 344272, int4);
                switch (int2) {
                    case 33520:
                    case 33518: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 0);
                        };
                        break;
                    }
                    case 19308:
                    case 19311:
                    case 19314:
                    case 19317:
                    case 19320: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 1);
                        };
                        break;
                    }
                    case 33296:
                    case 33294:
                    case 41887:
                    case 33298:
                    case 36274: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 2);
                        };
                        break;
                    }
                    default: {
                        if ((script14500(int2) == 0)) {
                            return 0;
                        };
                        break;
                    }
                };
            };
            if ((BITCOUNT(int3) == 3)) {
                int3 = 1;
            } else {
                int3 = 0;
            };
            break;
        }
        case 2754: {
            int3 = 0;
            while ((++int4 < int1)) {
                int2 = dbrow_getfield(int0, 344272, int4);
                switch (int2) {
                    case 33520:
                    case 33518: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 0);
                        };
                        break;
                    }
                    case 41861:
                    case 41863:
                    case 41865:
                    case 41867:
                    case 41869:
                    case 41871:
                    case 41873:
                    case 41875:
                    case 41877:
                    case 41879:
                    case 41881:
                    case 41883: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 1);
                        };
                        break;
                    }
                    case 41995: {
                        break;
                    }
                    default: {
                        if ((script14500(int2) == 0)) {
                            return 0;
                        };
                        break;
                    }
                };
            };
            if ((BITCOUNT(int3) == 2)) {
                int3 = 1;
            } else {
                int3 = 0;
            };
            break;
        }
        case 3689: {
            int3 = 0;
            while ((++int4 < int1)) {
                int2 = dbrow_getfield(int0, 344272, int4);
                switch (int2) {
                    case 41861:
                    case 41863:
                    case 41865:
                    case 41867: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 0);
                        };
                        break;
                    }
                    case 41869:
                    case 41871:
                    case 41873:
                    case 41875: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 1);
                        };
                        break;
                    }
                    case 41877:
                    case 41879:
                    case 41881:
                    case 41883: {
                        if ((script14500(int2) > 0)) {
                            int3 = SETBIT(int3, 2);
                        };
                        break;
                    }
                    default: {
                        if ((script14500(int2) == 0)) {
                            return 0;
                        };
                        break;
                    }
                };
            };
            if ((BITCOUNT(int3) == 3)) {
                int3 = 1;
            } else {
                int3 = 0;
            };
            break;
        }
        default:         if ((++int4 < int1)) {
            if ((script14496(int0, int4) == 0)) {
                return 0;
            };
        };

    };
    return int3;
}