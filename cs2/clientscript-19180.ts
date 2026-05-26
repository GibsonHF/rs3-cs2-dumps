//
function script19180(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    if ((int1 != -1)) {
        if ((int2 > 0)) {
            unk11010(int2, callback(script16429, int1, 84410411), 84410411);
            unk11009();
        } else {
            IF_SETMODELANIM(int1, 84410411);
        };
        IF_SETONTIMER(callback(script19181, 84410411, (int2 + SEQLENGTH(int1))), 84410411);
    };
    if ((int0 != -1)) {
        IF_SETMODELANIM(int0, 84410437);
        varbitplayer_56046 = 1;
        IF_SETONTIMER(callback(script19181, 84410437, SEQLENGTH(int0)), 84410437);
    };
    if (((int3 != -1) && (int4 != -1))) {
        if ((int2 > 0)) {
            unk11010(int2, callback(script19253, int4, 84410424), 84410424);
            unk11009();
            unk11010(int2, callback(script16429, int3, 84410424), 84410424);
            unk11009();
        } else {
            IF_SETMODEL(int4, 84410424);
            IF_SETMODELANIM(int3, 84410424);
        };
        IF_SETMODELANGLE(int5, int6, int7, int8, int9, int10, 84410424);
        IF_SETONTIMER(callback(script19181, 84410424, (int2 + SEQLENGTH(int3))), 84410424);
    };
    return;
}