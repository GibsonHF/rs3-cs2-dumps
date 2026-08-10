//
function script21037(): void {
    stack(int0);
    script15039();
    var int2 = [];
    if ((int2 == -1)) {
        unk11016(`Missing locality UI data for locality ID : ${inttostring(int0, 10)}`);
        return;
    };
    var int3 = dbrow_getfield(int2, 1568770, 0);
    var int4 = dbrow_getfield(int2, 1568771, 0);
    stack(int0);
    stack(int2);
    script21038();
    stack(21040);
    stack(int4);
    stack(int2);
    stack(int1);
    IF_SETONMOUSEOVER("iii", int1);
    stack(21044);
    stack(int0);
    stack(int3);
    stack(int2);
    stack(int1);
    IF_SETONMOUSELEAVE("iiii", int1);
    stack(int1);
    script21039();
    return;
}