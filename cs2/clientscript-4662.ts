//
function script4662(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script4661();
    if (((int2 == 1) && (int3 >= 3))) {
        switch (int0) {
            case 1507330: {
                IF_SETCOLOUR(int1, int0);
                break;
            }
            case 1507331: {
                IF_SETCOLOUR(int1, int0);
                break;
            }
            case 1507332: {
                return;
            }
            case 1507333: {
                return;
            }
        };
    } else if (((int2 == 2) && (int3 >= 3))) {
        switch (int0) {
            case 1507332: {
                IF_SETCOLOUR(int1, int0);
                break;
            }
            case 1507333: {
                IF_SETCOLOUR(int1, int0);
                break;
            }
            case 1507330: {
                return;
            }
            case 1507331: {
                return;
            }
        };
    } else {
        switch (int0) {
            case 1507331: {
                IF_SETCOLOUR(int1, int0);
                break;
            }
            case 1507332: {
                IF_SETCOLOUR(int1, int0);
                break;
            }
            case 1507330: {
                return;
            }
            case 1507333: {
                return;
            }
        };
    };
    return;
}