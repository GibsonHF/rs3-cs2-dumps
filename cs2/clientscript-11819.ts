//
function script11819(int0: component, int1: component, int2: component, int3: int, int4: unknown_int, int5: graphic, string0: string): void {
    if ((((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535))) || (int2 == comp(-1, 65535)))) {
        return;
    };
    if ((((int3 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int3) == 1))) {
        CC_SETGRAPHIC(int5);
        switch (int4) {
            case 1:
            case 3: {
                CC_SETHIDE(false);
                break;
            }
            case 4:
            case 2: {
                CC_SETHIDE(true);
                break;
            }
        };
    };
    if ((((int3 == -1) && (IF_FIND(int1) == 1)) || (CC_FIND(int1, int3) == 1))) {
        CC_SETTEXT(string0);
        switch (varbitplayer_55114) {
            case 1: {
                CC_SETTEXTALIGN(1, 1, 0);
                break;
            }
            case 2: {
                CC_SETTEXTALIGN(2, 0, 0);
                break;
            }
        };
        if ((int4 == 1)) {
            if ((varbitplayer_55114 == 0)) {
                CC_SETHIDE(true);
            } else {
                CC_SETHIDE(false);
            };
        };
    };
    if (((int4 > 0) && (((int3 == -1) && (IF_FIND(int2) == 1)) || (CC_FIND(int2, int3) == 1)))) {
        if ((((int4 == 1) || (int4 == 3)) || (int4 == 4))) {
            CC_SETTRANS(0);
            CC_SETHIDE(true);
            CC_SETFILL(0);
            CC_SETONTIMER(callback());
        } else {
            CC_SETTRANS(255);
            CC_SETHIDE(false);
            CC_SETFILL(1);
            CC_SETONTIMER(callback(script6299, -2147483645, -2147483643, 1, CLIENTCLOCK()));
        };
    };
    return;
}