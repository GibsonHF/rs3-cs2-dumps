//
function script7106(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    if (((int1 > 0) && (int1 < 61))) {
        if (((int1 == 22) && (OC_CATEGORY(int0) == 5769 as category))) {
            var int2 = script12588(int2);
        };
        if ((int4 == 1)) {
            if ((STAT(enum_getvalue(0, 17, 681 as cs2enum, int1)) >= int2)) {
                return 1;
            } else if ((((script14961(int1) == 1) && (int3 == 0)) && (script7107(int5) >= int2))) {
                return 1;
            };
        } else if ((int4 == 0)) {
            if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int1)) >= int2)) {
                return 1;
            } else if ((((script14961(int1) == 1) && (int3 == 0)) && (script7107(int5) >= int2))) {
                return 1;
            };
        };
        return 0;
    };
    switch (int1) {
        case 61: {
            if ((script7073(int2) == 2)) {
                return 1;
            };
            return 0;
        }
        case 62: {
            return script7163(int2);
        }
        case 63: {
            return script734(script12059(int2));
        }
        case 64: {
            if ((varplayer_9409 == int2)) {
                return 1;
            };
            return 0;
        }
        case 65: {
            return script734(script14630(script14625(int2)));
        }
        case 66: {
            return script734(script12059(int2));
        }
        case 67: {
            return script12592(script11652(int0));
        }
    };
    return 1;
}