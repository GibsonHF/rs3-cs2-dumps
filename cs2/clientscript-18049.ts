//
function script18049(): void {
    if ((script17852() == 0)) {
        script12478("Opening Missions on a pass which isn't the current.");
        return;
    };
    script17946(80347187, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7965);
    script17946(80347189, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7966);
    script13310(80347188, 80347189, 60, (4 * 1000));
    script18044(80347195, 80347196);
    CC_DELETEALL(comp(1226, 12));
    script7852(80347148, 0, 0, 0, 0, 0, 0, 0, 1, 1, script17989(21), "");
    CC_SETOP(1, "Info");
    CC_SETONOP(callback(script18042, 80347153));
    script17954("Find out more about the Hero Pass.", 0);
    script18054();
    IF_SETONVARTRANSMIT(callback(script18051, 11362, 11363, 11364, 11365, 11366, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11374, 11375, 11376, 11377, 11378, 11379, 11380, 11381, 11382, 11383, 11384, 11385, 11386, 11387, 11388, 11389, 11390, 11391, 30), 80347143);
    return;
}