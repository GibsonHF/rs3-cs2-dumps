//
function script727(int0: component): void {
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
        if ((IF_GETGRAPHIC(int0) == 30979 as graphic)) {
            if ((MAP_LANG() == 3)) {
                stack(30983);
                stack(int0);
                IF_SETGRAPHIC();
                IF_SETSIZE(256, 256, 0, 0, int0);
            } else {
                stack(30978);
                stack(int0);
                IF_SETGRAPHIC();
                IF_SETSIZE(256, 256, 0, 0, int0);
            };
            IF_SETTRANS(0, int0);
        } else if ((IF_GETGRAPHIC(int0) == 30978 as graphic)) {
            if ((MAP_LANG() == 3)) {
                stack(30979);
                stack(int0);
                IF_SETGRAPHIC();
            } else {
                stack(30977);
                stack(int0);
                IF_SETGRAPHIC();
            };
            IF_SETTRANS(0, int0);
            IF_SETSIZE(256, 256, 0, 0, int0);
        } else if ((IF_GETGRAPHIC(int0) == 30977 as graphic)) {
            if ((MAP_LANG() == 3)) {
                stack(30978);
                stack(int0);
                IF_SETGRAPHIC();
                IF_SETSIZE(256, 256, 0, 0, int0);
            } else {
                switch (MAP_LANG()) {
                    case 0: {
                        stack(30980);
                        stack(int0);
                        IF_SETGRAPHIC();
                        break;
                    }
                    case 1: {
                        stack(30981);
                        stack(int0);
                        IF_SETGRAPHIC();
                        break;
                    }
                    case 2: {
                        stack(30982);
                        stack(int0);
                        IF_SETGRAPHIC();
                        break;
                    }
                };
                IF_SETSIZE(256, 256, 0, 0, int0);
            };
            IF_SETTRANS(0, int0);
        } else {
            IF_SETHIDE(true, int0);
            script13475(comp(1877, 6), 15);
        };
    } else {
        IF_SETSIZE(int3, int4, 0, 0, int0);
    };
    return;
}