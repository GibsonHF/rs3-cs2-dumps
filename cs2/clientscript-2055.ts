//[proc,mescoord]
function script2055(int0: coordgrid): string {
    return `${inttostring(COORDY(int0), 10)}_${inttostring((COORDX(int0) / 64), 10)}_${inttostring((COORDZ(int0) / 64), 10)}_${inttostring(MODULO(COORDX(int0), 64), 10)}_${inttostring(MODULO(COORDZ(int0), 64), 10)}`;
}