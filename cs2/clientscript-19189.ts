//
function script19189(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 32986: {
            string0 = "Your Hero, she's determined to prove herself against these monsters.";
            break;
        }
        case 50263: {
            string0 = "Your Adventurer. Need I say more?";
            break;
        }
        case 2951: {
            string0 = "Your magic wielding mage, magically trained in the arts of... magic.";
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        script426(string0, comp(1288, 70), -1, 0);
    };
    return;
}