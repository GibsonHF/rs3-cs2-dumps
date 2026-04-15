//
function script16906(int0: int): unknown_int {
    switch (int0) {
        case 1: {
            return 1;
        }
        case 0: {
            return 1;
        }
        case 2: {
            if ((script3112() == 0)) {
                return 0;
            };
            if ((enum_getvalue(0, 0, 14153 as cs2enum, script16828(varplayer_6601)) == -1)) {
                return 0;
            };
            return 1;
        }
        case 3: {
            if ((script3112() == 0)) {
                return 0;
            };
            if ((enum_getvalue(0, 0, 14153 as cs2enum, (1 + script16828(varplayer_6601))) == -1)) {
                return 0;
            };
            return 1;
        }
    };
    return 0;
}