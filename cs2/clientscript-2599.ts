//
function script2599(): void {
    var int0 = 0;
    if ((varplayer_8333 != -1 as obj)) {
        if ((varbitplayer_43239 > 0)) {
            int0 = script7108(script2542(varplayer_8333, varbitplayer_43239));
        } else {
            int0 = script7108(varplayer_8333);
        };
        if (((int0 > 0) && (varplayer_8336 > 0))) {
            script10085(2424866, 2424867, 40049, 1, int0, varplayer_8336);
            return;
        };
    };
    script10087(2424866, 2424867, 40049, 0, 1, 0, 1);
    return;
}