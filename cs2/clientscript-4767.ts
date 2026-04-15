//
function script4767(int0: int, int1: int): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = comp(-1, 65535);
    var int5 = -1 as obj;
    var int6 = -1;
    var int7 = -1;
    var string0 = "";
    [int5, int6, int7] = script16162(int1);
    string0 = script9674(int1);
    [int2, int3, int4] = script9708(int0);
    var int8 = script16163(int1);
    if (((int8 == 8) || (int8 == 10))) {
        stack(script8948(int7));
        stack(int3);
        IF_SETGRAPHIC();
    } else {
        stack(script8948(int7));
        stack(int3);
        IF_SETGRAPHIC();
    };
    IF_SETOBJECT(int5, int6, int4);
    IF_SETONMOUSEREPEAT(callback(script6966, -2147483645, -2147483643, int5, int6, int7, string0, int8, 0), int3);
    IF_SETONMOUSELEAVE(callback(script3914), int3);
    switch (int0) {
        case 1: {
            varclient_3984 = int8;
            break;
        }
        case 2: {
            varclient_3985 = int8;
            break;
        }
        case 3: {
            varclient_3986 = int8;
            break;
        }
        case 4: {
            varclient_3987 = int8;
            break;
        }
        case 5: {
            varclient_3988 = int8;
            break;
        }
        case 6: {
            varclient_3989 = int8;
            break;
        }
        case 7: {
            varclient_3990 = int8;
            break;
        }
        case 8: {
            varclient_3991 = int8;
            break;
        }
        case 9: {
            varclient_3992 = int8;
            break;
        }
        case 10: {
            varclient_3993 = int8;
            break;
        }
    };
    return;
}