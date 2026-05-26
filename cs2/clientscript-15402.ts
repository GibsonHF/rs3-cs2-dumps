//
function script15402(): void {
    var int0 = script15392(varbitplayer_48371);
    var string0 = dbrow_getfield(int0, 475168, 0);
    var string1 = enum_getvalue(0, 36, 16104 as cs2enum, varbitplayer_48373);
    var int1 = -1 as graphic;
    var int2 = comp(-1, 65535);
    var int3 = dbrow_getfield(int0, 475232, 0);
    var int4 = -1;
    var int5 = -1 as loc;
    var int6 = -1 as obj;
    var int7 = -1;
    while ((++int7 < int3)) {
        switch (int7) {
            case 0: {
                int4 = varbitplayer_48597;
                int2 = comp(736, 12);
                break;
            }
            case 1: {
                int4 = varbitplayer_48598;
                int2 = comp(736, 16);
                break;
            }
            case 2: {
                int4 = varbitplayer_48599;
                int2 = comp(736, 18);
                break;
            }
            case 3: {
                int4 = varbitplayer_48600;
                int2 = comp(736, 20);
                break;
            }
            case 4: {
                int4 = varbitplayer_48601;
                int2 = comp(736, 22);
                break;
            }
        };
        [int5, int6] = dbrow_getfield(int0, 475216, int4);
        switch (script15391(int5)) {
            case 0: {
                int1 = 13165 as graphic;
                break;
            }
            case 1: {
                int1 = 13166 as graphic;
                break;
            }
        };
        IF_SETGRAPHIC(int1, int2);
    };
    return;
}