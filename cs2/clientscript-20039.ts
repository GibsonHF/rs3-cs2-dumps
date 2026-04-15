//
function script20039(int0: component): void {
    var string0 = "";
    var int1 = 0;
    switch (int0) {
        case 87818259: {
            string0 = "These bonuses <col=89CFF0>increase any multipliers on the trail to a minimum multiplier</col>, up to <col=FF00>x4</col>!";
            break;
        }
        case 87818251: {
            string0 = "These bonuses <col=89CFF0>increase any multipliers on the trail by up to +3!";
            break;
        }
        case 87818352: {
            string0 = "Rarities can be <col=89CFF0>increased by up to 2 rarity tiers per bonus</col>, or <col=89CFF0>set to a minimum guaranteed rarity, up to purple rarity</col>!";
            break;
        }
    };
    if ((script6431() == false)) {
        IF_SETONMOUSEREPEAT(callback(script8801, string0, -2147483645, -2147483643, 0, 1, 12), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
    } else {
        IF_SETOP(1, "Info", int0);
        IF_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0), int0);
    };
    return;
}