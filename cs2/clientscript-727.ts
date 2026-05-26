//
function script727(int0: number): void {
    var int1 = IF_GETWIDTH(int0);
    var int2 = IF_GETHEIGHT(int0);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = IF_GETTRANS(int0);
    if ((int1 > 256)) {
        int3 = MAX(72, (int1 - 12));
    } else if ((int1 > 25)) {
        int3 = MAX(72, (int1 - 4));
    } else {
        int5 = 1;
        int3 = 72;
    };
    if ((int2 > 72)) {
        int4 = MAX(72, (int2 - 4));
    } else {
        int6 = 1;
        int4 = 72;
    };
    if ((int7 < 255)) {
        IF_SETTRANS(MIN(255, (int7 + 3)), int0);
    };
    if ((((int6 == 1) || (int5 == 1)) || (int7 == 255))) {
        if ((IF_GETGRAPHIC(int0) == 30979)) {
            if ((MAP_LANG() == 3)) {
                IF_SETGRAPHIC(30983, int0);
                IF_SETSIZE(256, 256, 0, 0, int0);
            } else {
                IF_SETGRAPHIC(30978, int0);
                IF_SETSIZE(256, 256, 0, 0, int0);
            };
            IF_SETTRANS(0, int0);
        } else if ((IF_GETGRAPHIC(int0) == 30978)) {
            if ((MAP_LANG() == 3)) {
                IF_SETGRAPHIC(30979, int0);
            } else {
                IF_SETGRAPHIC(30977, int0);
            };
            IF_SETTRANS(0, int0);
            IF_SETSIZE(256, 256, 0, 0, int0);
        } else if ((IF_GETGRAPHIC(int0) == 30977)) {
            if ((MAP_LANG() == 3)) {
                IF_SETGRAPHIC(30978, int0);
                IF_SETSIZE(256, 256, 0, 0, int0);
            } else {
                switch (MAP_LANG()) {
                    case 0: {
                        IF_SETGRAPHIC(30980, int0);
                        break;
                    }
                    case 1: {
                        IF_SETGRAPHIC(30981, int0);
                        break;
                    }
                    case 2: {
                        IF_SETGRAPHIC(30982, int0);
                        break;
                    }
                };
                IF_SETSIZE(256, 256, 0, 0, int0);
            };
            IF_SETTRANS(0, int0);
        } else {
            IF_SETHIDE(1, int0);
            script13475(123011078, 15);
        };
    } else {
        IF_SETSIZE(int3, int4, 0, 0, int0);
    };
    return;
}