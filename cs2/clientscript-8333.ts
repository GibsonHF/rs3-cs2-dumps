//
function script8333(int0: int): [int, int] {
    var int1 = script10405(int0);
    var int2 = struct_getparam(int1, 3505);
    var int3 = struct_getparam(int1, 3499);
    var int4 = struct_getparam(int1, 3500);
    if ((int0 == 17)) {
        if ((IF_HASSUBOVERLAY(int2, 1759 as overlayinterface) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1117 as overlayinterface) == 1)) {
            int3 = 190;
            if ((IF_GETHIDE(comp(1117, 6)) == false)) {
                int4 = 147;
            } else if ((IF_GETHIDE(comp(1117, 7)) == false)) {
                int4 = 261;
            } else if ((IF_GETHIDE(comp(1117, 8)) == false)) {
                int4 = 147;
            } else if ((IF_GETHIDE(comp(1117, 9)) == false)) {
                int4 = 261;
            } else if ((IF_GETHIDE(comp(1117, 10)) == false)) {
                int4 = 147;
            } else if ((IF_GETHIDE(comp(1117, 11)) == false)) {
                int4 = 147;
            } else if ((IF_GETHIDE(comp(1117, 14)) == false)) {
                int4 = 147;
            };
        } else if ((((IF_HASSUBOVERLAY(int2, 953 as overlayinterface) == 1) || (IF_HASSUBOVERLAY(int2, 946 as overlayinterface) == 1)) || (IF_HASSUBOVERLAY(int2, 936 as overlayinterface) == 1))) {
            int4 = 0;
            int3 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1039 as overlayinterface) == 1)) {
            int3 = 220;
            int4 = 220;
        } else if ((IF_HASSUBOVERLAY(int2, 1552 as overlayinterface) == 1)) {
            int3 = 152;
            int4 = 192;
        } else if ((IF_HASSUBOVERLAY(int2, 1689 as overlayinterface) == 1)) {
            int3 = 200;
            int4 = 276;
        } else if ((IF_HASSUBOVERLAY(int2, 1800 as overlayinterface) == 1)) {
            int3 = 205;
            int4 = 136;
        } else if ((IF_HASSUBOVERLAY(int2, 91 as overlayinterface) == 1)) {
            int3 = 190;
            if ((script13749() == true)) {
                int4 = 400;
            } else {
                int4 = 325;
            };
        } else if ((IF_HASSUBOVERLAY(int2, 783 as overlayinterface) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 223 as overlayinterface) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1247 as overlayinterface) == 1)) {
            int4 = 0;
        } else if ((IF_HASSUBOVERLAY(int2, 1425 as overlayinterface) == 1)) {
            int4 = 382;
        } else if ((IF_HASSUBOVERLAY(int2, 569 as overlayinterface) == 1)) {
            int4 = 275;
        } else if ((IF_HASSUBOVERLAY(int2, 1212 as overlayinterface) == 1)) {
            int4 = 275;
        } else if ((IF_HASSUBOVERLAY(int2, 1330 as overlayinterface) == 1)) {
            int4 = 235;
        } else if ((IF_HASSUBOVERLAY(int2, 551 as overlayinterface) == 1)) {
            int4 = 261;
        } else if ((IF_HASSUBOVERLAY(int2, 1223 as overlayinterface) == 1)) {
            int3 = 190;
            int4 = 375;
        } else if ((IF_HASSUBOVERLAY(int2, 1300 as overlayinterface) == 1)) {
            int3 = 190;
            int4 = 330;
        } else if ((IF_HASSUBOVERLAY(int2, 1481 as overlayinterface) == 1)) {
            int4 = 360;
        };
    } else if ((int0 == 12)) {
        if ((IF_HASSUBOVERLAY(int2, 662 as overlayinterface) == 1)) {
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