//
function script12686(int0: int): string {
    var int1 = script3921(int0);
    switch (int1) {
        case -1: {
            return "";
        }
        case 0: {
            return "Cost: Free!";
        }
    };
    return `Cost: ${TOSTRING_LOCALISED(int1, 1)} RuneCoins`;
}