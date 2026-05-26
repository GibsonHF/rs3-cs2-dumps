//
function script16416(int0: number): void {
    IF_SETHIDE(1, 62586903);
    IF_SETHIDE(1, 62586901);
    IF_SETHIDE(1, 62586907);
    IF_SETHIDE(1, 62586905);
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    while ((int2 <= 4)) {
        switch (int2) {
            case 0: {
                int3 = 62586895;
                break;
            }
            case 1: {
                int3 = 62586890;
                break;
            }
            case 2: {
                int3 = 62586898;
                break;
            }
            case 3: {
                int3 = 62586900;
                break;
            }
            case 4: {
                int3 = 62586881;
                break;
            }
        };
        int1 = IF_GETNEXTSUBID(int3);
        while ((int1 >= 0)) {
            if ((CC_FIND(int3, int1) == 1)) {
                CC_SETTRANS(int0);
            };
            int1 = (int1 - 1);
        };
        int2 = (int2 + 1);
    };
    IF_SETTRANS(int0, 62586899);
    IF_SETTRANS(int0, 62586893);
    IF_SETTRANS(int0, 62586894);
    IF_SETTRANS(int0, 62586909);
    IF_SETTRANS(int0, 62586910);
    IF_SETTRANS(int0, 62586883);
    IF_SETTRANS(int0, 62586884);
    if ((IF_FIND(62586897) == 1)) {
        CC_SETTRANS(int0);
    };
    return;
}