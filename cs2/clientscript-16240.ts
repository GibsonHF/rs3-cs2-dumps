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
            stack(33956);
            stack(31784984);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(33957);
            stack(31784984);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(33958);
            stack(31784984);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(33959);
            stack(31784984);
            IF_SETGRAPHIC();
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
        stack(script16202(varbitplayer_27092, 0));
        stack(int4);
        IF_SETGRAPHIC();
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