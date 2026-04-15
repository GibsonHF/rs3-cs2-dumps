//
function script2576(int0: component): void {
    var string0 = "";
    switch (int0) {
        case 51183637:
        case 51183645: {
            string0 = "How much time is left for this round.";
            break;
        }
        case 51183638:
        case 51183646: {
            string0 = "How many orbs the green team have captured this round.";
            break;
        }
        case 51183647:
        case 51183639: {
            string0 = "How many orbs the yellow team have captured this round.";
            break;
        }
        case 51183641:
        case 51183649: {
            string0 = "How active you have been during this round.";
            break;
        }
        default: {
            return;
        }
    };
    script8800(string0, int0, -1);
    return;
}