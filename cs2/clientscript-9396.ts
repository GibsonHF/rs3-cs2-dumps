//
function script9396(int0: number): void {
    var int1 = 15728648;
    var int2 = 15728649;
    var int3 = 15728650;
    var int4 = 15728640;
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    IF_CLEARSCRIPTHOOKS(int4);
    switch (int0) {
        case 15728653: {
            IF_SETHIDE(1, 15728641);
            break;
        }
        case 13697037: {
            IF_SETTEXT(dbrow_getfield(2194 as dbrow, 126976, 0), 15728646);
            script2970(int1, int2, int2, 2194, 0, 0, IF_GETWIDTH(int1));
            IF_SETHIDE(0, 15728641);
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