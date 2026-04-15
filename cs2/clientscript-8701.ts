//
function script8701(int0: int, int1: int): [int, int, int, int, int, int, int, int, int, int, int] {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as cs2enum;
    var int12 = -1 as struct;
    var int13 = -1 as struct;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    switch (int0) {
        case 15:
        case 17:
        case 16: {
            int11 = script8698(int0);
            if ((int11 != -1 as cs2enum)) {
                int12 = enum_getvalue(0, 73, int11, int1);
                if ((int12 == -1 as struct)) {
                    int12 = enum_getvalue(0, 73, 7712 as cs2enum, int1);
                };
                if ((int12 != -1 as struct)) {
                    int2 = struct_getparam(int12, 3482);
                    int3 = struct_getparam(int12, 3483);
                    int15 = struct_getparam(int12, 3380);
                    int16 = struct_getparam(int12, 6832);
                    int4 = struct_getparam(int12, 3484);
                    int5 = struct_getparam(int12, 3485);
                    int8 = struct_getparam(int12, 3488);
                    int9 = struct_getparam(int12, 5768);
                    if ((script8137(int1) == 1)) {
                        int6 = struct_getparam(int12, 3489);
                        int7 = struct_getparam(int12, 3490);
                    } else {
                        int6 = struct_getparam(int12, 3486);
                        int7 = struct_getparam(int12, 3487);
                    };
                    switch (int1) {
                        case 1003: {
                            int3 = (int3 - (38 * (((script9670(varbitplayer_29138, 0) + script9670(varbitplayer_29139, 0)) + script9670(varbitplayer_29140, 0)) + script9670(varbitplayer_29141, 0))));
                            break;
                        }
                        case 1032: {
                            int3 = (int3 - (38 * ((script9670(varbitplayer_29139, 0) + script9670(varbitplayer_29140, 0)) + script9670(varbitplayer_29141, 0))));
                            break;
                        }
                        case 1033: {
                            int3 = (int3 - (38 * (script9670(varbitplayer_29140, 0) + script9670(varbitplayer_29141, 0))));
                            break;
                        }
                        case 1034: {
                            int3 = (int3 - (38 * script9670(varbitplayer_29141, 0)));
                            break;
                        }
                        case 1035: {
                            break;
                        }
                        case 1009:
                        case 1038: {
                            int3 = (int3 - (38 * (((script9670(varbitplayer_29138, 0) + script9670(varbitplayer_29139, 0)) + script9670(varbitplayer_29140, 0)) + script9670(varbitplayer_29141, 0))));
                            break;
                        }
                    };
                    int10 = 1;
                };
            };
            break;
        }
        case 1:
        case 0:
        case 2:
        case 3:
        case 4:
        case 11:
        case 14: {
            int11 = script8698(int0);
            if ((int11 != -1 as cs2enum)) {
                int12 = enum_getvalue(0, 73, int11, int1);
                if ((int12 == -1 as struct)) {
                    int12 = enum_getvalue(0, 73, 7712 as cs2enum, int1);
                };
                if ((int12 != -1 as struct)) {
                    int2 = struct_getparam(int12, 3482);
                    int3 = struct_getparam(int12, 3483);
                    int15 = struct_getparam(int12, 3380);
                    int16 = struct_getparam(int12, 6832);
                    int4 = struct_getparam(int12, 3484);
                    int5 = struct_getparam(int12, 3485);
                    int8 = struct_getparam(int12, 3488);
                    int9 = struct_getparam(int12, 5768);
                    if ((script8137(int1) == 1)) {
                        int6 = struct_getparam(int12, 3489);
                        int7 = struct_getparam(int12, 3490);
                    } else {
                        int6 = struct_getparam(int12, 3486);
                        int7 = struct_getparam(int12, 3487);
                    };
                    int10 = 1;
                };
            };
            break;
        }
        case 6: {
            switch (int1) {
                case 1000: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19041, varbitclient_19042, varbitclient_19037, varbitclient_19038, varbitclient_19039, varbitclient_19043, varbitclient_19040, varbitclient_32774, 1];
                    break;
                }
                case 1002: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19048, varbitclient_19049, varbitclient_19044, varbitclient_19045, varbitclient_19046, varbitclient_19050, 1, varbitclient_32775, 1];
                    break;
                }
                case 1004: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19055, varbitclient_19056, varbitclient_19051, varbitclient_19052, varbitclient_19053, varbitclient_19057, varbitclient_19054, varbitclient_32776, 1];
                    break;
                }
                case 1003: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19062, varbitclient_19063, varbitclient_19058, varbitclient_19059, varbitclient_19060, varbitclient_19064, 1, varbitclient_32777, 1];
                    break;
                }
                case 18: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19069, varbitclient_19070, varbitclient_19065, varbitclient_19066, varbitclient_19067, varbitclient_19071, varbitclient_19068, varbitclient_32778, 1];
                    break;
                }
                case 2: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19076, varbitclient_19077, varbitclient_19072, varbitclient_19073, varbitclient_19074, varbitclient_19078, varbitclient_19075, varbitclient_32779, 1];
                    break;
                }
                case 1005: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19083, varbitclient_19084, varbitclient_19079, varbitclient_19080, varbitclient_19081, varbitclient_19085, varbitclient_19082, varbitclient_32780, 1];
                    break;
                }
                case 19: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19090, varbitclient_19091, varbitclient_19086, varbitclient_19087, varbitclient_19088, varbitclient_19092, varbitclient_19089, varbitclient_32781, 1];
                    break;
                }
                case 20: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19097, varbitclient_19098, varbitclient_19093, varbitclient_19094, varbitclient_19095, varbitclient_19099, varbitclient_19096, varbitclient_32782, 1];
                    break;
                }
                case 21: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19104, varbitclient_19105, varbitclient_19100, varbitclient_19101, varbitclient_19102, varbitclient_19106, varbitclient_19103, varbitclient_32783, 1];
                    break;
                }
                case 3: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19111, varbitclient_19112, varbitclient_19107, varbitclient_19108, varbitclient_19109, varbitclient_19113, varbitclient_19110, varbitclient_32784, 1];
                    break;
                }
                case 1006: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19118, varbitclient_19119, varbitclient_19114, varbitclient_19115, varbitclient_19116, varbitclient_19120, varbitclient_19117, varbitclient_32785, 1];
                    break;
                }
                case 1007: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19125, varbitclient_19126, varbitclient_19121, varbitclient_19122, varbitclient_19123, varbitclient_19127, varbitclient_19124, varbitclient_32786, 1];
                    break;
                }
                case 17: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19132, varbitclient_19133, varbitclient_19128, varbitclient_19129, varbitclient_19130, varbitclient_19134, varbitclient_19131, varbitclient_32787, 1];
                    break;
                }
                case 12: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19139, varbitclient_19140, varbitclient_19135, varbitclient_19136, varbitclient_19137, varbitclient_19141, varbitclient_19138, varbitclient_32788, 1];
                    break;
                }
                case 1019: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19146, varbitclient_19147, varbitclient_19142, varbitclient_19143, varbitclient_19144, varbitclient_19148, varbitclient_19145, varbitclient_32789, 1];
                    break;
                }
                case 6: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19153, varbitclient_19154, varbitclient_19149, varbitclient_19150, varbitclient_19151, varbitclient_19155, varbitclient_19152, varbitclient_32790, 1];
                    break;
                }
                case 7: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19160, varbitclient_19161, varbitclient_19156, varbitclient_19157, varbitclient_19158, varbitclient_19162, varbitclient_19159, varbitclient_32791, 1];
                    break;
                }
                case 5: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19167, varbitclient_19168, varbitclient_19163, varbitclient_19164, varbitclient_19165, varbitclient_19169, varbitclient_19166, varbitclient_32792, 1];
                    break;
                }
                case 8: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19174, varbitclient_19175, varbitclient_19170, varbitclient_19171, varbitclient_19172, varbitclient_19176, varbitclient_19173, varbitclient_32793, 1];
                    break;
                }
                case 1008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19188, varbitclient_19189, varbitclient_19184, varbitclient_19185, varbitclient_19186, varbitclient_19190, varbitclient_19187, varbitclient_32795, 1];
                    break;
                }
                case 9: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19195, varbitclient_19196, varbitclient_19191, varbitclient_19192, varbitclient_19193, varbitclient_19197, varbitclient_19194, varbitclient_32796, 1];
                    break;
                }
                case 0: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19202, varbitclient_19203, varbitclient_19198, varbitclient_19199, varbitclient_19200, varbitclient_19204, varbitclient_19201, varbitclient_32797, 1];
                    break;
                }
                case 4: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19209, varbitclient_19210, varbitclient_19205, varbitclient_19206, varbitclient_19207, varbitclient_19211, varbitclient_19208, varbitclient_32798, 1];
                    break;
                }
                case 22: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19216, varbitclient_19217, varbitclient_19212, varbitclient_19213, varbitclient_19214, varbitclient_19218, varbitclient_19215, varbitclient_32799, 1];
                    break;
                }
                case 10: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19223, varbitclient_19224, varbitclient_19219, varbitclient_19220, varbitclient_19221, varbitclient_19225, varbitclient_19222, varbitclient_32800, 1];
                    break;
                }
                case 11: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19230, varbitclient_19231, varbitclient_19226, varbitclient_19227, varbitclient_19228, varbitclient_19232, varbitclient_19229, varbitclient_32801, 1];
                    break;
                }
                case 14: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19237, varbitclient_19238, varbitclient_19233, varbitclient_19234, varbitclient_19235, varbitclient_19239, varbitclient_19236, varbitclient_32802, 1];
                    break;
                }
                case 16: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19244, varbitclient_19245, varbitclient_19240, varbitclient_19241, varbitclient_19242, varbitclient_19246, varbitclient_19243, varbitclient_32803, 1];
                    break;
                }
                case 1009: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19251, varbitclient_19252, varbitclient_19247, varbitclient_19248, varbitclient_19249, varbitclient_19253, varbitclient_19250, varbitclient_32804, 1];
                    break;
                }
                case 1010: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19258, varbitclient_19259, varbitclient_19254, varbitclient_19255, varbitclient_19256, varbitclient_19260, varbitclient_19257, varbitclient_32805, 1];
                    break;
                }
                case 1012: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19272, varbitclient_19273, varbitclient_19268, varbitclient_19269, varbitclient_19270, varbitclient_19274, varbitclient_19271, varbitclient_32807, 1];
                    break;
                }
                case 1013: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19279, varbitclient_19280, varbitclient_19275, varbitclient_19276, varbitclient_19277, varbitclient_19281, varbitclient_19278, varbitclient_32808, 1];
                    break;
                }
                case 1014: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19286, varbitclient_19287, varbitclient_19282, varbitclient_19283, varbitclient_19284, varbitclient_19288, varbitclient_19285, varbitclient_32809, 1];
                    break;
                }
                case 15: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19293, varbitclient_19294, varbitclient_19289, varbitclient_19290, varbitclient_19291, varbitclient_19295, varbitclient_19292, varbitclient_32810, 1];
                    break;
                }
                case 1015: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19300, varbitclient_19301, varbitclient_19296, varbitclient_19297, varbitclient_19298, varbitclient_19302, varbitclient_19299, varbitclient_32811, 1];
                    break;
                }
                case 1016: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19307, varbitclient_19308, varbitclient_19303, varbitclient_19304, varbitclient_19305, varbitclient_19309, varbitclient_19306, varbitclient_32812, 1];
                    break;
                }
                case 1017: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19314, varbitclient_19315, varbitclient_19310, varbitclient_19311, varbitclient_19312, varbitclient_19316, varbitclient_19313, varbitclient_32813, 1];
                    break;
                }
                case 1018: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19321, varbitclient_19322, varbitclient_19317, varbitclient_19318, varbitclient_19319, varbitclient_19323, varbitclient_19320, varbitclient_32814, 1];
                    break;
                }
                case 1001: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19328, varbitclient_19329, varbitclient_19324, varbitclient_19325, varbitclient_19326, varbitclient_19330, varbitclient_19327, varbitclient_32815, 1];
                    break;
                }
                case 23: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_20838, varbitclient_20839, varbitclient_20834, varbitclient_20835, varbitclient_20836, varbitclient_20840, varbitclient_20837, varbitclient_32816, 1];
                    break;
                }
                case 2008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_22329, varbitclient_22330, varbitclient_22325, varbitclient_22326, varbitclient_22327, varbitclient_22331, varbitclient_22328, varbitclient_32818, 1];
                    break;
                }
                case 1021: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_22990, varbitclient_22991, varbitclient_22986, varbitclient_22987, varbitclient_22988, varbitclient_22992, varbitclient_22989, varbitclient_32819, 1];
                    break;
                }
                case 26: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_23116, varbitclient_23117, varbitclient_23112, varbitclient_23113, varbitclient_23114, varbitclient_23118, varbitclient_23115, varbitclient_32820, 1];
                    break;
                }
                case 24: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_23123, varbitclient_23124, varbitclient_23119, varbitclient_23120, varbitclient_23121, varbitclient_23125, varbitclient_23122, varbitclient_32821, 1];
                    break;
                }
                case 25: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24727, varbitclient_24728, varbitclient_24723, varbitclient_24724, varbitclient_24725, varbitclient_24729, varbitclient_24726, varbitclient_32822, 1];
                    break;
                }
                case 1023: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24734, varbitclient_24735, varbitclient_24730, varbitclient_24731, varbitclient_24732, varbitclient_24736, varbitclient_24733, varbitclient_32823, 1];
                    break;
                }
                case 27: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24741, varbitclient_24742, varbitclient_24737, varbitclient_24738, varbitclient_24739, varbitclient_24743, varbitclient_24740, varbitclient_32824, 1];
                    break;
                }
                case 1024: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26200, varbitclient_26201, varbitclient_26196, varbitclient_26197, varbitclient_26198, varbitclient_26202, varbitclient_26199, varbitclient_32825, 1];
                    break;
                }
                case 1025: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26708, varbitclient_26709, varbitclient_26704, varbitclient_26705, varbitclient_26706, varbitclient_26710, varbitclient_26707, varbitclient_32826, 1];
                    break;
                }
                case 1026: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26764, varbitclient_26765, varbitclient_26760, varbitclient_26761, varbitclient_26762, varbitclient_26766, varbitclient_26763, varbitclient_32827, 1];
                    break;
                }
                case 28: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26984, varbitclient_26985, varbitclient_26980, varbitclient_26981, varbitclient_26982, varbitclient_26986, varbitclient_26983, varbitclient_32828, 1];
                    break;
                }
                case 1027: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27420, varbitclient_27421, varbitclient_27416, varbitclient_27417, varbitclient_27418, varbitclient_27422, varbitclient_27419, varbitclient_32829, 1];
                    break;
                }
                case 1028: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27973, varbitclient_27974, varbitclient_27969, varbitclient_27970, varbitclient_27971, varbitclient_27975, varbitclient_27972, varbitclient_32830, 1];
                    break;
                }
                case 1029: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27997, varbitclient_27998, varbitclient_27993, varbitclient_27994, varbitclient_27995, varbitclient_27999, varbitclient_27996, varbitclient_32831, 1];
                    break;
                }
                case 1030: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_28261, varbitclient_28262, varbitclient_28257, varbitclient_28258, varbitclient_28259, varbitclient_28263, varbitclient_28260, varbitclient_32832, 1];
                    break;
                }
                case 1031: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_28397, varbitclient_28398, varbitclient_28393, varbitclient_28394, varbitclient_28395, varbitclient_28399, varbitclient_28396, varbitclient_32833, 1];
                    break;
                }
                case 1032: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29287, varbitclient_29288, varbitclient_29283, varbitclient_29284, varbitclient_29285, varbitclient_29289, 1, varbitclient_32834, 1];
                    break;
                }
                case 1033: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29294, varbitclient_29295, varbitclient_29290, varbitclient_29291, varbitclient_29292, varbitclient_29296, 1, varbitclient_32835, 1];
                    break;
                }
                case 1034: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29301, varbitclient_29302, varbitclient_29297, varbitclient_29298, varbitclient_29299, varbitclient_29303, 1, varbitclient_32836, 1];
                    break;
                }
                case 1035: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29308, varbitclient_29309, varbitclient_29304, varbitclient_29305, varbitclient_29306, varbitclient_29310, 1, varbitclient_32837, 1];
                    break;
                }
                case 29: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29555, varbitclient_29556, varbitclient_29551, varbitclient_29552, varbitclient_29553, varbitclient_29557, varbitclient_29554, varbitclient_32838, 1];
                    break;
                }
                case 1036: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_30591, varbitclient_30592, varbitclient_30587, varbitclient_30588, varbitclient_30589, varbitclient_30593, varbitclient_30590, varbitclient_32839, 1];
                    break;
                }
                case 30: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_30644, varbitclient_30645, varbitclient_30640, varbitclient_30641, varbitclient_30642, varbitclient_30646, varbitclient_30643, varbitclient_32840, 1];
                    break;
                }
                case 1037: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31295, varbitclient_31296, varbitclient_31291, varbitclient_31292, varbitclient_31293, varbitclient_31297, varbitclient_31294, varbitclient_32841, 1];
                    break;
                }
                case 31: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_33570, varbitclient_33571, varbitclient_33566, varbitclient_33567, varbitclient_33568, varbitclient_33572, varbitclient_33569, varbitclient_33573, 1];
                    break;
                }
                case 1038: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35343, varbitclient_35344, varbitclient_35339, varbitclient_35340, varbitclient_35341, varbitclient_35345, varbitclient_35342, varbitclient_35346, 1];
                    break;
                }
                case 32: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35429, varbitclient_35430, varbitclient_35425, varbitclient_35426, varbitclient_35427, varbitclient_35431, varbitclient_35428, varbitclient_35432, 1];
                    break;
                }
                case 1039: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36242, varbitclient_36243, varbitclient_36238, varbitclient_36239, varbitclient_36240, varbitclient_36244, varbitclient_36241, varbitclient_36245, 1];
                    break;
                }
                case 33: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36555, varbitclient_36556, varbitclient_36551, varbitclient_36552, varbitclient_36553, varbitclient_36557, varbitclient_36554, varbitclient_36558, 1];
                    break;
                }
                case 34: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36563, varbitclient_36564, varbitclient_36559, varbitclient_36560, varbitclient_36561, varbitclient_36565, varbitclient_36562, varbitclient_36566, 1];
                    break;
                }
                case 35: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36571, varbitclient_36572, varbitclient_36567, varbitclient_36568, varbitclient_36569, varbitclient_36573, varbitclient_36570, varbitclient_36574, 1];
                    break;
                }
                case 36: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36579, varbitclient_36580, varbitclient_36575, varbitclient_36576, varbitclient_36577, varbitclient_36581, varbitclient_36578, varbitclient_36582, 1];
                    break;
                }
                case 39: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36587, varbitclient_36588, varbitclient_36583, varbitclient_36584, varbitclient_36585, varbitclient_36589, varbitclient_36586, varbitclient_36590, 1];
                    break;
                }
                case 40: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36595, varbitclient_36596, varbitclient_36591, varbitclient_36592, varbitclient_36593, varbitclient_36597, varbitclient_36594, varbitclient_36598, 1];
                    break;
                }
                case 41: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_37189, varbitclient_37190, varbitclient_37185, varbitclient_37186, varbitclient_37187, varbitclient_37191, varbitclient_37188, varbitclient_37192, 1];
                    break;
                }
                case 1040: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38680, varbitclient_38681, varbitclient_38676, varbitclient_38677, varbitclient_38678, varbitclient_38682, varbitclient_38679, varbitclient_38683, 1];
                    break;
                }
                case 1041: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38724, varbitclient_38725, varbitclient_38720, varbitclient_38721, varbitclient_38722, varbitclient_38726, varbitclient_38723, varbitclient_38727, 1];
                    break;
                }
                case 1045: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40626, varbitclient_40627, varbitclient_40622, varbitclient_40623, varbitclient_40624, varbitclient_40628, varbitclient_40625, varbitclient_40629, 1];
                    break;
                }
                case 1047: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40829, varbitclient_40830, varbitclient_40825, varbitclient_40826, varbitclient_40827, varbitclient_40831, varbitclient_40828, varbitclient_40832, 1];
                    break;
                }
                case 1049: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_44869, varbitclient_44870, varbitclient_44865, varbitclient_44866, varbitclient_44867, varbitclient_44871, varbitclient_44868, varbitclient_44872, 1];
                    break;
                }
                case 1050: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_49682, varbitclient_49683, varbitclient_49678, varbitclient_49679, varbitclient_49680, varbitclient_49684, varbitclient_49681, varbitclient_49685, 1];
                    break;
                }
                case 1051: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_50414, varbitclient_50415, varbitclient_50410, varbitclient_50411, varbitclient_50412, varbitclient_50416, varbitclient_50413, varbitclient_50417, 1];
                    break;
                }
                case 42: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53351, varbitclient_53352, varbitclient_53347, varbitclient_53348, varbitclient_53349, varbitclient_53353, varbitclient_53350, varbitclient_53354, 1];
                    break;
                }
                case 43: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53359, varbitclient_53360, varbitclient_53355, varbitclient_53356, varbitclient_53357, varbitclient_53361, varbitclient_53358, varbitclient_53362, 1];
                    break;
                }
                case 44: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53367, varbitclient_53368, varbitclient_53363, varbitclient_53364, varbitclient_53365, varbitclient_53369, varbitclient_53366, varbitclient_53370, 1];
                    break;
                }
                case 1052: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55008, varbitclient_55009, varbitclient_55004, varbitclient_55005, varbitclient_55006, varbitclient_55010, varbitclient_55007, varbitclient_55011, 1];
                    break;
                }
                case 1053: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55132, varbitclient_55133, varbitclient_55128, varbitclient_55129, varbitclient_55130, varbitclient_55134, varbitclient_55131, varbitclient_55135, 1];
                    break;
                }
                case 45: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56660, varbitclient_56661, varbitclient_56656, varbitclient_56657, varbitclient_56658, varbitclient_56662, varbitclient_56659, varbitclient_56663, 1];
                    break;
                }
                case 46: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56668, varbitclient_56669, varbitclient_56664, varbitclient_56665, varbitclient_56666, varbitclient_56670, varbitclient_56667, varbitclient_56671, 1];
                    break;
                }
            };
            int6 = (int6 - 1);
            int7 = (int7 - 1);
            break;
        }
        case 7: {
            switch (int1) {
                case 1000: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19633, varbitclient_19634, varbitclient_19629, varbitclient_19630, varbitclient_19631, varbitclient_19635, varbitclient_19632, varbitclient_32842, 1];
                    break;
                }
                case 1002: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19640, varbitclient_19641, varbitclient_19636, varbitclient_19637, varbitclient_19638, varbitclient_19642, 1, varbitclient_32843, 1];
                    break;
                }
                case 1004: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19647, varbitclient_19648, varbitclient_19643, varbitclient_19644, varbitclient_19645, varbitclient_19649, varbitclient_19646, varbitclient_32844, 1];
                    break;
                }
                case 1003: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19654, varbitclient_19655, varbitclient_19650, varbitclient_19651, varbitclient_19652, varbitclient_19656, 1, varbitclient_32845, 1];
                    break;
                }
                case 18: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19661, varbitclient_19662, varbitclient_19657, varbitclient_19658, varbitclient_19659, varbitclient_19663, varbitclient_19660, varbitclient_32846, 1];
                    break;
                }
                case 2: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19668, varbitclient_19669, varbitclient_19664, varbitclient_19665, varbitclient_19666, varbitclient_19670, varbitclient_19667, varbitclient_32847, 1];
                    break;
                }
                case 1005: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19675, varbitclient_19676, varbitclient_19671, varbitclient_19672, varbitclient_19673, varbitclient_19677, varbitclient_19674, varbitclient_32848, 1];
                    break;
                }
                case 19: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19682, varbitclient_19683, varbitclient_19678, varbitclient_19679, varbitclient_19680, varbitclient_19684, varbitclient_19681, varbitclient_32849, 1];
                    break;
                }
                case 20: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19689, varbitclient_19690, varbitclient_19685, varbitclient_19686, varbitclient_19687, varbitclient_19691, varbitclient_19688, varbitclient_32850, 1];
                    break;
                }
                case 21: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19696, varbitclient_19697, varbitclient_19692, varbitclient_19693, varbitclient_19694, varbitclient_19698, varbitclient_19695, varbitclient_32851, 1];
                    break;
                }
                case 3: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19703, varbitclient_19704, varbitclient_19699, varbitclient_19700, varbitclient_19701, varbitclient_19705, varbitclient_19702, varbitclient_32852, 1];
                    break;
                }
                case 1006: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19710, varbitclient_19711, varbitclient_19706, varbitclient_19707, varbitclient_19708, varbitclient_19712, varbitclient_19709, varbitclient_32853, 1];
                    break;
                }
                case 1007: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19717, varbitclient_19718, varbitclient_19713, varbitclient_19714, varbitclient_19715, varbitclient_19719, varbitclient_19716, varbitclient_32854, 1];
                    break;
                }
                case 17: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19724, varbitclient_19725, varbitclient_19720, varbitclient_19721, varbitclient_19722, varbitclient_19726, varbitclient_19723, varbitclient_32855, 1];
                    break;
                }
                case 12: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19731, varbitclient_19732, varbitclient_19727, varbitclient_19728, varbitclient_19729, varbitclient_19733, varbitclient_19730, varbitclient_32856, 1];
                    break;
                }
                case 1019: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19738, varbitclient_19739, varbitclient_19734, varbitclient_19735, varbitclient_19736, varbitclient_19740, varbitclient_19737, varbitclient_32857, 1];
                    break;
                }
                case 6: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19745, varbitclient_19746, varbitclient_19741, varbitclient_19742, varbitclient_19743, varbitclient_19747, varbitclient_19744, varbitclient_32858, 1];
                    break;
                }
                case 7: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19752, varbitclient_19753, varbitclient_19748, varbitclient_19749, varbitclient_19750, varbitclient_19754, varbitclient_19751, varbitclient_32859, 1];
                    break;
                }
                case 5: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19759, varbitclient_19760, varbitclient_19755, varbitclient_19756, varbitclient_19757, varbitclient_19761, varbitclient_19758, varbitclient_32860, 1];
                    break;
                }
                case 8: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19766, varbitclient_19767, varbitclient_19762, varbitclient_19763, varbitclient_19764, varbitclient_19768, varbitclient_19765, varbitclient_32861, 1];
                    break;
                }
                case 1008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19780, varbitclient_19781, varbitclient_19776, varbitclient_19777, varbitclient_19778, varbitclient_19782, varbitclient_19779, varbitclient_32863, 1];
                    break;
                }
                case 9: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19787, varbitclient_19788, varbitclient_19783, varbitclient_19784, varbitclient_19785, varbitclient_19789, varbitclient_19786, varbitclient_32864, 1];
                    break;
                }
                case 0: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19794, varbitclient_19795, varbitclient_19790, varbitclient_19791, varbitclient_19792, varbitclient_19796, varbitclient_19793, varbitclient_32865, 1];
                    break;
                }
                case 4: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19801, varbitclient_19802, varbitclient_19797, varbitclient_19798, varbitclient_19799, varbitclient_19803, varbitclient_19800, varbitclient_32866, 1];
                    break;
                }
                case 22: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19808, varbitclient_19809, varbitclient_19804, varbitclient_19805, varbitclient_19806, varbitclient_19810, varbitclient_19807, varbitclient_32867, 1];
                    break;
                }
                case 10: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19815, varbitclient_19816, varbitclient_19811, varbitclient_19812, varbitclient_19813, varbitclient_19817, varbitclient_19814, varbitclient_32868, 1];
                    break;
                }
                case 11: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19822, varbitclient_19823, varbitclient_19818, varbitclient_19819, varbitclient_19820, varbitclient_19824, varbitclient_19821, varbitclient_32869, 1];
                    break;
                }
                case 14: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19829, varbitclient_19830, varbitclient_19825, varbitclient_19826, varbitclient_19827, varbitclient_19831, varbitclient_19828, varbitclient_32870, 1];
                    break;
                }
                case 16: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19836, varbitclient_19837, varbitclient_19832, varbitclient_19833, varbitclient_19834, varbitclient_19838, varbitclient_19835, varbitclient_32871, 1];
                    break;
                }
                case 1009: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19843, varbitclient_19844, varbitclient_19839, varbitclient_19840, varbitclient_19841, varbitclient_19845, varbitclient_19842, varbitclient_32872, 1];
                    break;
                }
                case 1010: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19850, varbitclient_19851, varbitclient_19846, varbitclient_19847, varbitclient_19848, varbitclient_19852, varbitclient_19849, varbitclient_32873, 1];
                    break;
                }
                case 1012: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19864, varbitclient_19865, varbitclient_19860, varbitclient_19861, varbitclient_19862, varbitclient_19866, varbitclient_19863, varbitclient_32875, 1];
                    break;
                }
                case 1013: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19871, varbitclient_19872, varbitclient_19867, varbitclient_19868, varbitclient_19869, varbitclient_19873, varbitclient_19870, varbitclient_32876, 1];
                    break;
                }
                case 1014: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19878, varbitclient_19879, varbitclient_19874, varbitclient_19875, varbitclient_19876, varbitclient_19880, varbitclient_19877, varbitclient_32877, 1];
                    break;
                }
                case 15: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19885, varbitclient_19886, varbitclient_19881, varbitclient_19882, varbitclient_19883, varbitclient_19887, varbitclient_19884, varbitclient_32878, 1];
                    break;
                }
                case 1015: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19892, varbitclient_19893, varbitclient_19888, varbitclient_19889, varbitclient_19890, varbitclient_19894, varbitclient_19891, varbitclient_32879, 1];
                    break;
                }
                case 1016: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19899, varbitclient_19900, varbitclient_19895, varbitclient_19896, varbitclient_19897, varbitclient_19901, varbitclient_19898, varbitclient_32880, 1];
                    break;
                }
                case 1017: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19906, varbitclient_19907, varbitclient_19902, varbitclient_19903, varbitclient_19904, varbitclient_19908, varbitclient_19905, varbitclient_32881, 1];
                    break;
                }
                case 1018: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19913, varbitclient_19914, varbitclient_19909, varbitclient_19910, varbitclient_19911, varbitclient_19915, varbitclient_19912, varbitclient_32882, 1];
                    break;
                }
                case 1001: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19920, varbitclient_19921, varbitclient_19916, varbitclient_19917, varbitclient_19918, varbitclient_19922, varbitclient_19919, varbitclient_32883, 1];
                    break;
                }
                case 23: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_20852, varbitclient_20853, varbitclient_20848, varbitclient_20849, varbitclient_20850, varbitclient_20854, varbitclient_20851, varbitclient_32884, 1];
                    break;
                }
                case 2008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_22315, varbitclient_22316, varbitclient_22311, varbitclient_22312, varbitclient_22313, varbitclient_22317, varbitclient_22314, varbitclient_32886, 1];
                    break;
                }
                case 1021: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_22983, varbitclient_22984, varbitclient_22979, varbitclient_22980, varbitclient_22981, varbitclient_22985, varbitclient_22982, varbitclient_32887, 1];
                    break;
                }
                case 26: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_23102, varbitclient_23103, varbitclient_23098, varbitclient_23099, varbitclient_23100, varbitclient_23104, varbitclient_23101, varbitclient_32888, 1];
                    break;
                }
                case 24: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_23109, varbitclient_23110, varbitclient_23105, varbitclient_23106, varbitclient_23107, varbitclient_23111, varbitclient_23108, varbitclient_32889, 1];
                    break;
                }
                case 25: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24748, varbitclient_24749, varbitclient_24744, varbitclient_24745, varbitclient_24746, varbitclient_24750, varbitclient_24747, varbitclient_32890, 1];
                    break;
                }
                case 1023: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24755, varbitclient_24756, varbitclient_24751, varbitclient_24752, varbitclient_24753, varbitclient_24757, varbitclient_24754, varbitclient_32891, 1];
                    break;
                }
                case 27: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24762, varbitclient_24763, varbitclient_24758, varbitclient_24759, varbitclient_24760, varbitclient_24764, varbitclient_24761, varbitclient_32892, 1];
                    break;
                }
                case 1024: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26207, varbitclient_26208, varbitclient_26203, varbitclient_26204, varbitclient_26205, varbitclient_26209, varbitclient_26206, varbitclient_32893, 1];
                    break;
                }
                case 1025: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26715, varbitclient_26716, varbitclient_26711, varbitclient_26712, varbitclient_26713, varbitclient_26717, varbitclient_26714, varbitclient_32894, 1];
                    break;
                }
                case 1026: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26771, varbitclient_26772, varbitclient_26767, varbitclient_26768, varbitclient_26769, varbitclient_26773, varbitclient_26770, varbitclient_32895, 1];
                    break;
                }
                case 28: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26991, varbitclient_26992, varbitclient_26987, varbitclient_26988, varbitclient_26989, varbitclient_26993, varbitclient_26990, varbitclient_32896, 1];
                    break;
                }
                case 1027: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27427, varbitclient_27428, varbitclient_27423, varbitclient_27424, varbitclient_27425, varbitclient_27429, varbitclient_27426, varbitclient_32897, 1];
                    break;
                }
                case 1028: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27980, varbitclient_27981, varbitclient_27976, varbitclient_27977, varbitclient_27978, varbitclient_27982, varbitclient_27979, varbitclient_32898, 1];
                    break;
                }
                case 1029: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_28004, varbitclient_28005, varbitclient_28000, varbitclient_28001, varbitclient_28002, varbitclient_28006, varbitclient_28003, varbitclient_32899, 1];
                    break;
                }
                case 1030: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_28268, varbitclient_28269, varbitclient_28264, varbitclient_28265, varbitclient_28266, varbitclient_28270, varbitclient_28267, varbitclient_32900, 1];
                    break;
                }
                case 1031: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_28404, varbitclient_28405, varbitclient_28400, varbitclient_28401, varbitclient_28402, varbitclient_28406, varbitclient_28403, varbitclient_32901, 1];
                    break;
                }
                case 1032: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29315, varbitclient_29316, varbitclient_29311, varbitclient_29312, varbitclient_29313, varbitclient_29317, 1, varbitclient_32902, 1];
                    break;
                }
                case 1033: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29322, varbitclient_29323, varbitclient_29318, varbitclient_29319, varbitclient_29320, varbitclient_29324, 1, varbitclient_32903, 1];
                    break;
                }
                case 1034: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29329, varbitclient_29330, varbitclient_29325, varbitclient_29326, varbitclient_29327, varbitclient_29331, 1, varbitclient_32904, 1];
                    break;
                }
                case 1035: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29336, varbitclient_29337, varbitclient_29332, varbitclient_29333, varbitclient_29334, varbitclient_29338, 1, varbitclient_32905, 1];
                    break;
                }
                case 29: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29562, varbitclient_29563, varbitclient_29558, varbitclient_29559, varbitclient_29560, varbitclient_29564, varbitclient_29561, varbitclient_32906, 1];
                    break;
                }
                case 1036: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_30598, varbitclient_30599, varbitclient_30594, varbitclient_30595, varbitclient_30596, varbitclient_30600, varbitclient_30597, varbitclient_32907, 1];
                    break;
                }
                case 30: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_30651, varbitclient_30652, varbitclient_30647, varbitclient_30648, varbitclient_30649, varbitclient_30653, varbitclient_30650, varbitclient_32908, 1];
                    break;
                }
                case 1037: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31302, varbitclient_31303, varbitclient_31298, varbitclient_31299, varbitclient_31300, varbitclient_31304, varbitclient_31301, varbitclient_32909, 1];
                    break;
                }
                case 31: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_33578, varbitclient_33579, varbitclient_33574, varbitclient_33575, varbitclient_33576, varbitclient_33580, varbitclient_33577, varbitclient_33581, 1];
                    break;
                }
                case 1038: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35351, varbitclient_35352, varbitclient_35347, varbitclient_35348, varbitclient_35349, varbitclient_35353, varbitclient_35350, varbitclient_35354, 1];
                    break;
                }
                case 32: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35437, varbitclient_35438, varbitclient_35433, varbitclient_35434, varbitclient_35435, varbitclient_35439, varbitclient_35436, varbitclient_35440, 1];
                    break;
                }
                case 1039: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36250, varbitclient_36251, varbitclient_36246, varbitclient_36247, varbitclient_36248, varbitclient_36252, varbitclient_36249, varbitclient_36253, 1];
                    break;
                }
                case 33: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36619, varbitclient_36620, varbitclient_36615, varbitclient_36616, varbitclient_36617, varbitclient_36621, varbitclient_36618, varbitclient_36622, 1];
                    break;
                }
                case 34: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36627, varbitclient_36628, varbitclient_36623, varbitclient_36624, varbitclient_36625, varbitclient_36629, varbitclient_36626, varbitclient_36630, 1];
                    break;
                }
                case 35: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36635, varbitclient_36636, varbitclient_36631, varbitclient_36632, varbitclient_36633, varbitclient_36637, varbitclient_36634, varbitclient_36638, 1];
                    break;
                }
                case 36: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36643, varbitclient_36644, varbitclient_36639, varbitclient_36640, varbitclient_36641, varbitclient_36645, varbitclient_36642, varbitclient_36646, 1];
                    break;
                }
                case 39: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36651, varbitclient_36652, varbitclient_36647, varbitclient_36648, varbitclient_36649, varbitclient_36653, varbitclient_36650, varbitclient_36654, 1];
                    break;
                }
                case 40: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36659, varbitclient_36660, varbitclient_36655, varbitclient_36656, varbitclient_36657, varbitclient_36661, varbitclient_36658, varbitclient_36662, 1];
                    break;
                }
                case 41: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_37197, varbitclient_37198, varbitclient_37193, varbitclient_37194, varbitclient_37195, varbitclient_37199, varbitclient_37196, varbitclient_37200, 1];
                    break;
                }
                case 1040: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38688, varbitclient_38689, varbitclient_38684, varbitclient_38685, varbitclient_38686, varbitclient_38690, varbitclient_38687, varbitclient_38691, 1];
                    break;
                }
                case 1041: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38732, varbitclient_38733, varbitclient_38728, varbitclient_38729, varbitclient_38730, varbitclient_38734, varbitclient_38731, varbitclient_38735, 1];
                    break;
                }
                case 1045: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40634, varbitclient_40635, varbitclient_40630, varbitclient_40631, varbitclient_40632, varbitclient_40636, varbitclient_40633, varbitclient_40637, 1];
                    break;
                }
                case 1047: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40837, varbitclient_40838, varbitclient_40833, varbitclient_40834, varbitclient_40835, varbitclient_40839, varbitclient_40836, varbitclient_40840, 1];
                    break;
                }
                case 1049: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_44877, varbitclient_44878, varbitclient_44873, varbitclient_44874, varbitclient_44875, varbitclient_44879, varbitclient_44876, varbitclient_44880, 1];
                    break;
                }
                case 1050: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_49690, varbitclient_49691, varbitclient_49686, varbitclient_49687, varbitclient_49688, varbitclient_49692, varbitclient_49689, varbitclient_49693, 1];
                    break;
                }
                case 1051: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_50422, varbitclient_50423, varbitclient_50418, varbitclient_50419, varbitclient_50420, varbitclient_50424, varbitclient_50421, varbitclient_50425, 1];
                    break;
                }
                case 42: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53375, varbitclient_53376, varbitclient_53371, varbitclient_53372, varbitclient_53373, varbitclient_53377, varbitclient_53374, varbitclient_53378, 1];
                    break;
                }
                case 43: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53383, varbitclient_53384, varbitclient_53379, varbitclient_53380, varbitclient_53381, varbitclient_53385, varbitclient_53382, varbitclient_53386, 1];
                    break;
                }
                case 44: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53391, varbitclient_53392, varbitclient_53387, varbitclient_53388, varbitclient_53389, varbitclient_53393, varbitclient_53390, varbitclient_53394, 1];
                    break;
                }
                case 1052: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55016, varbitclient_55017, varbitclient_55012, varbitclient_55013, varbitclient_55014, varbitclient_55018, varbitclient_55015, varbitclient_55019, 1];
                    break;
                }
                case 1053: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55140, varbitclient_55141, varbitclient_55136, varbitclient_55137, varbitclient_55138, varbitclient_55142, varbitclient_55139, varbitclient_55143, 1];
                    break;
                }
                case 45: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56676, varbitclient_56677, varbitclient_56672, varbitclient_56673, varbitclient_56674, varbitclient_56678, varbitclient_56675, varbitclient_56679, 1];
                    break;
                }
                case 46: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56684, varbitclient_56685, varbitclient_56680, varbitclient_56681, varbitclient_56682, varbitclient_56686, varbitclient_56683, varbitclient_56687, 1];
                    break;
                }
            };
            int6 = (int6 - 1);
            int7 = (int7 - 1);
            break;
        }
        case 12: {
            switch (int1) {
                case 1000: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31448, varbitclient_31449, varbitclient_31444, varbitclient_31445, varbitclient_31446, varbitclient_31450, varbitclient_31447, varbitclient_32910, 1];
                    break;
                }
                case 1002: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31455, varbitclient_31456, varbitclient_31451, varbitclient_31452, varbitclient_31453, varbitclient_31457, 1, varbitclient_32911, 1];
                    break;
                }
                case 1004: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31462, varbitclient_31463, varbitclient_31458, varbitclient_31459, varbitclient_31460, varbitclient_31464, varbitclient_31461, varbitclient_32912, 1];
                    break;
                }
                case 1003: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31469, varbitclient_31470, varbitclient_31465, varbitclient_31466, varbitclient_31467, varbitclient_31471, 1, varbitclient_32913, 1];
                    break;
                }
                case 18: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31476, varbitclient_31477, varbitclient_31472, varbitclient_31473, varbitclient_31474, varbitclient_31478, varbitclient_31475, varbitclient_32914, 1];
                    break;
                }
                case 2: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31483, varbitclient_31484, varbitclient_31479, varbitclient_31480, varbitclient_31481, varbitclient_31485, varbitclient_31482, varbitclient_32915, 1];
                    break;
                }
                case 1005: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31490, varbitclient_31491, varbitclient_31486, varbitclient_31487, varbitclient_31488, varbitclient_31492, varbitclient_31489, varbitclient_32916, 1];
                    break;
                }
                case 19: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31497, varbitclient_31498, varbitclient_31493, varbitclient_31494, varbitclient_31495, varbitclient_31499, varbitclient_31496, varbitclient_32917, 1];
                    break;
                }
                case 20: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31504, varbitclient_31505, varbitclient_31500, varbitclient_31501, varbitclient_31502, varbitclient_31506, varbitclient_31503, varbitclient_32918, 1];
                    break;
                }
                case 21: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31511, varbitclient_31512, varbitclient_31507, varbitclient_31508, varbitclient_31509, varbitclient_31513, varbitclient_31510, varbitclient_32919, 1];
                    break;
                }
                case 3: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31518, varbitclient_31519, varbitclient_31514, varbitclient_31515, varbitclient_31516, varbitclient_31520, varbitclient_31517, varbitclient_32920, 1];
                    break;
                }
                case 1006: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31525, varbitclient_31526, varbitclient_31521, varbitclient_31522, varbitclient_31523, varbitclient_31527, varbitclient_31524, varbitclient_32921, 1];
                    break;
                }
                case 1007: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31532, varbitclient_31533, varbitclient_31528, varbitclient_31529, varbitclient_31530, varbitclient_31534, varbitclient_31531, varbitclient_32922, 1];
                    break;
                }
                case 17: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31539, varbitclient_31540, varbitclient_31535, varbitclient_31536, varbitclient_31537, varbitclient_31541, varbitclient_31538, varbitclient_32923, 1];
                    break;
                }
                case 12: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31546, varbitclient_31547, varbitclient_31542, varbitclient_31543, varbitclient_31544, varbitclient_31548, varbitclient_31545, varbitclient_32924, 1];
                    break;
                }
                case 1019: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31553, varbitclient_31554, varbitclient_31549, varbitclient_31550, varbitclient_31551, varbitclient_31555, varbitclient_31552, varbitclient_32925, 1];
                    break;
                }
                case 6: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31560, varbitclient_31561, varbitclient_31556, varbitclient_31557, varbitclient_31558, varbitclient_31562, varbitclient_31559, varbitclient_32926, 1];
                    break;
                }
                case 7: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31567, varbitclient_31568, varbitclient_31563, varbitclient_31564, varbitclient_31565, varbitclient_31569, varbitclient_31566, varbitclient_32927, 1];
                    break;
                }
                case 5: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31574, varbitclient_31575, varbitclient_31570, varbitclient_31571, varbitclient_31572, varbitclient_31576, varbitclient_31573, varbitclient_32928, 1];
                    break;
                }
                case 8: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31581, varbitclient_31582, varbitclient_31577, varbitclient_31578, varbitclient_31579, varbitclient_31583, varbitclient_31580, varbitclient_32929, 1];
                    break;
                }
                case 1008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31595, varbitclient_31596, varbitclient_31591, varbitclient_31592, varbitclient_31593, varbitclient_31597, varbitclient_31594, varbitclient_32931, 1];
                    break;
                }
                case 9: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31602, varbitclient_31603, varbitclient_31598, varbitclient_31599, varbitclient_31600, varbitclient_31604, varbitclient_31601, varbitclient_32932, 1];
                    break;
                }
                case 0: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31609, varbitclient_31610, varbitclient_31605, varbitclient_31606, varbitclient_31607, varbitclient_31611, varbitclient_31608, varbitclient_32933, 1];
                    break;
                }
                case 4: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31616, varbitclient_31617, varbitclient_31612, varbitclient_31613, varbitclient_31614, varbitclient_31618, varbitclient_31615, varbitclient_32934, 1];
                    break;
                }
                case 22: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31623, varbitclient_31624, varbitclient_31619, varbitclient_31620, varbitclient_31621, varbitclient_31625, varbitclient_31622, varbitclient_32935, 1];
                    break;
                }
                case 10: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31630, varbitclient_31631, varbitclient_31626, varbitclient_31627, varbitclient_31628, varbitclient_31632, varbitclient_31629, varbitclient_32936, 1];
                    break;
                }
                case 11: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31637, varbitclient_31638, varbitclient_31633, varbitclient_31634, varbitclient_31635, varbitclient_31639, varbitclient_31636, varbitclient_32937, 1];
                    break;
                }
                case 14: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31644, varbitclient_31645, varbitclient_31640, varbitclient_31641, varbitclient_31642, varbitclient_31646, varbitclient_31643, varbitclient_32938, 1];
                    break;
                }
                case 16: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31651, varbitclient_31652, varbitclient_31647, varbitclient_31648, varbitclient_31649, varbitclient_31653, varbitclient_31650, varbitclient_32939, 1];
                    break;
                }
                case 1009: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31658, varbitclient_31659, varbitclient_31654, varbitclient_31655, varbitclient_31656, varbitclient_31660, varbitclient_31657, varbitclient_32940, 1];
                    break;
                }
                case 1010: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31665, varbitclient_31666, varbitclient_31661, varbitclient_31662, varbitclient_31663, varbitclient_31667, varbitclient_31664, varbitclient_32941, 1];
                    break;
                }
                case 1012: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31679, varbitclient_31680, varbitclient_31675, varbitclient_31676, varbitclient_31677, varbitclient_31681, varbitclient_31678, varbitclient_32943, 1];
                    break;
                }
                case 1013: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31686, varbitclient_31687, varbitclient_31682, varbitclient_31683, varbitclient_31684, varbitclient_31688, varbitclient_31685, varbitclient_32944, 1];
                    break;
                }
                case 1014: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31693, varbitclient_31694, varbitclient_31689, varbitclient_31690, varbitclient_31691, varbitclient_31695, varbitclient_31692, varbitclient_32945, 1];
                    break;
                }
                case 15: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31700, varbitclient_31701, varbitclient_31696, varbitclient_31697, varbitclient_31698, varbitclient_31702, varbitclient_31699, varbitclient_32946, 1];
                    break;
                }
                case 1015: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31707, varbitclient_31708, varbitclient_31703, varbitclient_31704, varbitclient_31705, varbitclient_31709, varbitclient_31706, varbitclient_32947, 1];
                    break;
                }
                case 1016: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31714, varbitclient_31715, varbitclient_31710, varbitclient_31711, varbitclient_31712, varbitclient_31716, varbitclient_31713, varbitclient_32948, 1];
                    break;
                }
                case 1017: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31721, varbitclient_31722, varbitclient_31717, varbitclient_31718, varbitclient_31719, varbitclient_31723, varbitclient_31720, varbitclient_32949, 1];
                    break;
                }
                case 1018: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31728, varbitclient_31729, varbitclient_31724, varbitclient_31725, varbitclient_31726, varbitclient_31730, varbitclient_31727, varbitclient_32950, 1];
                    break;
                }
                case 1001: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31735, varbitclient_31736, varbitclient_31731, varbitclient_31732, varbitclient_31733, varbitclient_31737, varbitclient_31734, varbitclient_32951, 1];
                    break;
                }
                case 23: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31742, varbitclient_31743, varbitclient_31738, varbitclient_31739, varbitclient_31740, varbitclient_31744, varbitclient_31741, varbitclient_32952, 1];
                    break;
                }
                case 2008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31756, varbitclient_31757, varbitclient_31752, varbitclient_31753, varbitclient_31754, varbitclient_31758, varbitclient_31755, varbitclient_32954, 1];
                    break;
                }
                case 1021: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31763, varbitclient_31764, varbitclient_31759, varbitclient_31760, varbitclient_31761, varbitclient_31765, varbitclient_31762, varbitclient_32955, 1];
                    break;
                }
                case 26: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31770, varbitclient_31771, varbitclient_31766, varbitclient_31767, varbitclient_31768, varbitclient_31772, varbitclient_31769, varbitclient_32956, 1];
                    break;
                }
                case 24: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31777, varbitclient_31778, varbitclient_31773, varbitclient_31774, varbitclient_31775, varbitclient_31779, varbitclient_31776, varbitclient_32957, 1];
                    break;
                }
                case 25: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31784, varbitclient_31785, varbitclient_31780, varbitclient_31781, varbitclient_31782, varbitclient_31786, varbitclient_31783, varbitclient_32958, 1];
                    break;
                }
                case 1023: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31791, varbitclient_31792, varbitclient_31787, varbitclient_31788, varbitclient_31789, varbitclient_31793, varbitclient_31790, varbitclient_32959, 1];
                    break;
                }
                case 27: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31798, varbitclient_31799, varbitclient_31794, varbitclient_31795, varbitclient_31796, varbitclient_31800, varbitclient_31797, varbitclient_32960, 1];
                    break;
                }
                case 1024: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31805, varbitclient_31806, varbitclient_31801, varbitclient_31802, varbitclient_31803, varbitclient_31807, varbitclient_31804, varbitclient_32961, 1];
                    break;
                }
                case 1025: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31812, varbitclient_31813, varbitclient_31808, varbitclient_31809, varbitclient_31810, varbitclient_31814, varbitclient_31811, varbitclient_32962, 1];
                    break;
                }
                case 1026: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31819, varbitclient_31820, varbitclient_31815, varbitclient_31816, varbitclient_31817, varbitclient_31821, varbitclient_31818, varbitclient_32963, 1];
                    break;
                }
                case 28: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31826, varbitclient_31827, varbitclient_31822, varbitclient_31823, varbitclient_31824, varbitclient_31828, varbitclient_31825, varbitclient_32964, 1];
                    break;
                }
                case 1027: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31833, varbitclient_31834, varbitclient_31829, varbitclient_31830, varbitclient_31831, varbitclient_31835, varbitclient_31832, varbitclient_32965, 1];
                    break;
                }
                case 1028: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31840, varbitclient_31841, varbitclient_31836, varbitclient_31837, varbitclient_31838, varbitclient_31842, varbitclient_31839, varbitclient_32966, 1];
                    break;
                }
                case 1029: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31847, varbitclient_31848, varbitclient_31843, varbitclient_31844, varbitclient_31845, varbitclient_31849, varbitclient_31846, varbitclient_32967, 1];
                    break;
                }
                case 1030: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31854, varbitclient_31855, varbitclient_31850, varbitclient_31851, varbitclient_31852, varbitclient_31856, varbitclient_31853, varbitclient_32968, 1];
                    break;
                }
                case 1031: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31861, varbitclient_31862, varbitclient_31857, varbitclient_31858, varbitclient_31859, varbitclient_31863, varbitclient_31860, varbitclient_32969, 1];
                    break;
                }
                case 1032: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31868, varbitclient_31869, varbitclient_31864, varbitclient_31865, varbitclient_31866, varbitclient_31870, 1, varbitclient_32970, 1];
                    break;
                }
                case 1033: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31875, varbitclient_31876, varbitclient_31871, varbitclient_31872, varbitclient_31873, varbitclient_31877, 1, varbitclient_32971, 1];
                    break;
                }
                case 1034: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31882, varbitclient_31883, varbitclient_31878, varbitclient_31879, varbitclient_31880, varbitclient_31884, 1, varbitclient_32972, 1];
                    break;
                }
                case 1035: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31889, varbitclient_31890, varbitclient_31885, varbitclient_31886, varbitclient_31887, varbitclient_31891, 1, varbitclient_32973, 1];
                    break;
                }
                case 29: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31896, varbitclient_31897, varbitclient_31892, varbitclient_31893, varbitclient_31894, varbitclient_31898, varbitclient_31895, varbitclient_32974, 1];
                    break;
                }
                case 1036: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31903, varbitclient_31904, varbitclient_31899, varbitclient_31900, varbitclient_31901, varbitclient_31905, varbitclient_31902, varbitclient_32975, 1];
                    break;
                }
                case 30: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31910, varbitclient_31911, varbitclient_31906, varbitclient_31907, varbitclient_31908, varbitclient_31912, varbitclient_31909, varbitclient_32976, 1];
                    break;
                }
                case 1037: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31917, varbitclient_31918, varbitclient_31913, varbitclient_31914, varbitclient_31915, varbitclient_31919, varbitclient_31916, varbitclient_32977, 1];
                    break;
                }
                case 31: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_33586, varbitclient_33587, varbitclient_33582, varbitclient_33583, varbitclient_33584, varbitclient_33588, varbitclient_33585, varbitclient_33589, 1];
                    break;
                }
                case 1038: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35359, varbitclient_35360, varbitclient_35355, varbitclient_35356, varbitclient_35357, varbitclient_35361, varbitclient_35358, varbitclient_35362, 1];
                    break;
                }
                case 32: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35445, varbitclient_35446, varbitclient_35441, varbitclient_35442, varbitclient_35443, varbitclient_35447, varbitclient_35444, varbitclient_35448, 1];
                    break;
                }
                case 1039: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36258, varbitclient_36259, varbitclient_36254, varbitclient_36255, varbitclient_36256, varbitclient_36260, varbitclient_36257, varbitclient_36261, 1];
                    break;
                }
                case 33: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36683, varbitclient_36684, varbitclient_36679, varbitclient_36680, varbitclient_36681, varbitclient_36685, varbitclient_36682, varbitclient_36686, 1];
                    break;
                }
                case 34: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36691, varbitclient_36692, varbitclient_36687, varbitclient_36688, varbitclient_36689, varbitclient_36693, varbitclient_36690, varbitclient_36694, 1];
                    break;
                }
                case 35: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36699, varbitclient_36700, varbitclient_36695, varbitclient_36696, varbitclient_36697, varbitclient_36701, varbitclient_36698, varbitclient_36702, 1];
                    break;
                }
                case 36: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36707, varbitclient_36708, varbitclient_36703, varbitclient_36704, varbitclient_36705, varbitclient_36709, varbitclient_36706, varbitclient_36710, 1];
                    break;
                }
                case 39: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36715, varbitclient_36716, varbitclient_36711, varbitclient_36712, varbitclient_36713, varbitclient_36717, varbitclient_36714, varbitclient_36718, 1];
                    break;
                }
                case 40: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36723, varbitclient_36724, varbitclient_36719, varbitclient_36720, varbitclient_36721, varbitclient_36725, varbitclient_36722, varbitclient_36726, 1];
                    break;
                }
                case 41: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_37205, varbitclient_37206, varbitclient_37201, varbitclient_37202, varbitclient_37203, varbitclient_37207, varbitclient_37204, varbitclient_37208, 1];
                    break;
                }
                case 1040: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38696, varbitclient_38697, varbitclient_38692, varbitclient_38693, varbitclient_38694, varbitclient_38698, varbitclient_38695, varbitclient_38699, 1];
                    break;
                }
                case 1041: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38740, varbitclient_38741, varbitclient_38736, varbitclient_38737, varbitclient_38738, varbitclient_38742, varbitclient_38739, varbitclient_38743, 1];
                    break;
                }
                case 1045: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40642, varbitclient_40643, varbitclient_40638, varbitclient_40639, varbitclient_40640, varbitclient_40644, varbitclient_40641, varbitclient_40645, 1];
                    break;
                }
                case 1047: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40845, varbitclient_40846, varbitclient_40841, varbitclient_40842, varbitclient_40843, varbitclient_40847, varbitclient_40844, varbitclient_40848, 1];
                    break;
                }
                case 1049: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_44885, varbitclient_44886, varbitclient_44881, varbitclient_44882, varbitclient_44883, varbitclient_44887, varbitclient_44884, varbitclient_44888, 1];
                    break;
                }
                case 1050: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_49698, varbitclient_49699, varbitclient_49694, varbitclient_49695, varbitclient_49696, varbitclient_49700, varbitclient_49697, varbitclient_49701, 1];
                    break;
                }
                case 1051: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_50430, varbitclient_50431, varbitclient_50426, varbitclient_50427, varbitclient_50428, varbitclient_50432, varbitclient_50429, varbitclient_50433, 1];
                    break;
                }
                case 42: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53399, varbitclient_53400, varbitclient_53395, varbitclient_53396, varbitclient_53397, varbitclient_53401, varbitclient_53398, varbitclient_53402, 1];
                    break;
                }
                case 43: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53407, varbitclient_53408, varbitclient_53403, varbitclient_53404, varbitclient_53405, varbitclient_53409, varbitclient_53406, varbitclient_53410, 1];
                    break;
                }
                case 44: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53415, varbitclient_53416, varbitclient_53411, varbitclient_53412, varbitclient_53413, varbitclient_53417, varbitclient_53414, varbitclient_53418, 1];
                    break;
                }
                case 1052: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55024, varbitclient_55025, varbitclient_55020, varbitclient_55021, varbitclient_55022, varbitclient_55026, varbitclient_55023, varbitclient_55027, 1];
                    break;
                }
                case 1053: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55148, varbitclient_55149, varbitclient_55144, varbitclient_55145, varbitclient_55146, varbitclient_55150, varbitclient_55147, varbitclient_55151, 1];
                    break;
                }
                case 45: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56692, varbitclient_56693, varbitclient_56688, varbitclient_56689, varbitclient_56690, varbitclient_56694, varbitclient_56691, varbitclient_56695, 1];
                    break;
                }
                case 46: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56700, varbitclient_56701, varbitclient_56696, varbitclient_56697, varbitclient_56698, varbitclient_56702, varbitclient_56699, varbitclient_56703, 1];
                    break;
                }
            };
            int6 = (int6 - 1);
            int7 = (int7 - 1);
            break;
        }
        case 13: {
            switch (int1) {
                case 1000: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31926, varbitclient_31927, varbitclient_31922, varbitclient_31923, varbitclient_31924, varbitclient_31928, varbitclient_31925, varbitclient_32978, 1];
                    break;
                }
                case 1002: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31933, varbitclient_31934, varbitclient_31929, varbitclient_31930, varbitclient_31931, varbitclient_31935, 1, varbitclient_32979, 1];
                    break;
                }
                case 1004: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31940, varbitclient_31941, varbitclient_31936, varbitclient_31937, varbitclient_31938, varbitclient_31942, varbitclient_31939, varbitclient_32980, 1];
                    break;
                }
                case 1003: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31947, varbitclient_31948, varbitclient_31943, varbitclient_31944, varbitclient_31945, varbitclient_31949, 1, varbitclient_32981, 1];
                    break;
                }
                case 18: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31954, varbitclient_31955, varbitclient_31950, varbitclient_31951, varbitclient_31952, varbitclient_31956, varbitclient_31953, varbitclient_32982, 1];
                    break;
                }
                case 2: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31961, varbitclient_31962, varbitclient_31957, varbitclient_31958, varbitclient_31959, varbitclient_31963, varbitclient_31960, varbitclient_32983, 1];
                    break;
                }
                case 1005: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31968, varbitclient_31969, varbitclient_31964, varbitclient_31965, varbitclient_31966, varbitclient_31970, varbitclient_31967, varbitclient_32984, 1];
                    break;
                }
                case 19: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31975, varbitclient_31976, varbitclient_31971, varbitclient_31972, varbitclient_31973, varbitclient_31977, varbitclient_31974, varbitclient_32985, 1];
                    break;
                }
                case 20: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31982, varbitclient_31983, varbitclient_31978, varbitclient_31979, varbitclient_31980, varbitclient_31984, varbitclient_31981, varbitclient_32986, 1];
                    break;
                }
                case 21: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31989, varbitclient_31990, varbitclient_31985, varbitclient_31986, varbitclient_31987, varbitclient_31991, varbitclient_31988, varbitclient_32987, 1];
                    break;
                }
                case 3: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31996, varbitclient_31997, varbitclient_31992, varbitclient_31993, varbitclient_31994, varbitclient_31998, varbitclient_31995, varbitclient_32988, 1];
                    break;
                }
                case 1006: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32003, varbitclient_32004, varbitclient_31999, varbitclient_32000, varbitclient_32001, varbitclient_32005, varbitclient_32002, varbitclient_32989, 1];
                    break;
                }
                case 1007: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32010, varbitclient_32011, varbitclient_32006, varbitclient_32007, varbitclient_32008, varbitclient_32012, varbitclient_32009, varbitclient_32990, 1];
                    break;
                }
                case 17: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32017, varbitclient_32018, varbitclient_32013, varbitclient_32014, varbitclient_32015, varbitclient_32019, varbitclient_32016, varbitclient_32991, 1];
                    break;
                }
                case 12: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32024, varbitclient_32025, varbitclient_32020, varbitclient_32021, varbitclient_32022, varbitclient_32026, varbitclient_32023, varbitclient_32992, 1];
                    break;
                }
                case 1019: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32031, varbitclient_32032, varbitclient_32027, varbitclient_32028, varbitclient_32029, varbitclient_32033, varbitclient_32030, varbitclient_32993, 1];
                    break;
                }
                case 6: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32038, varbitclient_32039, varbitclient_32034, varbitclient_32035, varbitclient_32036, varbitclient_32040, varbitclient_32037, varbitclient_32994, 1];
                    break;
                }
                case 7: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32045, varbitclient_32046, varbitclient_32041, varbitclient_32042, varbitclient_32043, varbitclient_32047, varbitclient_32044, varbitclient_32995, 1];
                    break;
                }
                case 5: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32052, varbitclient_32053, varbitclient_32048, varbitclient_32049, varbitclient_32050, varbitclient_32054, varbitclient_32051, varbitclient_32996, 1];
                    break;
                }
                case 8: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32059, varbitclient_32060, varbitclient_32055, varbitclient_32056, varbitclient_32057, varbitclient_32061, varbitclient_32058, varbitclient_32997, 1];
                    break;
                }
                case 1008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32073, varbitclient_32074, varbitclient_32069, varbitclient_32070, varbitclient_32071, varbitclient_32075, varbitclient_32072, varbitclient_32999, 1];
                    break;
                }
                case 9: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32080, varbitclient_32081, varbitclient_32076, varbitclient_32077, varbitclient_32078, varbitclient_32082, varbitclient_32079, varbitclient_33000, 1];
                    break;
                }
                case 0: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32087, varbitclient_32088, varbitclient_32083, varbitclient_32084, varbitclient_32085, varbitclient_32089, varbitclient_32086, varbitclient_33001, 1];
                    break;
                }
                case 4: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32094, varbitclient_32095, varbitclient_32090, varbitclient_32091, varbitclient_32092, varbitclient_32096, varbitclient_32093, varbitclient_33002, 1];
                    break;
                }
                case 22: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32101, varbitclient_32102, varbitclient_32097, varbitclient_32098, varbitclient_32099, varbitclient_32103, varbitclient_32100, varbitclient_33003, 1];
                    break;
                }
                case 10: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32108, varbitclient_32109, varbitclient_32104, varbitclient_32105, varbitclient_32106, varbitclient_32110, varbitclient_32107, varbitclient_33004, 1];
                    break;
                }
                case 11: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32115, varbitclient_32116, varbitclient_32111, varbitclient_32112, varbitclient_32113, varbitclient_32117, varbitclient_32114, varbitclient_33005, 1];
                    break;
                }
                case 14: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32122, varbitclient_32123, varbitclient_32118, varbitclient_32119, varbitclient_32120, varbitclient_32124, varbitclient_32121, varbitclient_33006, 1];
                    break;
                }
                case 16: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32129, varbitclient_32130, varbitclient_32125, varbitclient_32126, varbitclient_32127, varbitclient_32131, varbitclient_32128, varbitclient_33007, 1];
                    break;
                }
                case 1009: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32136, varbitclient_32137, varbitclient_32132, varbitclient_32133, varbitclient_32134, varbitclient_32138, varbitclient_32135, varbitclient_33008, 1];
                    break;
                }
                case 1010: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32143, varbitclient_32144, varbitclient_32139, varbitclient_32140, varbitclient_32141, varbitclient_32145, varbitclient_32142, varbitclient_33009, 1];
                    break;
                }
                case 1012: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32157, varbitclient_32158, varbitclient_32153, varbitclient_32154, varbitclient_32155, varbitclient_32159, varbitclient_32156, varbitclient_33011, 1];
                    break;
                }
                case 1013: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32164, varbitclient_32165, varbitclient_32160, varbitclient_32161, varbitclient_32162, varbitclient_32166, varbitclient_32163, varbitclient_33012, 1];
                    break;
                }
                case 1014: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32171, varbitclient_32172, varbitclient_32167, varbitclient_32168, varbitclient_32169, varbitclient_32173, varbitclient_32170, varbitclient_33013, 1];
                    break;
                }
                case 15: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32178, varbitclient_32179, varbitclient_32174, varbitclient_32175, varbitclient_32176, varbitclient_32180, varbitclient_32177, varbitclient_33014, 1];
                    break;
                }
                case 1015: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32185, varbitclient_32186, varbitclient_32181, varbitclient_32182, varbitclient_32183, varbitclient_32187, varbitclient_32184, varbitclient_33015, 1];
                    break;
                }
                case 1016: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32192, varbitclient_32193, varbitclient_32188, varbitclient_32189, varbitclient_32190, varbitclient_32194, varbitclient_32191, varbitclient_33016, 1];
                    break;
                }
                case 1017: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32199, varbitclient_32200, varbitclient_32195, varbitclient_32196, varbitclient_32197, varbitclient_32201, varbitclient_32198, varbitclient_33017, 1];
                    break;
                }
                case 1018: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32206, varbitclient_32207, varbitclient_32202, varbitclient_32203, varbitclient_32204, varbitclient_32208, varbitclient_32205, varbitclient_33018, 1];
                    break;
                }
                case 1001: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32213, varbitclient_32214, varbitclient_32209, varbitclient_32210, varbitclient_32211, varbitclient_32215, varbitclient_32212, varbitclient_33019, 1];
                    break;
                }
                case 23: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32220, varbitclient_32221, varbitclient_32216, varbitclient_32217, varbitclient_32218, varbitclient_32222, varbitclient_32219, varbitclient_33020, 1];
                    break;
                }
                case 2008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32234, varbitclient_32235, varbitclient_32230, varbitclient_32231, varbitclient_32232, varbitclient_32236, varbitclient_32233, varbitclient_33022, 1];
                    break;
                }
                case 1021: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32241, varbitclient_32242, varbitclient_32237, varbitclient_32238, varbitclient_32239, varbitclient_32243, varbitclient_32240, varbitclient_33023, 1];
                    break;
                }
                case 26: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32248, varbitclient_32249, varbitclient_32244, varbitclient_32245, varbitclient_32246, varbitclient_32250, varbitclient_32247, varbitclient_33024, 1];
                    break;
                }
                case 24: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32255, varbitclient_32256, varbitclient_32251, varbitclient_32252, varbitclient_32253, varbitclient_32257, varbitclient_32254, varbitclient_33025, 1];
                    break;
                }
                case 25: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32262, varbitclient_32263, varbitclient_32258, varbitclient_32259, varbitclient_32260, varbitclient_32264, varbitclient_32261, varbitclient_33026, 1];
                    break;
                }
                case 1023: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32269, varbitclient_32270, varbitclient_32265, varbitclient_32266, varbitclient_32267, varbitclient_32271, varbitclient_32268, varbitclient_33027, 1];
                    break;
                }
                case 27: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32276, varbitclient_32277, varbitclient_32272, varbitclient_32273, varbitclient_32274, varbitclient_32278, varbitclient_32275, varbitclient_33028, 1];
                    break;
                }
                case 1024: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32283, varbitclient_32284, varbitclient_32279, varbitclient_32280, varbitclient_32281, varbitclient_32285, varbitclient_32282, varbitclient_33029, 1];
                    break;
                }
                case 1025: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32290, varbitclient_32291, varbitclient_32286, varbitclient_32287, varbitclient_32288, varbitclient_32292, varbitclient_32289, varbitclient_33030, 1];
                    break;
                }
                case 1026: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32297, varbitclient_32298, varbitclient_32293, varbitclient_32294, varbitclient_32295, varbitclient_32299, varbitclient_32296, varbitclient_33031, 1];
                    break;
                }
                case 28: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32304, varbitclient_32305, varbitclient_32300, varbitclient_32301, varbitclient_32302, varbitclient_32306, varbitclient_32303, varbitclient_33032, 1];
                    break;
                }
                case 1027: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32311, varbitclient_32312, varbitclient_32307, varbitclient_32308, varbitclient_32309, varbitclient_32313, varbitclient_32310, varbitclient_33033, 1];
                    break;
                }
                case 1028: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32318, varbitclient_32319, varbitclient_32314, varbitclient_32315, varbitclient_32316, varbitclient_32320, varbitclient_32317, varbitclient_33034, 1];
                    break;
                }
                case 1029: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32325, varbitclient_32326, varbitclient_32321, varbitclient_32322, varbitclient_32323, varbitclient_32327, varbitclient_32324, varbitclient_33035, 1];
                    break;
                }
                case 1030: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32332, varbitclient_32333, varbitclient_32328, varbitclient_32329, varbitclient_32330, varbitclient_32334, varbitclient_32331, varbitclient_33036, 1];
                    break;
                }
                case 1031: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32339, varbitclient_32340, varbitclient_32335, varbitclient_32336, varbitclient_32337, varbitclient_32341, varbitclient_32338, varbitclient_33037, 1];
                    break;
                }
                case 1032: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32346, varbitclient_32347, varbitclient_32342, varbitclient_32343, varbitclient_32344, varbitclient_32348, 1, varbitclient_33038, 1];
                    break;
                }
                case 1033: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32353, varbitclient_32354, varbitclient_32349, varbitclient_32350, varbitclient_32351, varbitclient_32355, 1, varbitclient_33039, 1];
                    break;
                }
                case 1034: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32360, varbitclient_32361, varbitclient_32356, varbitclient_32357, varbitclient_32358, varbitclient_32362, 1, varbitclient_33040, 1];
                    break;
                }
                case 1035: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32367, varbitclient_32368, varbitclient_32363, varbitclient_32364, varbitclient_32365, varbitclient_32369, 1, varbitclient_33041, 1];
                    break;
                }
                case 29: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32374, varbitclient_32375, varbitclient_32370, varbitclient_32371, varbitclient_32372, varbitclient_32376, varbitclient_32373, varbitclient_33042, 1];
                    break;
                }
                case 1036: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32381, varbitclient_32382, varbitclient_32377, varbitclient_32378, varbitclient_32379, varbitclient_32383, varbitclient_32380, varbitclient_33043, 1];
                    break;
                }
                case 30: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32388, varbitclient_32389, varbitclient_32384, varbitclient_32385, varbitclient_32386, varbitclient_32390, varbitclient_32387, varbitclient_33044, 1];
                    break;
                }
                case 1037: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_32395, varbitclient_32396, varbitclient_32391, varbitclient_32392, varbitclient_32393, varbitclient_32397, varbitclient_32394, varbitclient_33045, 1];
                    break;
                }
                case 31: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_33594, varbitclient_33595, varbitclient_33590, varbitclient_33591, varbitclient_33592, varbitclient_33596, varbitclient_33593, varbitclient_33597, 1];
                    break;
                }
                case 1038: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35367, varbitclient_35368, varbitclient_35363, varbitclient_35364, varbitclient_35365, varbitclient_35369, varbitclient_35366, varbitclient_35370, 1];
                    break;
                }
                case 32: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35453, varbitclient_35454, varbitclient_35449, varbitclient_35450, varbitclient_35451, varbitclient_35455, varbitclient_35452, varbitclient_35456, 1];
                    break;
                }
                case 1039: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36266, varbitclient_36267, varbitclient_36262, varbitclient_36263, varbitclient_36264, varbitclient_36268, varbitclient_36265, varbitclient_36269, 1];
                    break;
                }
                case 33: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36747, varbitclient_36748, varbitclient_36743, varbitclient_36744, varbitclient_36745, varbitclient_36749, varbitclient_36746, varbitclient_36750, 1];
                    break;
                }
                case 34: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36755, varbitclient_36756, varbitclient_36751, varbitclient_36752, varbitclient_36753, varbitclient_36757, varbitclient_36754, varbitclient_36758, 1];
                    break;
                }
                case 35: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36763, varbitclient_36764, varbitclient_36759, varbitclient_36760, varbitclient_36761, varbitclient_36765, varbitclient_36762, varbitclient_36766, 1];
                    break;
                }
                case 36: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36771, varbitclient_36772, varbitclient_36767, varbitclient_36768, varbitclient_36769, varbitclient_36773, varbitclient_36770, varbitclient_36774, 1];
                    break;
                }
                case 39: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36779, varbitclient_36780, varbitclient_36775, varbitclient_36776, varbitclient_36777, varbitclient_36781, varbitclient_36778, varbitclient_36782, 1];
                    break;
                }
                case 40: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36787, varbitclient_36788, varbitclient_36783, varbitclient_36784, varbitclient_36785, varbitclient_36789, varbitclient_36786, varbitclient_36790, 1];
                    break;
                }
                case 41: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_37213, varbitclient_37214, varbitclient_37209, varbitclient_37210, varbitclient_37211, varbitclient_37215, varbitclient_37212, varbitclient_37216, 1];
                    break;
                }
                case 1040: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38704, varbitclient_38705, varbitclient_38700, varbitclient_38701, varbitclient_38702, varbitclient_38706, varbitclient_38703, varbitclient_38707, 1];
                    break;
                }
                case 1041: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38748, varbitclient_38749, varbitclient_38744, varbitclient_38745, varbitclient_38746, varbitclient_38750, varbitclient_38747, varbitclient_38751, 1];
                    break;
                }
                case 1045: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40650, varbitclient_40651, varbitclient_40646, varbitclient_40647, varbitclient_40648, varbitclient_40652, varbitclient_40649, varbitclient_40653, 1];
                    break;
                }
                case 1047: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40853, varbitclient_40854, varbitclient_40849, varbitclient_40850, varbitclient_40851, varbitclient_40855, varbitclient_40852, varbitclient_40856, 1];
                    break;
                }
                case 1049: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_44893, varbitclient_44894, varbitclient_44889, varbitclient_44890, varbitclient_44891, varbitclient_44895, varbitclient_44892, varbitclient_44896, 1];
                    break;
                }
                case 1050: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_49706, varbitclient_49707, varbitclient_49702, varbitclient_49703, varbitclient_49704, varbitclient_49708, varbitclient_49705, varbitclient_49709, 1];
                    break;
                }
                case 1051: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_50438, varbitclient_50439, varbitclient_50434, varbitclient_50435, varbitclient_50436, varbitclient_50440, varbitclient_50437, varbitclient_50441, 1];
                    break;
                }
                case 42: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53423, varbitclient_53424, varbitclient_53419, varbitclient_53420, varbitclient_53421, varbitclient_53425, varbitclient_53422, varbitclient_53426, 1];
                    break;
                }
                case 43: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53431, varbitclient_53432, varbitclient_53427, varbitclient_53428, varbitclient_53429, varbitclient_53433, varbitclient_53430, varbitclient_53434, 1];
                    break;
                }
                case 44: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53439, varbitclient_53440, varbitclient_53435, varbitclient_53436, varbitclient_53437, varbitclient_53441, varbitclient_53438, varbitclient_53442, 1];
                    break;
                }
                case 1052: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55032, varbitclient_55033, varbitclient_55028, varbitclient_55029, varbitclient_55030, varbitclient_55034, varbitclient_55031, varbitclient_55035, 1];
                    break;
                }
                case 1053: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55156, varbitclient_55157, varbitclient_55152, varbitclient_55153, varbitclient_55154, varbitclient_55158, varbitclient_55155, varbitclient_55159, 1];
                    break;
                }
                case 45: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56708, varbitclient_56709, varbitclient_56704, varbitclient_56705, varbitclient_56706, varbitclient_56710, varbitclient_56707, varbitclient_56711, 1];
                    break;
                }
                case 46: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56716, varbitclient_56717, varbitclient_56712, varbitclient_56713, varbitclient_56714, varbitclient_56718, varbitclient_56715, varbitclient_56719, 1];
                    break;
                }
            };
            int6 = (int6 - 1);
            int7 = (int7 - 1);
            break;
        }
        case 8: {
            switch (int1) {
                case 1000: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19337, varbitclient_19338, varbitclient_19333, varbitclient_19334, varbitclient_19335, varbitclient_19339, varbitclient_19336, varbitclient_32706, 1];
                    break;
                }
                case 1002: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19344, varbitclient_19345, varbitclient_19340, varbitclient_19341, varbitclient_19342, varbitclient_19346, 1, varbitclient_32707, 1];
                    break;
                }
                case 1004: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19351, varbitclient_19352, varbitclient_19347, varbitclient_19348, varbitclient_19349, varbitclient_19353, varbitclient_19350, varbitclient_32708, 1];
                    break;
                }
                case 1003: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19358, varbitclient_19359, varbitclient_19354, varbitclient_19355, varbitclient_19356, varbitclient_19360, 1, varbitclient_32709, 1];
                    break;
                }
                case 18: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19365, varbitclient_19366, varbitclient_19361, varbitclient_19362, varbitclient_19363, varbitclient_19367, varbitclient_19364, varbitclient_32710, 1];
                    break;
                }
                case 2: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19372, varbitclient_19373, varbitclient_19368, varbitclient_19369, varbitclient_19370, varbitclient_19374, varbitclient_19371, varbitclient_32711, 1];
                    break;
                }
                case 1005: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19379, varbitclient_19380, varbitclient_19375, varbitclient_19376, varbitclient_19377, varbitclient_19381, varbitclient_19378, varbitclient_32712, 1];
                    break;
                }
                case 19: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19386, varbitclient_19387, varbitclient_19382, varbitclient_19383, varbitclient_19384, varbitclient_19388, varbitclient_19385, varbitclient_32713, 1];
                    break;
                }
                case 20: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19393, varbitclient_19394, varbitclient_19389, varbitclient_19390, varbitclient_19391, varbitclient_19395, varbitclient_19392, varbitclient_32714, 1];
                    break;
                }
                case 21: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19400, varbitclient_19401, varbitclient_19396, varbitclient_19397, varbitclient_19398, varbitclient_19402, varbitclient_19399, varbitclient_32715, 1];
                    break;
                }
                case 3: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19407, varbitclient_19408, varbitclient_19403, varbitclient_19404, varbitclient_19405, varbitclient_19409, varbitclient_19406, varbitclient_32716, 1];
                    break;
                }
                case 1006: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19414, varbitclient_19415, varbitclient_19410, varbitclient_19411, varbitclient_19412, varbitclient_19416, varbitclient_19413, varbitclient_32717, 1];
                    break;
                }
                case 1007: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19421, varbitclient_19422, varbitclient_19417, varbitclient_19418, varbitclient_19419, varbitclient_19423, varbitclient_19420, varbitclient_32718, 1];
                    break;
                }
                case 17: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19428, varbitclient_19429, varbitclient_19424, varbitclient_19425, varbitclient_19426, varbitclient_19430, varbitclient_19427, varbitclient_32719, 1];
                    break;
                }
                case 12: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19435, varbitclient_19436, varbitclient_19431, varbitclient_19432, varbitclient_19433, varbitclient_19437, varbitclient_19434, varbitclient_32720, 1];
                    break;
                }
                case 1019: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19442, varbitclient_19443, varbitclient_19438, varbitclient_19439, varbitclient_19440, varbitclient_19444, varbitclient_19441, varbitclient_32721, 1];
                    break;
                }
                case 6: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19449, varbitclient_19450, varbitclient_19445, varbitclient_19446, varbitclient_19447, varbitclient_19451, varbitclient_19448, varbitclient_32722, 1];
                    break;
                }
                case 7: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19456, varbitclient_19457, varbitclient_19452, varbitclient_19453, varbitclient_19454, varbitclient_19458, varbitclient_19455, varbitclient_32723, 1];
                    break;
                }
                case 5: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19463, varbitclient_19464, varbitclient_19459, varbitclient_19460, varbitclient_19461, varbitclient_19465, varbitclient_19462, varbitclient_32724, 1];
                    break;
                }
                case 8: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19470, varbitclient_19471, varbitclient_19466, varbitclient_19467, varbitclient_19468, varbitclient_19472, varbitclient_19469, varbitclient_32725, 1];
                    break;
                }
                case 1008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19484, varbitclient_19485, varbitclient_19480, varbitclient_19481, varbitclient_19482, varbitclient_19486, varbitclient_19483, varbitclient_32727, 1];
                    break;
                }
                case 9: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19491, varbitclient_19492, varbitclient_19487, varbitclient_19488, varbitclient_19489, varbitclient_19493, varbitclient_19490, varbitclient_32728, 1];
                    break;
                }
                case 0: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19498, varbitclient_19499, varbitclient_19494, varbitclient_19495, varbitclient_19496, varbitclient_19500, varbitclient_19497, varbitclient_32729, 1];
                    break;
                }
                case 4: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19505, varbitclient_19506, varbitclient_19501, varbitclient_19502, varbitclient_19503, varbitclient_19507, varbitclient_19504, varbitclient_32730, 1];
                    break;
                }
                case 22: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19512, varbitclient_19513, varbitclient_19508, varbitclient_19509, varbitclient_19510, varbitclient_19514, varbitclient_19511, varbitclient_32731, 1];
                    break;
                }
                case 10: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19519, varbitclient_19520, varbitclient_19515, varbitclient_19516, varbitclient_19517, varbitclient_19521, varbitclient_19518, varbitclient_32732, 1];
                    break;
                }
                case 11: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19526, varbitclient_19527, varbitclient_19522, varbitclient_19523, varbitclient_19524, varbitclient_19528, varbitclient_19525, varbitclient_32733, 1];
                    break;
                }
                case 14: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19533, varbitclient_19534, varbitclient_19529, varbitclient_19530, varbitclient_19531, varbitclient_19535, varbitclient_19532, varbitclient_32734, 1];
                    break;
                }
                case 16: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19540, varbitclient_19541, varbitclient_19536, varbitclient_19537, varbitclient_19538, varbitclient_19542, varbitclient_19539, varbitclient_32735, 1];
                    break;
                }
                case 1009: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19547, varbitclient_19548, varbitclient_19543, varbitclient_19544, varbitclient_19545, varbitclient_19549, varbitclient_19546, varbitclient_32736, 1];
                    break;
                }
                case 1010: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19554, varbitclient_19555, varbitclient_19550, varbitclient_19551, varbitclient_19552, varbitclient_19556, varbitclient_19553, varbitclient_32737, 1];
                    break;
                }
                case 1012: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19568, varbitclient_19569, varbitclient_19564, varbitclient_19565, varbitclient_19566, varbitclient_19570, varbitclient_19567, varbitclient_32739, 1];
                    break;
                }
                case 1013: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19575, varbitclient_19576, varbitclient_19571, varbitclient_19572, varbitclient_19573, varbitclient_19577, varbitclient_19574, varbitclient_32740, 1];
                    break;
                }
                case 1014: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19582, varbitclient_19583, varbitclient_19578, varbitclient_19579, varbitclient_19580, varbitclient_19584, varbitclient_19581, varbitclient_32741, 1];
                    break;
                }
                case 15: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19589, varbitclient_19590, varbitclient_19585, varbitclient_19586, varbitclient_19587, varbitclient_19591, varbitclient_19588, varbitclient_32742, 1];
                    break;
                }
                case 1015: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19596, varbitclient_19597, varbitclient_19592, varbitclient_19593, varbitclient_19594, varbitclient_19598, varbitclient_19595, varbitclient_32743, 1];
                    break;
                }
                case 1016: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19603, varbitclient_19604, varbitclient_19599, varbitclient_19600, varbitclient_19601, varbitclient_19605, varbitclient_19602, varbitclient_32744, 1];
                    break;
                }
                case 1017: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19610, varbitclient_19611, varbitclient_19606, varbitclient_19607, varbitclient_19608, varbitclient_19612, varbitclient_19609, varbitclient_32745, 1];
                    break;
                }
                case 1018: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19617, varbitclient_19618, varbitclient_19613, varbitclient_19614, varbitclient_19615, varbitclient_19619, varbitclient_19616, varbitclient_32746, 1];
                    break;
                }
                case 1001: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_19624, varbitclient_19625, varbitclient_19620, varbitclient_19621, varbitclient_19622, varbitclient_19626, varbitclient_19623, varbitclient_32747, 1];
                    break;
                }
                case 23: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_20845, varbitclient_20846, varbitclient_20841, varbitclient_20842, varbitclient_20843, varbitclient_20847, varbitclient_20844, varbitclient_32748, 1];
                    break;
                }
                case 2008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_22322, varbitclient_22323, varbitclient_22318, varbitclient_22319, varbitclient_22320, varbitclient_22324, varbitclient_22321, varbitclient_32750, 1];
                    break;
                }
                case 1021: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_22976, varbitclient_22977, varbitclient_22972, varbitclient_22973, varbitclient_22974, varbitclient_22978, varbitclient_22975, varbitclient_32751, 1];
                    break;
                }
                case 26: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_23088, varbitclient_23089, varbitclient_23084, varbitclient_23085, varbitclient_23086, varbitclient_23090, varbitclient_23087, varbitclient_32752, 1];
                    break;
                }
                case 24: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_23095, varbitclient_23096, varbitclient_23091, varbitclient_23092, varbitclient_23093, varbitclient_23097, varbitclient_23094, varbitclient_32753, 1];
                    break;
                }
                case 25: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24706, varbitclient_24707, varbitclient_24702, varbitclient_24703, varbitclient_24704, varbitclient_24708, varbitclient_24705, varbitclient_32754, 1];
                    break;
                }
                case 1023: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24713, varbitclient_24714, varbitclient_24709, varbitclient_24710, varbitclient_24711, varbitclient_24715, varbitclient_24712, varbitclient_32755, 1];
                    break;
                }
                case 27: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_24720, varbitclient_24721, varbitclient_24716, varbitclient_24717, varbitclient_24718, varbitclient_24722, varbitclient_24719, varbitclient_32756, 1];
                    break;
                }
                case 1024: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26193, varbitclient_26194, varbitclient_26189, varbitclient_26190, varbitclient_26191, varbitclient_26195, varbitclient_26192, varbitclient_32757, 1];
                    break;
                }
                case 1025: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26701, varbitclient_26702, varbitclient_26697, varbitclient_26698, varbitclient_26699, varbitclient_26703, varbitclient_26700, varbitclient_32758, 1];
                    break;
                }
                case 1026: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26757, varbitclient_26758, varbitclient_26753, varbitclient_26754, varbitclient_26755, varbitclient_26759, varbitclient_26756, varbitclient_32759, 1];
                    break;
                }
                case 28: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_26977, varbitclient_26978, varbitclient_26973, varbitclient_26974, varbitclient_26975, varbitclient_26979, varbitclient_26976, varbitclient_32760, 1];
                    break;
                }
                case 1027: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27413, varbitclient_27414, varbitclient_27409, varbitclient_27410, varbitclient_27411, varbitclient_27415, varbitclient_27412, varbitclient_32761, 1];
                    break;
                }
                case 1028: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27966, varbitclient_27967, varbitclient_27962, varbitclient_27963, varbitclient_27964, varbitclient_27968, varbitclient_27965, varbitclient_32762, 1];
                    break;
                }
                case 1029: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_27990, varbitclient_27991, varbitclient_27986, varbitclient_27987, varbitclient_27988, varbitclient_27992, varbitclient_27989, varbitclient_32763, 1];
                    break;
                }
                case 1030: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_28254, varbitclient_28255, varbitclient_28250, varbitclient_28251, varbitclient_28252, varbitclient_28256, varbitclient_28253, varbitclient_32764, 1];
                    break;
                }
                case 1031: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_28390, varbitclient_28391, varbitclient_28386, varbitclient_28387, varbitclient_28388, varbitclient_28392, varbitclient_28389, varbitclient_32765, 1];
                    break;
                }
                case 1032: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29259, varbitclient_29260, varbitclient_29255, varbitclient_29256, varbitclient_29257, varbitclient_29261, varbitclient_29258, varbitclient_32766, 1];
                    break;
                }
                case 1033: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29266, varbitclient_29267, varbitclient_29262, varbitclient_29263, varbitclient_29264, varbitclient_29268, varbitclient_29265, varbitclient_32767, 1];
                    break;
                }
                case 1034: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29273, varbitclient_29274, varbitclient_29269, varbitclient_29270, varbitclient_29271, varbitclient_29275, varbitclient_29272, varbitclient_32768, 1];
                    break;
                }
                case 1035: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29280, varbitclient_29281, varbitclient_29276, varbitclient_29277, varbitclient_29278, varbitclient_29282, varbitclient_29279, varbitclient_32769, 1];
                    break;
                }
                case 29: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_29548, varbitclient_29549, varbitclient_29544, varbitclient_29545, varbitclient_29546, varbitclient_29550, varbitclient_29547, varbitclient_32770, 1];
                    break;
                }
                case 1036: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_30584, varbitclient_30585, varbitclient_30580, varbitclient_30581, varbitclient_30582, varbitclient_30586, varbitclient_30583, varbitclient_32771, 1];
                    break;
                }
                case 30: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_30637, varbitclient_30638, varbitclient_30633, varbitclient_30634, varbitclient_30635, varbitclient_30639, varbitclient_30636, varbitclient_32772, 1];
                    break;
                }
                case 1037: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_31288, varbitclient_31289, varbitclient_31284, varbitclient_31285, varbitclient_31286, varbitclient_31290, varbitclient_31287, varbitclient_32773, 1];
                    break;
                }
                case 31: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_33562, varbitclient_33563, varbitclient_33558, varbitclient_33559, varbitclient_33560, varbitclient_33564, varbitclient_33561, varbitclient_33565, 1];
                    break;
                }
                case 1038: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35335, varbitclient_35336, varbitclient_35331, varbitclient_35332, varbitclient_35333, varbitclient_35337, varbitclient_35334, varbitclient_35338, 1];
                    break;
                }
                case 32: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_35421, varbitclient_35422, varbitclient_35417, varbitclient_35418, varbitclient_35419, varbitclient_35423, varbitclient_35420, varbitclient_35424, 1];
                    break;
                }
                case 1039: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36234, varbitclient_36235, varbitclient_36230, varbitclient_36231, varbitclient_36232, varbitclient_36236, varbitclient_36233, varbitclient_36237, 1];
                    break;
                }
                case 33: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36491, varbitclient_36492, varbitclient_36487, varbitclient_36488, varbitclient_36489, varbitclient_36493, varbitclient_36490, varbitclient_36494, 1];
                    break;
                }
                case 34: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36499, varbitclient_36500, varbitclient_36495, varbitclient_36496, varbitclient_36497, varbitclient_36501, varbitclient_36498, varbitclient_36502, 1];
                    break;
                }
                case 35: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36507, varbitclient_36508, varbitclient_36503, varbitclient_36504, varbitclient_36505, varbitclient_36509, varbitclient_36506, varbitclient_36510, 1];
                    break;
                }
                case 36: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36515, varbitclient_36516, varbitclient_36511, varbitclient_36512, varbitclient_36513, varbitclient_36517, varbitclient_36514, varbitclient_36518, 1];
                    break;
                }
                case 39: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36523, varbitclient_36524, varbitclient_36519, varbitclient_36520, varbitclient_36521, varbitclient_36525, varbitclient_36522, varbitclient_36526, 1];
                    break;
                }
                case 40: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_36531, varbitclient_36532, varbitclient_36527, varbitclient_36528, varbitclient_36529, varbitclient_36533, varbitclient_36530, varbitclient_36534, 1];
                    break;
                }
                case 41: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_37181, varbitclient_37182, varbitclient_37177, varbitclient_37178, varbitclient_37179, varbitclient_37183, varbitclient_37180, varbitclient_37184, 1];
                    break;
                }
                case 1040: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38672, varbitclient_38673, varbitclient_38668, varbitclient_38669, varbitclient_38670, varbitclient_38674, varbitclient_38671, varbitclient_38675, 1];
                    break;
                }
                case 1041: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_38716, varbitclient_38717, varbitclient_38712, varbitclient_38713, varbitclient_38714, varbitclient_38718, varbitclient_38715, varbitclient_38719, 1];
                    break;
                }
                case 1045: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40618, varbitclient_40619, varbitclient_40614, varbitclient_40615, varbitclient_40616, varbitclient_40620, varbitclient_40617, varbitclient_40621, 1];
                    break;
                }
                case 1047: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_40821, varbitclient_40822, varbitclient_40817, varbitclient_40818, varbitclient_40819, varbitclient_40823, varbitclient_40820, varbitclient_40824, 1];
                    break;
                }
                case 1049: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_44860, varbitclient_44861, varbitclient_44856, varbitclient_44857, varbitclient_44858, varbitclient_44862, varbitclient_44859, varbitclient_44863, 1];
                    break;
                }
                case 1050: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_49674, varbitclient_49675, varbitclient_49670, varbitclient_49671, varbitclient_49672, varbitclient_49676, varbitclient_49673, varbitclient_49677, 1];
                    break;
                }
                case 1051: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_50406, varbitclient_50407, varbitclient_50402, varbitclient_50403, varbitclient_50404, varbitclient_50408, varbitclient_50405, varbitclient_50409, 1];
                    break;
                }
                case 42: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53327, varbitclient_53328, varbitclient_53323, varbitclient_53324, varbitclient_53325, varbitclient_53329, varbitclient_53326, varbitclient_53330, 1];
                    break;
                }
                case 43: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53335, varbitclient_53336, varbitclient_53331, varbitclient_53332, varbitclient_53333, varbitclient_53337, varbitclient_53334, varbitclient_53338, 1];
                    break;
                }
                case 44: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_53343, varbitclient_53344, varbitclient_53339, varbitclient_53340, varbitclient_53341, varbitclient_53345, varbitclient_53342, varbitclient_53346, 1];
                    break;
                }
                case 1052: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55000, varbitclient_55001, varbitclient_54996, varbitclient_54997, varbitclient_54998, varbitclient_55002, varbitclient_54999, varbitclient_55003, 1];
                    break;
                }
                case 1053: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_55124, varbitclient_55125, varbitclient_55120, varbitclient_55121, varbitclient_55122, varbitclient_55126, varbitclient_55123, varbitclient_55127, 1];
                    break;
                }
                case 45: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56644, varbitclient_56645, varbitclient_56640, varbitclient_56641, varbitclient_56642, varbitclient_56646, varbitclient_56643, varbitclient_56647, 1];
                    break;
                }
                case 46: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varbitclient_56652, varbitclient_56653, varbitclient_56648, varbitclient_56649, varbitclient_56650, varbitclient_56654, varbitclient_56651, varbitclient_56655, 1];
                    break;
                }
            };
            int6 = (int6 - 1);
            int7 = (int7 - 1);
            break;
        }
        case 9:
        case 10:
        case 19: {
            switch (int1) {
                case 1000: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3005, varclient_3006, varclient_3001, varclient_3002, varclient_3003, varclient_3007, varclient_3004, varclient_5497, 1];
                    break;
                }
                case 1002: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3012, varclient_3013, varclient_3008, varclient_3009, varclient_3010, varclient_3014, varclient_3011, varclient_5498, 1];
                    break;
                }
                case 1004: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3019, varclient_3020, varclient_3015, varclient_3016, varclient_3017, varclient_3021, varclient_3018, varclient_5499, 1];
                    break;
                }
                case 1003: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3026, varclient_3027, varclient_3022, varclient_3023, varclient_3024, varclient_3028, varclient_3025, varclient_5500, 1];
                    break;
                }
                case 18: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3033, varclient_3034, varclient_3029, varclient_3030, varclient_3031, varclient_3035, varclient_3032, varclient_5501, 1];
                    break;
                }
                case 2: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3040, varclient_3041, varclient_3036, varclient_3037, varclient_3038, varclient_3042, varclient_3039, varclient_5502, 1];
                    break;
                }
                case 1005: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3047, varclient_3048, varclient_3043, varclient_3044, varclient_3045, varclient_3049, varclient_3046, varclient_5503, 1];
                    break;
                }
                case 19: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3054, varclient_3055, varclient_3050, varclient_3051, varclient_3052, varclient_3056, varclient_3053, varclient_5504, 1];
                    break;
                }
                case 20: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3061, varclient_3062, varclient_3057, varclient_3058, varclient_3059, varclient_3063, varclient_3060, varclient_5505, 1];
                    break;
                }
                case 21: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3068, varclient_3069, varclient_3064, varclient_3065, varclient_3066, varclient_3070, varclient_3067, varclient_5506, 1];
                    break;
                }
                case 3: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3075, varclient_3076, varclient_3071, varclient_3072, varclient_3073, varclient_3077, varclient_3074, varclient_5507, 1];
                    break;
                }
                case 1006: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3082, varclient_3083, varclient_3078, varclient_3079, varclient_3080, varclient_3084, varclient_3081, varclient_5508, 1];
                    break;
                }
                case 1007: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3089, varclient_3090, varclient_3085, varclient_3086, varclient_3087, varclient_3091, varclient_3088, varclient_5509, 1];
                    break;
                }
                case 17: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3096, varclient_3097, varclient_3092, varclient_3093, varclient_3094, varclient_3098, varclient_3095, varclient_5510, 1];
                    break;
                }
                case 12: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3103, varclient_3104, varclient_3099, varclient_3100, varclient_3101, varclient_3105, varclient_3102, varclient_5511, 1];
                    break;
                }
                case 1019: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3110, varclient_3111, varclient_3106, varclient_3107, varclient_3108, varclient_3112, varclient_3109, varclient_5512, 1];
                    break;
                }
                case 6: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3117, varclient_3118, varclient_3113, varclient_3114, varclient_3115, varclient_3119, varclient_3116, varclient_5513, 1];
                    break;
                }
                case 7: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3124, varclient_3125, varclient_3120, varclient_3121, varclient_3122, varclient_3126, varclient_3123, varclient_5514, 1];
                    break;
                }
                case 5: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3131, varclient_3132, varclient_3127, varclient_3128, varclient_3129, varclient_3133, varclient_3130, varclient_5515, 1];
                    break;
                }
                case 8: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3138, varclient_3139, varclient_3134, varclient_3135, varclient_3136, varclient_3140, varclient_3137, varclient_5516, 1];
                    break;
                }
                case 1008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3152, varclient_3153, varclient_3148, varclient_3149, varclient_3150, varclient_3154, varclient_3151, varclient_5518, 1];
                    break;
                }
                case 9: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3159, varclient_3160, varclient_3155, varclient_3156, varclient_3157, varclient_3161, varclient_3158, varclient_5519, 1];
                    break;
                }
                case 0: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3166, varclient_3167, varclient_3162, varclient_3163, varclient_3164, varclient_3168, varclient_3165, varclient_5520, 1];
                    break;
                }
                case 4: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3173, varclient_3174, varclient_3169, varclient_3170, varclient_3171, varclient_3175, varclient_3172, varclient_5521, 1];
                    break;
                }
                case 22: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3180, varclient_3181, varclient_3176, varclient_3177, varclient_3178, varclient_3182, varclient_3179, varclient_5522, 1];
                    break;
                }
                case 10: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3187, varclient_3188, varclient_3183, varclient_3184, varclient_3185, varclient_3189, varclient_3186, varclient_5523, 1];
                    break;
                }
                case 11: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3194, varclient_3195, varclient_3190, varclient_3191, varclient_3192, varclient_3196, varclient_3193, varclient_5524, 1];
                    break;
                }
                case 14: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3201, varclient_3202, varclient_3197, varclient_3198, varclient_3199, varclient_3203, varclient_3200, varclient_5525, 1];
                    break;
                }
                case 16: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_3208, varclient_3209, varclient_3204, varclient_3205, varclient_3206, varclient_3210, varclient_3207, varclient_5526, 1];
                    break;
                }
                case 1009: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5569, varclient_5570, varclient_5565, varclient_5566, varclient_5567, varclient_5571, varclient_5568, varclient_5527, 1];
                    break;
                }
                case 1010: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5576, varclient_5577, varclient_5572, varclient_5573, varclient_5574, varclient_5578, varclient_5575, varclient_5528, 1];
                    break;
                }
                case 1012: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5590, varclient_5591, varclient_5586, varclient_5587, varclient_5588, varclient_5592, varclient_5589, varclient_5530, 1];
                    break;
                }
                case 1013: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5597, varclient_5598, varclient_5593, varclient_5594, varclient_5595, varclient_5599, varclient_5596, varclient_5531, 1];
                    break;
                }
                case 1014: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5604, varclient_5605, varclient_5600, varclient_5601, varclient_5602, varclient_5606, varclient_5603, varclient_5532, 1];
                    break;
                }
                case 15: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5611, varclient_5612, varclient_5607, varclient_5608, varclient_5609, varclient_5613, varclient_5610, varclient_5533, 1];
                    break;
                }
                case 1015: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5618, varclient_5619, varclient_5614, varclient_5615, varclient_5616, varclient_5620, varclient_5617, varclient_5534, 1];
                    break;
                }
                case 1016: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5625, varclient_5626, varclient_5621, varclient_5622, varclient_5623, varclient_5627, varclient_5624, varclient_5535, 1];
                    break;
                }
                case 1017: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5632, varclient_5633, varclient_5628, varclient_5629, varclient_5630, varclient_5634, varclient_5631, varclient_5536, 1];
                    break;
                }
                case 1018: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5639, varclient_5640, varclient_5635, varclient_5636, varclient_5637, varclient_5641, varclient_5638, varclient_5537, 1];
                    break;
                }
                case 1001: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5646, varclient_5647, varclient_5642, varclient_5643, varclient_5644, varclient_5648, varclient_5645, varclient_5538, 1];
                    break;
                }
                case 23: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5653, varclient_5654, varclient_5649, varclient_5650, varclient_5651, varclient_5655, varclient_5652, varclient_5539, 1];
                    break;
                }
                case 2008: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5667, varclient_5668, varclient_5663, varclient_5664, varclient_5665, varclient_5669, varclient_5666, varclient_5541, 1];
                    break;
                }
                case 1021: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5674, varclient_5675, varclient_5670, varclient_5671, varclient_5672, varclient_5676, varclient_5673, varclient_5542, 1];
                    break;
                }
                case 26: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5681, varclient_5682, varclient_5677, varclient_5678, varclient_5679, varclient_5683, varclient_5680, varclient_5543, 1];
                    break;
                }
                case 24: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5688, varclient_5689, varclient_5684, varclient_5685, varclient_5686, varclient_5690, varclient_5687, varclient_5544, 1];
                    break;
                }
                case 25: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5695, varclient_5696, varclient_5691, varclient_5692, varclient_5693, varclient_5697, varclient_5694, varclient_5545, 1];
                    break;
                }
                case 1023: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5702, varclient_5703, varclient_5698, varclient_5699, varclient_5700, varclient_5704, varclient_5701, varclient_5546, 1];
                    break;
                }
                case 27: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5709, varclient_5710, varclient_5705, varclient_5706, varclient_5707, varclient_5711, varclient_5708, varclient_5547, 1];
                    break;
                }
                case 1024: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5716, varclient_5717, varclient_5712, varclient_5713, varclient_5714, varclient_5718, varclient_5715, varclient_5548, 1];
                    break;
                }
                case 1025: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5723, varclient_5724, varclient_5719, varclient_5720, varclient_5721, varclient_5725, varclient_5722, varclient_5549, 1];
                    break;
                }
                case 1026: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5730, varclient_5731, varclient_5726, varclient_5727, varclient_5728, varclient_5732, varclient_5729, varclient_5550, 1];
                    break;
                }
                case 28: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5737, varclient_5738, varclient_5733, varclient_5734, varclient_5735, varclient_5739, varclient_5736, varclient_5551, 1];
                    break;
                }
                case 1027: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5744, varclient_5745, varclient_5740, varclient_5741, varclient_5742, varclient_5746, varclient_5743, varclient_5552, 1];
                    break;
                }
                case 1028: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5751, varclient_5752, varclient_5747, varclient_5748, varclient_5749, varclient_5753, varclient_5750, varclient_5553, 1];
                    break;
                }
                case 1029: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5758, varclient_5759, varclient_5754, varclient_5755, varclient_5756, varclient_5760, varclient_5757, varclient_5554, 1];
                    break;
                }
                case 1030: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5765, varclient_5766, varclient_5761, varclient_5762, varclient_5763, varclient_5767, varclient_5764, varclient_5555, 1];
                    break;
                }
                case 1031: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5772, varclient_5773, varclient_5768, varclient_5769, varclient_5770, varclient_5774, varclient_5771, varclient_5556, 1];
                    break;
                }
                case 1032: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5779, varclient_5780, varclient_5775, varclient_5776, varclient_5777, varclient_5781, varclient_5778, varclient_5557, 1];
                    break;
                }
                case 1033: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5786, varclient_5787, varclient_5782, varclient_5783, varclient_5784, varclient_5788, varclient_5785, varclient_5558, 1];
                    break;
                }
                case 1034: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5793, varclient_5794, varclient_5789, varclient_5790, varclient_5791, varclient_5795, varclient_5792, varclient_5559, 1];
                    break;
                }
                case 1035: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5800, varclient_5801, varclient_5796, varclient_5797, varclient_5798, varclient_5802, varclient_5799, varclient_5560, 1];
                    break;
                }
                case 29: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5807, varclient_5808, varclient_5803, varclient_5804, varclient_5805, varclient_5809, varclient_5806, varclient_5561, 1];
                    break;
                }
                case 1036: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5814, varclient_5815, varclient_5810, varclient_5811, varclient_5812, varclient_5816, varclient_5813, varclient_5562, 1];
                    break;
                }
                case 30: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5821, varclient_5822, varclient_5817, varclient_5818, varclient_5819, varclient_5823, varclient_5820, varclient_5563, 1];
                    break;
                }
                case 1037: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5828, varclient_5829, varclient_5824, varclient_5825, varclient_5826, varclient_5830, varclient_5827, varclient_5564, 1];
                    break;
                }
                case 31: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5846, varclient_5847, varclient_5842, varclient_5843, varclient_5844, varclient_5848, varclient_5845, varclient_5849, 1];
                    break;
                }
                case 1038: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_5953, varclient_5954, varclient_5949, varclient_5950, varclient_5951, varclient_5955, varclient_5952, varclient_5956, 1];
                    break;
                }
                case 32: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6011, varclient_6012, varclient_6007, varclient_6008, varclient_6009, varclient_6013, varclient_6010, varclient_6014, 1];
                    break;
                }
                case 1039: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6052, varclient_6053, varclient_6048, varclient_6049, varclient_6050, varclient_6054, varclient_6051, varclient_6055, 1];
                    break;
                }
                case 33: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6140, varclient_6141, varclient_6136, varclient_6137, varclient_6138, varclient_6142, varclient_6139, varclient_6143, 1];
                    break;
                }
                case 34: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6148, varclient_6149, varclient_6144, varclient_6145, varclient_6146, varclient_6150, varclient_6147, varclient_6151, 1];
                    break;
                }
                case 35: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6156, varclient_6157, varclient_6152, varclient_6153, varclient_6154, varclient_6158, varclient_6155, varclient_6159, 1];
                    break;
                }
                case 36: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6164, varclient_6165, varclient_6160, varclient_6161, varclient_6162, varclient_6166, varclient_6163, varclient_6167, 1];
                    break;
                }
                case 39: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6172, varclient_6173, varclient_6168, varclient_6169, varclient_6170, varclient_6174, varclient_6171, varclient_6175, 1];
                    break;
                }
                case 40: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6180, varclient_6181, varclient_6176, varclient_6177, varclient_6178, varclient_6182, varclient_6179, varclient_6183, 1];
                    break;
                }
                case 41: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6283, varclient_6284, varclient_6279, varclient_6280, varclient_6281, varclient_6285, varclient_6282, varclient_6286, 1];
                    break;
                }
                case 1040: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6310, varclient_6311, varclient_6306, varclient_6307, varclient_6308, varclient_6312, varclient_6309, varclient_6313, 1];
                    break;
                }
                case 1041: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6329, varclient_6330, varclient_6325, varclient_6326, varclient_6327, varclient_6331, varclient_6328, varclient_6332, 1];
                    break;
                }
                case 1045: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6423, varclient_6424, varclient_6419, varclient_6420, varclient_6421, varclient_6425, varclient_6422, varclient_6426, 1];
                    break;
                }
                case 1047: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6463, varclient_6464, varclient_6459, varclient_6460, varclient_6461, varclient_6465, varclient_6462, varclient_6466, 1];
                    break;
                }
                case 1049: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6627, varclient_6628, varclient_6623, varclient_6624, varclient_6625, varclient_6629, varclient_6626, varclient_6630, 1];
                    break;
                }
                case 1050: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_6939, varclient_6940, varclient_6935, varclient_6936, varclient_6937, varclient_6941, varclient_6938, varclient_6942, 1];
                    break;
                }
                case 1051: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_7018, varclient_7019, varclient_7014, varclient_7015, varclient_7016, varclient_7020, varclient_7017, varclient_7021, 1];
                    break;
                }
                case 42: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_7172, varclient_7173, varclient_7168, varclient_7169, varclient_7170, varclient_7174, varclient_7171, varclient_7175, 1];
                    break;
                }
                case 43: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_7180, varclient_7181, varclient_7176, varclient_7177, varclient_7178, varclient_7182, varclient_7179, varclient_7183, 1];
                    break;
                }
                case 44: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_7188, varclient_7189, varclient_7184, varclient_7185, varclient_7186, varclient_7190, varclient_7187, varclient_7191, 1];
                    break;
                }
                case 1052: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_7369, varclient_7370, varclient_7365, varclient_7366, varclient_7367, varclient_7371, varclient_7368, varclient_7372, 1];
                    break;
                }
                case 1053: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_7390, varclient_7391, varclient_7386, varclient_7387, varclient_7388, varclient_7392, varclient_7389, varclient_7393, 1];
                    break;
                }
                case 45: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_8190, varclient_8191, varclient_8186, varclient_8187, varclient_8188, varclient_8192, varclient_8189, varclient_8193, 1];
                    break;
                }
                case 46: {
                    [int2, int3, int4, int5, int6, int7, int8, int9, int10] = [varclient_8198, varclient_8199, varclient_8194, varclient_8195, varclient_8196, varclient_8200, varclient_8197, varclient_8201, 1];
                    break;
                }
            };
            int6 = (int6 - 1);
            int7 = (int7 - 1);
            break;
        }
    };
    if ((((((((int2 + int3) + int4) + int5) + int8) == 0) && (int6 == -1)) && (int7 == -1))) {
        int10 = 0;
    };
    int13 = script10405(int1);
    var int17 = script20451(int13);
    if (((int10 == 0) && (int0 != 1))) {
        return script8701(1, int1);
    };
    if ((int0 != 1)) {
        if ((int17 == 0)) {
            [int14, int14, int14, int14, int4, int5, int14, int14, int14, int14, int14] = script8701(1, int1);
        } else if ((int17 == 1)) {
            [int14, int14, int14, int14, int14, int5, int14, int14, int14, int14, int14] = script8701(1, int1);
        } else if ((int17 == 2)) {
            [int14, int14, int14, int14, int4, int14, int14, int14, int14, int14, int14] = script8701(1, int1);
        };
    };
    if (((int9 == 1) && (struct_getparam(int13, 5770) == false))) {
        int9 = 0;
    };
    if ((int15 == -1)) {
        int2 = MAX(0, int2);
    };
    if ((int16 == -1)) {
        int3 = MAX(0, int3);
    };
    int4 = MAX(0, int4);
    int5 = MAX(0, int5);
    int8 = MAX(0, int8);
    int9 = MAX(0, int9);
    int6 = MAX(-1, int6);
    int7 = MAX(-1, int7);
    return [int2, int3, int15, int16, int4, int5, int6, int7, int8, int9, int10];
}