//
function script19180(int0: seq, int1: seq, int2: int, int3: seq, int4: model, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int): void {
    if ((int1 != -1 as seq)) {
        if ((int2 > 0)) {
            unk11010(int2, callback(script16429, int1, 84410411), 84410411);
            unk11009();
        } else {
            IF_SETMODELANIM(int1, comp(1288, 43));
        };
        IF_SETONTIMER(callback(script19181, 84410411, (int2 + SEQLENGTH(int1))), comp(1288, 43));
    };
    if ((int0 != -1 as seq)) {
        IF_SETMODELANIM(int0, comp(1288, 69));
        varbitplayer_56046 = 1;
        IF_SETONTIMER(callback(script19181, 84410437, SEQLENGTH(int0)), comp(1288, 69));
    };
    if (((int3 != -1 as seq) && (int4 != -1 as model))) {
        if ((int2 > 0)) {
            unk11010(int2, callback(script19253, int4, 84410424), 84410424);
            unk11009();
            unk11010(int2, callback(script16429, int3, 84410424), 84410424);
            unk11009();
        } else {
            IF_SETMODEL(int4, comp(1288, 56));
            IF_SETMODELANIM(int3, comp(1288, 56));
        };
        IF_SETMODELANGLE(int5, int6, int7, int8, int9, int10, comp(1288, 56));
        IF_SETONTIMER(callback(script19181, 84410424, (int2 + SEQLENGTH(int3))), comp(1288, 56));
    };
    return;
}