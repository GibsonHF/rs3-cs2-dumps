//
function script1331(int0: component): void {
    var string0 = "World Map";
    var int1 = -1 as graphic;
    var int2 = -1;
    [int1, int2] = script789(varbitplayer_11297);
    if ((IF_FIND(int0) == 1)) {
        CC_CLEAROPS();
        if ((varbitplayer_11297 == 2)) {
            CC_SETOP(1, "Citadel Information");
            string0 = "Citadel Information";
            CC_SETOP(4, "Skybox and Filter Settings");
            CC_SETOP(5, "Toggle High Contrast Mode");
        } else if ((varbitplayer_11297 == 1)) {
            if ((varbitplayer_5548 > 0)) {
                CC_SETOP(1, "Factory Layout");
                string0 = "Factory Layout";
                CC_SETOP(4, "Skybox and Filter Settings");
            } else if ((varbitplayer_17945 == 1)) {
                CC_SETOP(1, "Sinkhole Map");
                string0 = "Sinkhole Map";
            } else {
                CC_SETOP(1, "Daemonheim Map");
                string0 = "Daemonheim Map";
                CC_SETOP(4, "Skybox and Filter Settings");
                CC_SETOP(5, "Toggle High Contrast Mode");
            };
        } else {
            CC_SETOP(1, "World Map");
            if (((varplayer_2807 != -1 as coordgrid) && (varplayer_2807 != pos(0,0,0,0,0)))) {
                CC_SETOP(2, "Clear Marker");
            };
            CC_SETOP(3, "World Select");
            CC_SETOP(4, "Skybox and Filter Settings");
            CC_SETOP(5, "Toggle High Contrast Mode");
        };
        CC_SETGRAPHIC(int1);
        CC_SETONMOUSEOVER(callback(script44, -2147483645, int2));
        CC_SETONMOUSELEAVE(callback(script44, -2147483645, int1));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
    };
    return;
}