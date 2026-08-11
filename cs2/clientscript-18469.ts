//
function script18469(int0: number, int1: number): void {
    var int2 = -1;
    if ((CC_FIND(int0, 0) == 1)) {
        switch (int1) {
            case 2: {
                int2 = unk11031("idhash");
                if ((script18471(int2) == 1)) {
                    CC_DELETE();
                    script18470();
                } else {
                    CC_SETNOCLICKTHROUGH(true);
                    script8421(83951623, 83951626, 83951624, -1, "", 21259, -1, 1, -1, -1);
                    IF_SETHIDE(false, comp(1281, 11));  // crm_braze_login_popup:close_button_layer
                    IF_SETNOCLICKTHROUGH(1, comp(1281, 11));  // crm_braze_login_popup:close_button_layer
                    script18472(int2);
                };
                break;
            }
            case 3:
            case 4:
            case 5:
            case 6: {
                script18470();
                break;
            }
        };
    };
    return;
}