//
function script6150(int0: int, int1: int, int2: coordgrid): [coordgrid, coordgrid, coordgrid, coordgrid] {
    while ((int0 < 0)) {
        var int0 = (int0 + 8);
    };
    while ((int0 > 7)) {
        int0 = (int0 - 8);
    };
    var int3 = -1 as coordgrid;
    var int4 = -1 as coordgrid;
    var int5 = -1 as coordgrid;
    var int6 = -1 as coordgrid;
    switch (int0) {
        case 0: {
            int3 = MOVECOORD(int2, 0, 0, 3);
            int5 = MOVECOORD(int2, 0, 0, -3);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, 1, 0, 0);
                int6 = MOVECOORD(int5, -1, 0, 0);
            } else {
                int4 = MOVECOORD(int3, -1, 0, 0);
                int6 = MOVECOORD(int5, 1, 0, 0);
            };
            break;
        }
        case 1: {
            int3 = MOVECOORD(int2, 2, 0, 2);
            int5 = MOVECOORD(int2, -2, 0, -2);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, 1, 0, -1);
                int6 = MOVECOORD(int5, -1, 0, 1);
            } else {
                int4 = MOVECOORD(int3, -1, 0, 1);
                int6 = MOVECOORD(int5, 1, 0, -1);
            };
            break;
        }
        case 2: {
            int3 = MOVECOORD(int2, 3, 0, 0);
            int5 = MOVECOORD(int2, -3, 0, 0);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, 0, 0, -1);
                int6 = MOVECOORD(int5, 0, 0, 1);
            } else {
                int4 = MOVECOORD(int3, 0, 0, 1);
                int6 = MOVECOORD(int5, 0, 0, -1);
            };
            break;
        }
        case 3: {
            int3 = MOVECOORD(int2, 2, 0, -2);
            int5 = MOVECOORD(int2, -2, 0, 2);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, -1, 0, -1);
                int6 = MOVECOORD(int5, 1, 0, 1);
            } else {
                int4 = MOVECOORD(int3, 1, 0, 1);
                int6 = MOVECOORD(int5, -1, 0, -1);
            };
            break;
        }
        case 4: {
            int3 = MOVECOORD(int2, 0, 0, -3);
            int5 = MOVECOORD(int2, 0, 0, 3);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, -1, 0, 0);
                int6 = MOVECOORD(int5, 1, 0, 0);
            } else {
                int4 = MOVECOORD(int3, 1, 0, 0);
                int6 = MOVECOORD(int5, -1, 0, 0);
            };
            break;
        }
        case 5: {
            int3 = MOVECOORD(int2, -2, 0, -2);
            int5 = MOVECOORD(int2, 2, 0, 2);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, -1, 0, 1);
                int6 = MOVECOORD(int5, 1, 0, -1);
            } else {
                int4 = MOVECOORD(int3, 1, 0, -1);
                int6 = MOVECOORD(int5, -1, 0, 1);
            };
            break;
        }
        case 6: {
            int3 = MOVECOORD(int2, -3, 0, 0);
            int5 = MOVECOORD(int2, 3, 0, 0);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, 0, 0, 1);
                int6 = MOVECOORD(int5, 0, 0, -1);
            } else {
                int4 = MOVECOORD(int3, 0, 0, -1);
                int6 = MOVECOORD(int5, 0, 0, 1);
            };
            break;
        }
        case 7: {
            int3 = MOVECOORD(int2, -2, 0, 2);
            int5 = MOVECOORD(int2, 2, 0, -2);
            if ((int1 > 0)) {
                int4 = MOVECOORD(int3, 1, 0, 1);
                int6 = MOVECOORD(int5, -1, 0, -1);
            } else {
                int4 = MOVECOORD(int3, -1, 0, -1);
                int6 = MOVECOORD(int5, 1, 0, 1);
            };
            break;
        }
    };
    return [int3, int4, int5, int6];
}