//
function script16240(): void {
    var int0 = 0;
    var int1 = -1;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    CC_DELETEALL(31785004);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33956, 31784984);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33957, 31784984);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33958, 31784984);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33959, 31784984);
            break;
        }
    };
    script16204();
    script16205();
    while ((++int0 < 7)) {
        [int1, int2] = script11184(int0);
        int3 = script11185(int0);
        int4 = script11187(int0);
        int5 = script11609(int0);
        IF_SETGRAPHIC(script16202(varbitplayer_27092, 0), int4);
        if ((int1 == -1)) {
            IF_SETHIDE(1, int3);
        } else {
            IF_SETOPBASE(OC_NAME(int1), int4);
            IF_SETTEXT(OC_NAME(int1), int5);
            IF_SETOBJECT(int1, int2, script11186(int0));
            IF_SETHIDE(0, int3);
        };
    };
    return;
}