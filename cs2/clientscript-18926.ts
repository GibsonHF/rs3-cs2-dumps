//
function script18926(int0: dbrow, int1: int): coordgrid {
    var int2 = -1 as coordgrid;
    var int3 = -1 as coordgrid;
    var int4 = 0;
    var int5 = script18919(int0);
    if (((int5 == -1) && (int0 != -1 as dbrow))) {
        switch (int1) {
            case 26: {
                int2 = dbrow_getfield(int0, 1167824, 0);
                break;
            }
            default: {
                int4 = 1;
                break;
            }
        };
    };
    switch (int5) {
        case 0: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7447;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 1: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7482;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7517;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7552;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 4: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7587;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 5: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7622;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 6: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7657;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 7: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7692;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 8: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7727;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 9: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7762;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 10: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7836;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 11: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7871;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 12: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7906;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 13: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7941;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 14: {
            switch (int1) {
                case 26: {
                    int3 = varclient_7976;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 15: {
            switch (int1) {
                case 26: {
                    int3 = varclient_8011;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 16: {
            switch (int1) {
                case 26: {
                    int3 = varclient_8046;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 17: {
            switch (int1) {
                case 26: {
                    int3 = varclient_8081;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 18: {
            switch (int1) {
                case 26: {
                    int3 = varclient_8116;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
        case 19: {
            switch (int1) {
                case 26: {
                    int3 = varclient_8151;
                    break;
                }
                default: {
                    int4 = 1;
                    break;
                }
            };
            break;
        }
    };
    script18849(int4, int1);
    if ((int3 == -1 as coordgrid)) {
        return int2;
    };
    return int3;
}