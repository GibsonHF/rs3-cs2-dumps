//
function script2867(int0: coordgrid, int1: coordgrid): unknown_int {
    if ((int0 == int1)) {
        return 0;
    };
    if (((COORDX(int0) - COORDX(int1)) > (2 * ((COORDZ(int0) - COORDZ(int1)) * -1)))) {
        if (((COORDX(int0) - COORDX(int1)) > (2 * (COORDZ(int0) - COORDZ(int1))))) {
            return 7;
        };
        if (((2 * (COORDX(int0) - COORDX(int1))) > (COORDZ(int0) - COORDZ(int1)))) {
            return 6;
        };
        if (((2 * (COORDX(int0) - COORDX(int1))) > ((COORDZ(int0) - COORDZ(int1)) * -1))) {
            return 5;
        };
        return 4;
    };
    if (((COORDX(int0) - COORDX(int1)) > (2 * (COORDZ(int0) - COORDZ(int1))))) {
        if (((2 * (COORDX(int0) - COORDX(int1))) > (COORDZ(int0) - COORDZ(int1)))) {
            if (((2 * (COORDX(int0) - COORDX(int1))) > ((COORDZ(int0) - COORDZ(int1)) * -1))) {
                return 8;
            };
            return 1;
        };
        return 2;
    };
    return 3;
}