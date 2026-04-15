//
function script9396(int0: unknown_int): void {
    var int1 = comp(240, 8);
    var int2 = comp(240, 9);
    var int3 = comp(240, 10);
    var int4 = comp(240, 0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    IF_CLEARSCRIPTHOOKS(int4);
    switch (int0) {
        case 15728653: {
            IF_SETHIDE(true, comp(240, 1));
            break;
        }
        case 13697037: {
            IF_SETTEXT(dbrow_getfield(2194 as dbrow, 126976, 0), comp(240, 6));
            script2970(int1, int2, int2, 2194 as dbrow, 0, 0, IF_GETWIDTH(int1));
            IF_SETHIDE(false, comp(240, 1));
            break;
        }
        case 13697049: {
            script9399(int1, int2, int3);
            IF_SETONVARTRANSMIT(callback(script9398, int1, int2, int3, 1115, 1), int4);
            break;
        }
    };
    return;
}