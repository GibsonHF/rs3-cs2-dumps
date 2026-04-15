//
function script19745(int0: int): void {
    stack(1101824);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        return;
    };
    var int2 = (dbrow_getfield(int1, 1101968, 0) + 5);
    var int3 = (dbrow_getfield(int1, 1101984, 0) + 20);
    script2997(comp(1278, 30), int0, int2, int3, 0, 0, 100, 100, 0, 0);
    CC_SETMODEL(33372 as model);
    CC_SETMODELANIM(328 as seq);
    CC_SETMODELANGLE(0, 0, 513, 0, 0, 1000);
    stack(50);
    stack(19746);
    stack(-2147483645);
    stack(-2147483643);
    stack("ii");
    unk11038();
    unk11009();
    return;
}