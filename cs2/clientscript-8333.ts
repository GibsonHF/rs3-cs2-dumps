//
function script8333(int0: number): [number, number] {
    var int1 = script10405(int0);
    var int2 = struct_getparam(int1, 3505);
    var int3 = struct_getparam(int1, 3499);
    var int4 = struct_getparam(int1, 3500);
    if ((int0 == 17)) {
        if ((IF_HASSUBOVERLAY(int2, 1759) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1117) == 1)) {
            int3 = 190;
            if ((IF_GETHIDE(73203718) == 0)) {
                int4 = 147;
            } else if ((IF_GETHIDE(73203719) == 0)) {
                int4 = 261;
            } else if ((IF_GETHIDE(73203720) == 0)) {
                int4 = 147;
            } else if ((IF_GETHIDE(73203721) == 0)) {
                int4 = 261;
            } else if ((IF_GETHIDE(73203722) == 0)) {
                int4 = 147;
            } else if ((IF_GETHIDE(73203723) == 0)) {
                int4 = 147;
            } else if ((IF_GETHIDE(73203726) == 0)) {
                int4 = 147;
            };
        } else if ((((IF_HASSUBOVERLAY(int2, 953) == 1) || (IF_HASSUBOVERLAY(int2, 946) == 1)) || (IF_HASSUBOVERLAY(int2, 936) == 1))) {
            int4 = 0;
            int3 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1039) == 1)) {
            int3 = 220;
            int4 = 220;
        } else if ((IF_HASSUBOVERLAY(int2, 1552) == 1)) {
            int3 = 152;
            int4 = 192;
        } else if ((IF_HASSUBOVERLAY(int2, 1689) == 1)) {
            int3 = 200;
            int4 = 276;
        } else if ((IF_HASSUBOVERLAY(int2, 1800) == 1)) {
            int3 = 205;
            int4 = 136;
        } else if ((IF_HASSUBOVERLAY(int2, 91) == 1)) {
            int3 = 190;
            if ((script13749() == 1)) {
                int4 = 400;
            } else {
                int4 = 304;
            };
        } else if ((IF_HASSUBOVERLAY(int2, 783) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 223) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1247) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1425) == 1)) {
            int4 = 382;
        } else if ((IF_HASSUBOVERLAY(int2, 569) == 1)) {
            int4 = 275;
        } else if ((IF_HASSUBOVERLAY(int2, 1212) == 1)) {
            int4 = 275;
        } else if ((IF_HASSUBOVERLAY(int2, 1330) == 1)) {
            int4 = 235;
        } else if ((IF_HASSUBOVERLAY(int2, 551) == 1)) {
            int4 = 261;
        } else if ((IF_HASSUBOVERLAY(int2, 1223) == 1)) {
            int3 = 190;
            int4 = 375;
        } else if ((IF_HASSUBOVERLAY(int2, 1300) == 1)) {
            int3 = 190;
            int4 = 330;
        } else if ((IF_HASSUBOVERLAY(int2, 1481) == 1)) {
            int4 = 360;
        };
    } else if ((int0 == 12)) {
        if ((IF_HASSUBOVERLAY(int2, 662) == 1)) {
            if (((varbitplayer_28629 == 1) && (((item_getparam(varplayer_1831, 394) != 0) || (item_getparam(varplayer_1831, 5048) == 1)) && (script11682(item_getparam(varplayer_1831, 74)) > 0)))) {
            } else {
                [int3, int4] = [190, 256];
            };
        } else {
            [int3, int4] = [190, 256];
        };
    };
    return [int3, int4];
}