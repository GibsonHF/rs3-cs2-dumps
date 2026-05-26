//
function script8517(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    if ((script6431() == 0)) {
        if ((varbitplayer_37056 == 0)) {
            IF_SETHIDE(0, 8978510);
        };
        script4539(varclient_2231);
    } else if ((IF_GETHIDE(18087964) == 0)) {
        IF_SETHIDE(1, 18087964);
        switch (script8550(int0)) {
            case 100: {
                int1 = 19;
                int2 = 56164361;
                break;
            }
            case 1: {
                int1 = 20;
                int2 = 56164362;
                break;
            }
            case 2: {
                int1 = 21;
                int2 = 56164363;
                break;
            }
            case 3: {
                int1 = 22;
                int2 = 56164364;
                break;
            }
            case 4:
            case 5: {
                int1 = 25;
                int2 = 56164366;
                break;
            }
            case 102: {
                int1 = 46;
                int2 = 56164367;
                break;
            }
            default: {
                int1 = 18;
                int2 = 56164360;
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