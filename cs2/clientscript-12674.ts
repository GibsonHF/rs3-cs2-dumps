//
function script12674(): void {
    var int0 = 5997;
    var int1 = 0;
    while ((int1 < 27)) {
        if ((script12672(int0) == 1)) {
            stack(4315);
            stack(enum_getvalue(0, 9, 11529 as cs2enum, int1));
            IF_SETGRAPHIC();
            stack(0);
            stack(0);
            stack(9);
            stack(11531);
            stack(int1);
            enum_getvalue();
            IF_SETHIDE(stack());
        } else if ((varplayer_3079 == int0)) {
            stack(4314);
            stack(enum_getvalue(0, 9, 11529 as cs2enum, int1));
            IF_SETGRAPHIC();
            stack(0);
            stack(0);
            stack(9);
            stack(11531);
            stack(int1);
            enum_getvalue();
            IF_SETHIDE(stack());
        } else if ((script12673(int0) == 1)) {
            if ((varbitplayer_41340 == 0)) {
                stack(4304);
                stack(enum_getvalue(0, 9, 11529 as cs2enum, int1));
                IF_SETGRAPHIC();
            } else {
                stack(4314);
                stack(enum_getvalue(0, 9, 11529 as cs2enum, int1));
                IF_SETGRAPHIC();
            };
            IF_SETHIDE(false, enum_getvalue(0, 9, 11531 as cs2enum, int1));
        } else {
            IF_SETHIDE(true, enum_getvalue(0, 9, 11529 as cs2enum, int1));
            IF_SETHIDE(true, enum_getvalue(0, 9, 11531 as cs2enum, int1));
        };
        int1 = (int1 + 1);
        int0 = (int0 + 1);
    };
    if ((varbitplayer_41340 == 1)) {
        IF_SETHIDE(false, comp(1780, 135));
    };
    switch (MAP_LANG()) {
        case 0: {
            stack(4368);
            stack(116654181);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(4369);
            stack(116654181);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(4370);
            stack(116654181);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(4371);
            stack(116654181);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}