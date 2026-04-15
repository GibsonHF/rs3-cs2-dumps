//[proc,inzone]
function script133(int0: coordgrid, int1: coordgrid, int2: coordgrid): unknown_int {
    if (((((((COORDX(int2) >= MIN(COORDX(int0), COORDX(int1))) && (COORDZ(int2) >= MIN(COORDZ(int0), COORDZ(int1)))) && (COORDY(int2) >= MIN(COORDY(int0), COORDY(int1)))) && (COORDX(int2) <= MAX(COORDX(int0), COORDX(int1)))) && (COORDZ(int2) <= MAX(COORDZ(int0), COORDZ(int1)))) && (COORDY(int2) <= MAX(COORDY(int0), COORDY(int1))))) {
        return 1;
    };
    return 0;
}