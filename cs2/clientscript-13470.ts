//
function script13470(int0: number): void {
    if (((CC_FIND(comp(1875, 53), 1) == 1) && (CC_FIND[1](comp(1875, 53), 2) == 1))) {
        if ((int0 == varbitplayer_35973)) {
            CC_SETGRAPHIC(30871 as graphic);
            CC_SETTEXT[1]("<col=FFFFFF>This is your current active faction.</col><br>Completing tasks will increase your reputation with this faction.");
        } else {
            CC_SETGRAPHIC(30868 as graphic);
            CC_SETTEXT[1]("Set this faction as the active faction.<br>Completing tasks will increase your reputation with this faction.");
        };
    };
    var int1 = -1;
    switch (int0) {
        case 1: {
            int1 = 122880139;
            break;
        }
        case 2: {
            int1 = 122880142;
            break;
        }
        case 3: {
            int1 = 122880148;
            break;
        }
        case 4: {
            int1 = 122880145;
            break;
        }
    };
    script13489(int1, 0, int0, 0);
    return;
}