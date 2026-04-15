//
function script18469(int0: component, int1: unknown_int): void {
    var int2 = -1;
    if ((CC_FIND(int0, 0) == 1)) {
        switch (int1) {
            case 2: {
                int2 = unk11031("idhash");
                if ((script18471(int2) == 1)) {
                    CC_DELETE();
                    script18470();
                } else {
                    CC_SETNOCLICKTHROUGH(true);
                    script8421(comp(1281, 7), comp(1281, 10), comp(1281, 8), comp(-1, 65535), "", 21259 as struct, -1, 1, -1 as graphic, -1 as struct);
                    IF_SETHIDE(false, comp(1281, 11));
                    IF_SETNOCLICKTHROUGH(1, comp(1281, 11));
                    script18472(int2);
                };
                break;
            }
            case 3:
            case 4:
            case 5:
            case 6: {
                script18470();
                break;
            }
        };
    };
    return;
}