//
function script4130(int0: component): void {
    var int1 = 0;
    switch (varclient_1452) {
        case 1: {
            CC_CREATE(int0, 3, int1);
            CC_SETFILL(1);
            CC_SETCOLOUR(15658666);
            CC_SETSIZE(30, 0, 0, 1);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETHIDE(true);
            int1 = (int1 + 1);
            CC_CREATE(int0, 5, int1);
            CC_SETGRAPHIC(3181 as graphic);
            CC_SETSIZE(30, 0, 0, 1);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETHIDE(true);
            int1 = (int1 + 1);
            CC_CREATE(int0, 3, int1);
            CC_SETFILL(1);
            CC_SETCOLOUR(15658666);
            CC_SETSIZE(30, 0, 0, 1);
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETHIDE(true);
            int1 = (int1 + 1);
            CC_CREATE(int0, 5, int1);
            CC_SETGRAPHIC(3182 as graphic);
            CC_SETSIZE(30, 0, 0, 1);
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETHIDE(true);
            int1 = (int1 + 1);
            script665(0, 50, int0, int1);
            break;
        }
        case 2:         if ((int1 < 4)) {
            if ((CC_FIND(int0, int1) == 1)) {
                CC_SETHIDE(false);
            };
            int1 = (int1 + 1);
        };

        case 3: {
            script665(0, 50, int0, 4);
            break;
        }
        case 4:         if ((int1 < 4)) {
            if ((CC_FIND(int0, int1) == 1)) {
                CC_SETHIDE(true);
            };
            int1 = (int1 + 1);
        };

        case 5: {
            CC_DELETEALL(int0);
            break;
        }
    };
    return;
}