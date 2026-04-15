//
function script5431(int0: int): unknown_int {
    var int1 = 0;
    var int2 = 0;
    if ((CC_FIND(comp(1167, 1), int0) == 1)) {
        int2 = CC_GETY();
        int1 = (int2 + 10);
        if (((int1 > 85) && (int1 < 105))) {
            if ((varclient_1664 == 1)) {
                varclient_1666 = 21;
            } else if ((varclient_1664 == 2)) {
                varclient_1666 = 22;
            } else {
                varclient_1666 = (varclient_1664 - 2);
            };
            IF_SETTEXT(enum_getvalue(0, 36, 5214 as cs2enum, varclient_1666), comp(1167, 27));
            SOUND_VORBIS_VOLUME(8080 as vorbis, 1, 0, 80);
            if (((varclient_1667 == 1) && (varclient_1663 == varclient_1666))) {
                IF_SETONTIMER(callback(), comp(1167, 1));
                CC_SETPOSITION(0, 90, 1, 0);
                SOUND_VORBIS_VOLUME(8103, 1, 0, 200);
                if ((int0 == 0)) {
                    if ((CC_FIND(comp(1167, 1), 2) == 1)) {
                        CC_SETPOSITION(0, 0, 1, 0);
                    };
                    if ((CC_FIND(comp(1167, 1), 1) == 1)) {
                        CC_SETPOSITION(0, 180, 1, 0);
                    };
                } else if ((int0 == 1)) {
                    if ((CC_FIND(comp(1167, 1), 0) == 1)) {
                        CC_SETPOSITION(0, 0, 1, 0);
                    };
                    if ((CC_FIND(comp(1167, 1), 2) == 1)) {
                        CC_SETPOSITION(0, 180, 1, 0);
                    };
                } else if ((int0 == 2)) {
                    if ((CC_FIND(comp(1167, 1), 1) == 1)) {
                        CC_SETPOSITION(0, 0, 1, 0);
                    };
                    if ((CC_FIND(comp(1167, 1), 0) == 1)) {
                        CC_SETPOSITION(0, 180, 1, 0);
                    };
                };
                IF_SETHIDE(false, comp(1167, 84));
                IF_SETTEXT(inttostring(varbitplayer_3684, 10), comp(1167, 33));
                IF_SETHIDE(true, comp(1167, 2));
                return 0;
            };
            if (((varclient_1663 != 0) && (varclient_1667 == 0))) {
                script5432();
            };
        };
        if (((int1 > 0) && (int1 < 270))) {
            CC_SETPOSITION(0, int1, 1, 0);
        } else if ((int1 >= 270)) {
            CC_DELETE();
            script5433(int0, 0);
        };
    };
    return 1;
}