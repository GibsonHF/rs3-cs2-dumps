//
function script8133(int0: component): void {
    var int1 = 18612 as graphic;
    var int2 = 18613;
    var string0 = "Minimise";
    if ((CC_FIND(int0, 1) == 1)) {
        if ((script20655() == 1)) {
            string0 = "Maximise";
            int1 = 24004 as graphic;
            int2 = 24005;
        };
        CC_SETGRAPHIC(int1);
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int1));
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int2));
        CC_SETOP(1, string0);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETNOCLICKTHROUGH(1);
    };
    return;
}