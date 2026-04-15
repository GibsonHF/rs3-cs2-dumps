//
function script17229(): string {
    var string0 = "";
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if ((script18147() == 1)) {
        return "Claim Rewards";
    };
    [int0, int1, int2] = script3985(varbitplayer_16572, 1);
    if ((((int0 > 0) || (int1 > 0)) || (int2 > 0))) {
        if ((int0 == 0)) {
            int0 = -1;
            if ((int1 == 0)) {
                int1 = -1;
            };
        } else {
            int2 = -1;
        };
        string0 = script3382(int0, int1, int2, -1, 4, 0);
    } else {
        string0 = "Logout to Refresh";
    };
    return string0;
}