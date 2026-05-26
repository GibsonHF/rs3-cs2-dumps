//
function script7501(int0: number): void {
    var int1 = IF_GETWIDTH(int0);
    var int2 = IF_GETHEIGHT(int0);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = IF_GETTRANS(int0);
    if ((int1 > 200)) {
        int3 = MAX(33, (int1 - 12));
    } else if ((int1 > 33)) {
        int3 = MAX(33, (int1 - 3));
    } else {
        int5 = 1;
        int3 = 33;
    };
    if ((int2 > 48)) {
        int4 = MAX(48, (int2 - 3));
    } else {
        int6 = 1;
        int4 = 48;
    };
    if ((int7 < 255)) {
        IF_SETTRANS(MIN(255, (int7 + 3)), int0);
    };
    if ((((int6 == 1) || (int5 == 1)) || (int7 == 255))) {
        if ((IF_GETGRAPHIC(int0) == 27177)) {
            if ((MAP_LANG() == 3)) {
                IF_SETGRAPHIC(16345, int0);
                IF_SETSIZE(765, 200, 0, 0, int0);
            } else {
                IF_SETGRAPHIC(27176, int0);
                IF_SETSIZE(200, 200, 0, 0, int0);
            };
            IF_SETTRANS(0, int0);
        } else if ((IF_GETGRAPHIC(int0) == 27176)) {
            if ((MAP_LANG() == 3)) {
                IF_SETGRAPHIC(27177, int0);
            } else {
                IF_SETGRAPHIC(27175, int0);
            };
            IF_SETTRANS(0, int0);
            IF_SETSIZE(200, 200, 0, 0, int0);
        } else if ((IF_GETGRAPHIC(int0) == 27175)) {
            if ((MAP_LANG() == 3)) {
                IF_SETGRAPHIC(27176, int0);
                IF_SETSIZE(200, 200, 0, 0, int0);
            } else {
                switch (MAP_LANG()) {
                    case 0: {
                        IF_SETGRAPHIC(16342, int0);
                        break;
                    }
                    case 1: {
                        IF_SETGRAPHIC(16343, int0);
                        break;
                    }
                    case 2: {
                        IF_SETGRAPHIC(16344, int0);
                        break;
                    }
                };
                IF_SETSIZE(765, 200, 0, 0, int0);
            };
            IF_SETTRANS(0, int0);
        } else {
            IF_SETHIDE(1, int0);
            script7518(91160584, 15);
        };
    } else {
        IF_SETSIZE(int3, int4, 0, 0, int0);
    };
    return;
}