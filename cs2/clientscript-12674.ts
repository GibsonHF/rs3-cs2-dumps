//
function script12674(): void {
    var int0 = 5997;
    var int1 = 0;
    while ((int1 < 27)) {
        if ((script12672(int0) == 1)) {
            IF_SETGRAPHIC(4315, enum_getvalue(0, 9, 11529 as cs2enum, int1));
            IF_SETHIDE(0, enum_getvalue(0, 9, 11531 as cs2enum, int1));
        } else if ((varplayer_3079 == int0)) {
            IF_SETGRAPHIC(4314, enum_getvalue(0, 9, 11529 as cs2enum, int1));
            IF_SETHIDE(0, enum_getvalue(0, 9, 11531 as cs2enum, int1));
        } else if ((script12673(int0) == 1)) {
            if ((varbitplayer_41340 == 0)) {
                IF_SETGRAPHIC(4304, enum_getvalue(0, 9, 11529 as cs2enum, int1));
            } else {
                IF_SETGRAPHIC(4314, enum_getvalue(0, 9, 11529 as cs2enum, int1));
            };
            IF_SETHIDE(0, enum_getvalue(0, 9, 11531 as cs2enum, int1));
        } else {
            IF_SETHIDE(1, enum_getvalue(0, 9, 11529 as cs2enum, int1));
            IF_SETHIDE(1, enum_getvalue(0, 9, 11531 as cs2enum, int1));
        };
        int1 = (int1 + 1);
        int0 = (int0 + 1);
    };
    if ((varbitplayer_41340 == 1)) {
        IF_SETHIDE(0, comp(1780, 135));
    };
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(4368, comp(1780, 101));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(4369, comp(1780, 101));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(4370, comp(1780, 101));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(4371, comp(1780, 101));
            break;
        }
    };
    return;
}