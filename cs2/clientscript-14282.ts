//
function script14282(int0: struct): string {
    var int1 = struct_getparam(int0, 5998);
    if ((STAT_BASE(int1) < 25)) {
        return "Level 25 is required to exchange Commendations for experience.";
    };
    var int2 = 0;
    switch (int1) {
        case 0:
        case 2:
        case 1:
        case 3: {
            int2 = SCALE(POW(STAT_BASE(int1), 2), 400, 80);
            break;
        }
        case 4:
        case 6: {
            int2 = SCALE(POW(STAT_BASE(int1), 2), 400, 77);
            break;
        }
        case 5:
        case 23: {
            int2 = SCALE(POW(STAT_BASE(int1), 2), 500, 26);
            break;
        }
    };
    return `Each Commendation can be exchanged for <col=ffffff>${TOSTRING_LOCALISED(int2, 1)}</col> experience.<br> + 1% bonus when spending 10+ points at once.<br> + 10% bonus when spending 100+ points at once.`;
}