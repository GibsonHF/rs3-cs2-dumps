//
function script5959(): void {
    var string0 = "";
    switch (varbitplayer_6452) {
        case 1: {
            string0 = "15% Bonus Citadel Skilling XP";
            break;
        }
        case 2: {
            string0 = "30% Bonus Citadel Skilling XP";
            break;
        }
        case 3: {
            string0 = "45% Bonus Citadel Skilling XP";
            break;
        }
    };
    if ((strcmp(string0, "") != 0)) {
        script4408(comp(1257, 22));
        if ((script6431() == false)) {
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82378774);
        } else {
            IF_SETONCLICK(callback(script8799, string0, -2147483645, -2147483643), 82378774);
        };
    };
    return;
}