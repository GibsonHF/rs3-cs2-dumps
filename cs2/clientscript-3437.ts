//
function script3437(): void {
    var int0 = -1 as model;
    if (((varbitplayer_5885 == 0) || (((varbitplayer_5875 == 8) && (varbitplayer_5894 == 1)) && (varbitplayer_5889 == 0)))) {
        if ((varbitplayer_5892 < 3)) {
            if ((varbitplayer_5893 == 1)) {
                int0 = enum_getvalue(0, 31, 5079 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 2)) {
                int0 = enum_getvalue(0, 31, 5080 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 3)) {
                int0 = enum_getvalue(0, 31, 5081 as cs2enum, varbitplayer_5892);
            };
        } else if ((varbitplayer_5892 < 6)) {
            if ((varbitplayer_5893 == 1)) {
                int0 = enum_getvalue(0, 31, 5080 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 2)) {
                int0 = enum_getvalue(0, 31, 5081 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 3)) {
                int0 = enum_getvalue(0, 31, 5079 as cs2enum, varbitplayer_5892);
            };
        } else if ((varbitplayer_5892 == 10)) {
            if ((varbitplayer_5893 == 3)) {
                int0 = enum_getvalue(0, 31, 5080 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 2)) {
                int0 = enum_getvalue(0, 31, 5081 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 1)) {
                int0 = enum_getvalue(0, 31, 5079 as cs2enum, varbitplayer_5892);
            };
        } else {
            if ((varbitplayer_5893 == 1)) {
                int0 = enum_getvalue(0, 31, 5081 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 2)) {
                int0 = enum_getvalue(0, 31, 5079 as cs2enum, varbitplayer_5892);
            };
            if ((varbitplayer_5893 == 3)) {
                int0 = enum_getvalue(0, 31, 5080 as cs2enum, varbitplayer_5892);
            };
        };
        IF_SETMODEL(int0, comp(986, 3));
        if ((varbitplayer_5893 != 0)) {
            IF_SETHIDE(false, comp(986, 5));
        };
        if ((varbitplayer_5893 == 1)) {
            IF_SETPOSITION(30, 205, 0, 0, comp(986, 5));
        } else if ((varbitplayer_5893 == 2)) {
            IF_SETPOSITION(112, 205, 0, 0, comp(986, 5));
        } else if ((varbitplayer_5893 == 3)) {
            IF_SETPOSITION(196, 205, 0, 0, comp(986, 5));
        } else {
            IF_SETHIDE(true, comp(986, 5));
        };
    };
    return;
}