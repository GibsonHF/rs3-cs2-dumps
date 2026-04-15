//
function script8517(int0: int): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    if ((script6431() == false)) {
        if ((varbitplayer_37056 == 0)) {
            IF_SETHIDE(false, comp(137, 78));
        };
        script4539(varclient_2231);
    } else if ((IF_GETHIDE(comp(276, 28)) == false)) {
        IF_SETHIDE(true, comp(276, 28));
        switch (script8550(int0)) {
            case 100: {
                int1 = 19;
                int2 = comp(857, 9);
                break;
            }
            case 1: {
                int1 = 20;
                int2 = comp(857, 10);
                break;
            }
            case 2: {
                int1 = 21;
                int2 = comp(857, 11);
                break;
            }
            case 3: {
                int1 = 22;
                int2 = comp(857, 12);
                break;
            }
            case 4:
            case 5: {
                int1 = 25;
                int2 = comp(857, 14);
                break;
            }
            case 102: {
                int1 = 46;
                int2 = comp(857, 15);
                break;
            }
            default: {
                int1 = 18;
                int2 = comp(857, 8);
                break;
            }
        };
        IF_TRIGGEROP(int2, -1, 1);
        script15881();
        script4539(int1);
    };
    varclient_6858 = false;
    script8522(int0, "");
    script8518();
    return;
}