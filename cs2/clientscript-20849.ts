//
function script20849(int0: number): [number, number] {
    var int1 = dbrow_getfield(int0, 1425728, 0);
    var int2 = 0;
    if ((int1 == 1)) {
        switch (int0) {
            case 19494:
            case 19495: {
                int2 = script205();
                break;
            }
            case 19496: {
                int2 = script584();
                break;
            }
            case 20556: {
                int2 = script734(varbitplayer_33634);
                break;
            }
            case 20557: {
                int2 = script734(varbitplayer_46460);
                break;
            }
            case 20558: {
                int2 = script734(varbitplayer_33625);
                break;
            }
            case 20559: {
                if ((((varbitplayer_33634 == 1) || (varbitplayer_46460 == 1)) || (varbitplayer_33625 == 1))) {
                    int2 = 1;
                } else {
                    int2 = 0;
                };
                break;
            }
        };
    };
    return [int1, int2];
}