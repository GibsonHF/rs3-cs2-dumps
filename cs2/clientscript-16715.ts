//
function script16715(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 34955;
    if ((varbitplayer_52330 == 1)) {
        switch (int1) {
            case 1: {
                if ((varbitplayer_55835 == 1)) {
                    int4 = 22645;
                };
                break;
            }
            case 2: {
                if ((varbitplayer_55836 == 1)) {
                    int4 = 22645;
                };
                break;
            }
            case 3: {
                if ((varbitplayer_55837 == 1)) {
                    int4 = 22645;
                };
                break;
            }
        };
    };
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= int3))) {
        IF_SETMODELANIM(int4, int2);
        IF_SETONTIMER(callback(), int2);
    };
    return;
}