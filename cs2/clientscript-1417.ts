//
function script1417(int0: component): void {
    if ((varclient_1387 == 1)) {
        return;
    };
    var int1 = script1502(int0);
    var int2 = -1 as npc;
    var int3 = IF_GETX(int0);
    var int4 = IF_GETY(int0);
    if ((varbitplayer_5392 == int1)) {
        int2 = script486(varbitplayer_5396);
    } else if ((varbitplayer_5393 == int1)) {
        int2 = script486(varbitplayer_5397);
    } else if ((varbitplayer_5394 == int1)) {
        int2 = script486(varbitplayer_5402);
    } else if ((varbitplayer_5395 == int1)) {
        int2 = script486(varbitplayer_5403);
    } else if ((varbitplayer_5398 == int1)) {
        int2 = script486(varbitplayer_5406);
    } else if ((varbitplayer_5399 == int1)) {
        int2 = script486(varbitplayer_5407);
    } else if ((varbitplayer_5400 == int1)) {
        int2 = script486(varbitplayer_5408);
    } else if ((varbitplayer_5401 == int1)) {
        int2 = script486(varbitplayer_5409);
    } else if ((varbitplayer_5404 == int1)) {
        int2 = script486(varbitplayer_5410);
    } else if ((varbitplayer_5405 == int1)) {
        int2 = script486(varbitplayer_5411);
    };
    if ((int2 != -1 as npc)) {
        script8800(npc_getparam(int2, 1139), int0, -1);
    } else {
        script8808();
    };
    return;
}