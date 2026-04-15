//
function script18925(int0: dbrow, int1: int): quest {
    var int2 = -1 as quest;
    var int3 = -1 as quest;
    var int4 = 0;
    var int5 = script18919(int0);
    if (((int5 == -1) && (int0 != -1 as dbrow))) {
        switch (int1) {
            case 16: {
                int2 = dbrow_getfield(int0, 1167664, 0);
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
                case 16: {
                    int3 = varclient_7437;
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
                case 16: {
                    int3 = varclient_7472;
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
                case 16: {
                    int3 = varclient_7507;
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
                case 16: {
                    int3 = varclient_7542;
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
                case 16: {
                    int3 = varclient_7577;
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
                case 16: {
                    int3 = varclient_7612;
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
                case 16: {
                    int3 = varclient_7647;
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
                case 16: {
                    int3 = varclient_7682;
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
                case 16: {
                    int3 = varclient_7717;
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
                case 16: {
                    int3 = varclient_7752;
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
                case 16: {
                    int3 = varclient_7826;
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
                case 16: {
                    int3 = varclient_7861;
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
                case 16: {
                    int3 = varclient_7896;
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
                case 16: {
                    int3 = varclient_7931;
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
                case 16: {
                    int3 = varclient_7966;
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
                case 16: {
                    int3 = varclient_8001;
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
                case 16: {
                    int3 = varclient_8036;
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
                case 16: {
                    int3 = varclient_8071;
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
                case 16: {
                    int3 = varclient_8106;
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
                case 16: {
                    int3 = varclient_8141;
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
    if ((int3 == -1 as quest)) {
        return int2;
    };
    return int3;
}