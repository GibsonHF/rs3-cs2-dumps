//
function script4804(): void {
    var int0 = script4828(varbitplayer_6981);
    if ((int0 == 1)) {
        script4842(1);
        script4842(2);
        script4842(3);
        switch (varbitplayer_6981) {
            case 1: {
                script4846(varbitplayer_6986);
                break;
            }
            case 2: {
                script4846(varbitplayer_6995);
                break;
            }
            case 3: {
                script4846(varbitplayer_7004);
                break;
            }
        };
    } else {
        script4843(1);
        script4843(2);
        script4843(3);
    };
    script4807();
    var int1 = -1 as cs2enum;
    var int2 = -1 as cs2enum;
    var int3 = -1 as cs2enum;
    var int4 = -1;
    var int5 = 0;
    var int6 = 1;
    var int7 = 1;
    var int8 = 0;
    switch (varbitplayer_6981) {
        case 1: {
            int5 = varbitplayer_6985;
            int8 = varbitplayer_6989;
            break;
        }
        case 2: {
            int5 = varbitplayer_6994;
            int8 = varbitplayer_6998;
            break;
        }
        case 3: {
            int5 = varbitplayer_7003;
            int8 = varbitplayer_7007;
            break;
        }
    };
    if (((int5 == 0) && (int8 == 0))) {
        script4940();
        return;
    };
    script4942();
    var int9 = script4825(varbitplayer_6981);
    var int10 = script4822(varbitplayer_6981);
    if ((int8 == 1)) {
        script4846(1);
        stack(-1);
        stack(82444539);
        IF_SETGRAPHIC();
        IF_SETTEXT("Reset Hotspot to its default state", 82444540);
        IF_SETTEXT("", 82444714);
        IF_SETTEXT("", 82444715);
        IF_SETTEXT("", 82444716);
        IF_SETTEXT("", 82444633);
        IF_SETTEXT("", 82444634);
        IF_SETTEXT("", 82444635);
        IF_SETTEXT("", 82444546);
        IF_SETTEXT("", 82444547);
        IF_SETTEXT("", 82444548);
        script4805(1, 1);
        script4805(2, 1);
        script4805(3, 1);
        script4805(1, 2);
        script4805(2, 2);
        script4805(3, 2);
        script4805(1, 3);
        script4805(2, 3);
        script4805(3, 3);
    } else {
        if ((int9 != -1 as cs2enum)) {
            stack(enum_getvalue(0, 23, int9, int5));
            stack(82444539);
            IF_SETGRAPHIC();
        };
        if ((int10 != -1 as cs2enum)) {
            IF_SETTEXT(enum_getvalue(0, 36, int10, int5), comp(1258, 252));
        };
        int1 = enum_getvalue(0, 26, 4043 as cs2enum, int5);
        if (((int1 == -1 as cs2enum) && (int8 == 0))) {
            return;
        };
        while ((int6 <= 3)) {
            int2 = enum_getvalue(0, 26, int1, int6);
            if ((int2 != -1 as cs2enum)) {
                while ((int7 <= 3)) {
                    int3 = enum_getvalue(0, 26, int2, int7);
                    if ((int3 != -1 as cs2enum)) {
                        script4806(int3, int6, int7, int0, int5);
                    } else {
                        script4805(int6, int7);
                    };
                    int3 = -1 as cs2enum;
                    int7 = (int7 + 1);
                };
            } else {
                script4842(int6);
            };
            int7 = 1;
            int6 = (int6 + 1);
        };
        script4838();
        script4810();
    };
    script4809();
    script4814();
    return;
}