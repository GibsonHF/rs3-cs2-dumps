//
function script18028(): void {
    if ((varplayer_11339 == -1 as dbrow)) {
        script12478("Load is happening pre-transmit.");
    };
    IF_SETONVARTRANSMIT(callback(script18009, 11341, 11342, 11343, 11344, 11345, 11340, 11347, 7), comp(1227, 33));
    script17927();
    script18027();
    var int0 = 4476;
    script17946(80412721, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7965);
    script17946(80412731, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7966);
    script13310(80412722, 80412731, 59, (4 * 1000));
    script18044(80412760, 80412761);
    CC_DELETEALL(80412701);
    script7852(80412701, 0, 0, 0, 0, 0, 0, 0, 1, 1, script17989(21), "");
    CC_SETOP(1, "Info");
    CC_SETONOP(callback(script18042, 80412719));
    script17954("Find out more about the Hero Pass.", 0);
    script18032(80412711, 1);
    script17946(80412706, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7931);
    IF_SETONVARTRANSMIT(callback(script18029, 11338, 11340, 2), 80412717);
    return;
}