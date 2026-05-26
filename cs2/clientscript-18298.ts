//
function script18298(): void {
    var int0 = script10903();
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    [int1, int2, int3, int4] = script18289();
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    while ((++int8 <= 4)) {
        switch (int8) {
            case 1: {
                int5 = int1;
                int6 = 41615380;
                int7 = 41615391;
                break;
            }
            case 2: {
                int5 = int2;
                int6 = 41615383;
                int7 = 41615392;
                break;
            }
            case 3: {
                int5 = int3;
                int6 = 41615386;
                int7 = 41615393;
                break;
            }
            case 4: {
                int5 = int4;
                int6 = 41615389;
                int7 = 41615394;
                break;
            }
        };
        if ((int5 != -1)) {
            IF_SETOP(1, "Remove", int6);
            IF_SETOPCURSOR(1, 158, int6);
            if ((struct_getparam(int5, 2809) == 1)) {
                IF_SETOPBASE(`<col=F8D56B>${struct_getparam(int5, 2794)}`, int6);
            } else {
                IF_SETOPBASE(`<col=B8D1D1>${struct_getparam(int5, 2794)}`, int6);
            };
            IF_SETHIDE(0, int6);
            stack(struct_getparam(int5, 2802));
            stack(int7);
            IF_SETGRAPHIC();
        } else {
            IF_SETOP(1, "", int6);
            IF_SETOPBASE("", int6);
            IF_SETHIDE(1, int6);
            if ((int8 <= int0)) {
                stack(-1);
                stack(int7);
                IF_SETGRAPHIC();
            } else {
                stack(script11657(14045));
                stack(int7);
                IF_SETGRAPHIC();
            };
        };
    };
    return;
}