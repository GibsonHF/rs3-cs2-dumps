//
function script16873(int0: component, int1: component, int2: int): void {
    var int3 = 0;
    var string0 = "";
    if ((script16838(int2) == script16837(int2))) {
        int3 = 16384;
        switch (int2) {
            case 1: {
                string0 = `${TOSTRING_LOCALISED(500, 1)}/${TOSTRING_LOCALISED(500, 1)}`;
                break;
            }
            case 2: {
                string0 = `${TOSTRING_LOCALISED(50, 1)}/${TOSTRING_LOCALISED(50, 1)}`;
                break;
            }
            case 3: {
                string0 = `${TOSTRING_LOCALISED(2000, 1)}/${TOSTRING_LOCALISED(2000, 1)}`;
                break;
            }
        };
    } else {
        switch (int2) {
            case 1: {
                int3 = SCALE(MODULO(script4708(), 500), 500, 16384);
                string0 = `${TOSTRING_LOCALISED(MODULO(script4708(), 500), 1)}/${TOSTRING_LOCALISED(500, 1)}`;
                break;
            }
            case 2: {
                int3 = SCALE(MODULO(varplayer_1297, 50), 50, 16384);
                string0 = `${TOSTRING_LOCALISED(MODULO(varplayer_1297, 50), 1)}/${TOSTRING_LOCALISED(50, 1)}`;
                break;
            }
            case 3: {
                int3 = SCALE(MODULO(varplayer_7122, 2000), 2000, 16384);
                string0 = `${TOSTRING_LOCALISED(MODULO(varplayer_7122, 2000), 1)}/${TOSTRING_LOCALISED(2000, 1)}`;
                break;
            }
        };
    };
    IF_SETSIZE(int3, IF_GETHEIGHT(int0), 2, 0, int0);
    IF_SETTEXT(string0, int1);
    return;
}