//
function script7590(int0: mapelement): void {
    var int1 = unk11127(int0);
    var int2 = -1 as struct;
    var string0 = "null";
    var string1 = "null";
    var int3 = -1;
    var int4 = -1 as quest;
    var int5 = -1 as coordgrid;
    var int6 = -1;
    if (((int1 != -1 as category) || (strcmp(string1, "null") != 0))) {
        string1 = mec_getparam(int0, 4149);
        int2 = enum_getvalue(41, 73, 8586 as cs2enum, int1);
        if ((int2 != -1 as struct)) {
            string0 = struct_getparam(int2, 596);
        };
        switch (int1) {
            case 1217: {
                if ((strcmp(string1, "null") != 0)) {
                    string0 = `${string0}<br>${string1}`;
                } else if ((mec_getparam(int0, 4150) != -1)) {
                    string0 = `${string0}<br>Level ${inttostring(mec_getparam(int0, 4150), 10)} Agility`;
                };
                break;
            }
            case 948: {
                string0 = "Map link";
                int5 = mec_getparam(int0, 4148);
                if ((int5 != -1 as coordgrid)) {
                    string0 = `Map link<br>To ${WORLDMAP_GETMAPNAME(WORLDMAP_GETMAP(int5))}`;
                };
                break;
            }
            case 949: {
                int5 = mec_getparam(int0, 4148);
                if ((int5 != -1 as coordgrid)) {
                    string0 = `Dungeon link<br>To ${WORLDMAP_GETMAPNAME(WORLDMAP_GETMAP(int5))}`;
                };
                break;
            }
            case 1157: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    int4 = enum_getvalue(0, 3, 2252 as cs2enum, int3);
                    if ((int4 != -1 as quest)) {
                        script7080(int4, comp(1422, 4), 0);
                        return;
                    };
                };
                break;
            }
            case 1159: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script2555(mec_getparam(int0, 478), mec_getparam(int0, 7781), mec_getparam(int0, 4147), mec_getparam(int0, 7774), mec_getparam(int0, 7775), mec_getparam(int0, 7776), mec_getparam(int0, 7777), mec_getparam(int0, 7778), mec_getparam(int0, 7779), mec_getparam(int0, 7780), mec_getparam(int0, 4149), comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 5699: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script20705(mec_getparam(int0, 478), mec_getparam(int0, 7781), mec_getparam(int0, 4147), mec_getparam(int0, 7774), mec_getparam(int0, 7775), mec_getparam(int0, 7776), mec_getparam(int0, 7777), mec_getparam(int0, 7778), mec_getparam(int0, 7779), mec_getparam(int0, 7780), mec_getparam(int0, 4149), comp(1422, 4), 0, 21);
                    return;
                };
                break;
            }
            case 5121:
            case 1184: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script13730(int3, 14, comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 1176: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script13730(int3, 15, comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 3032: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script13730(int3, 16, comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 1205: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script13730(int3, 17, comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 4551: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script20706(int3, mec_getparam(int0, 478), mec_getparam(int0, 4149), comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 4624: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script14730(int3, comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 4625: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script14731(int3, comp(1422, 4), 0);
                    return;
                };
                break;
            }
            case 4476: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    string0 = script3109(int3, 93192196, 0);
                };
                break;
            }
            case 2613: {
                int5 = enum_getvalue(0, 22, 9962 as cs2enum, mec_getparam(int0, 4147));
                if ((int5 != -1 as coordgrid)) {
                    int6 = mec_getparam(int0, 4150);
                    if ((int6 == 1)) {
                        if ((script6431() == true)) {
                            return;
                        };
                        string0 = "Click to teleport to this lodestone.";
                    } else {
                        string0 = "This lodestone is not yet active.";
                    };
                    string0 = `${enum_getvalue(22, 36, 5726 as cs2enum, int5)}<br>${string0}`;
                };
                break;
            }
            case 1199:
            case 4383:
            case 4384:
            case 4385:
            case 4386:
            case 4388:
            case 4389:
            case 4390:
            case 4392:
            case 4393:
            case 4394:
            case 4395:
            case 4396:
            case 4397:
            case 4398:
            case 4399:
            case 4400:
            case 4401:
            case 4402:
            case 2579: {
                int3 = mec_getparam(int0, 4147);
                if ((int3 != -1)) {
                    script13730(int3, 19, comp(1422, 4), 0);
                    return;
                };
                if ((strcmp(string1, "null") != 0)) {
                    string0 = string1;
                };
                break;
            }
            default: {
                if ((strcmp(string1, "null") != 0)) {
                    string0 = string1;
                };
                break;
            }
        };
        if (((strcmp(string0, "null") != 0) && (strcmp(string0, "") != 0))) {
            script16334(int0, string0, comp(1422, 4), 0);
        };
    };
    return;
}