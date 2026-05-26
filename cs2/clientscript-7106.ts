//
function script7106(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    if (((int0 > 0) && (int0 < 61))) {
        if ((int3 == 1)) {
            if (((STAT(enum_getvalue(0, 17, 681 as cs2enum, int0)) >= int1) || (((script14961(int0) == 1) && (int2 == 0)) && (script7107(int4) >= int1)))) {
                return 1;
            };
        } else if (((int3 == 0) && ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int0)) >= int1) || (((script14961(int0) == 1) && (int2 == 0)) && (script7107(int4) >= int1))))) {
            return 1;
        };
        return 0;
    };
    switch (int0) {
        case 61: {
            if ((script7073(int1) == 2)) {
                return 1;
            };
            return 0;
        }
        case 62: {
            return script7163(int1);
        }
        case 63: {
            return script734(script12059(int1));
        }
        case 64: {
            if ((varplayer_9409 == int1)) {
                return 1;
            };
            return 0;
        }
        case 65: {
            return script734(script14630(script14625(int1)));
        }
        case 66: {
            return script734(script12059(int1));
        }
    };
    return 1;
}