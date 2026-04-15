//
function script17722(int0: unknown_int, int1: unknown_int): string {
    var string0 = "damage";
    var string1 = "";
    switch (int0) {
        case 1:
        case 2:
        case 3:
        case 4: {
            string0 = "Magic damage";
            string1 = "<col=3366FF>";
            break;
        }
        case 6:
        case 7:
        case 5: {
            string0 = "Melee damage";
            string1 = "<col=FFA11A>";
            break;
        }
        case 8:
        case 9:
        case 10: {
            string0 = "Ranged damage";
            string1 = "<col=25AD37>";
            break;
        }
        case 37: {
            string0 = "Necromancy damage";
            string1 = "<col=A788DD>";
            break;
        }
        case 38: {
            string0 = "Necromancy Spirit damage";
            string1 = "<col=40BFC6>";
            break;
        }
        case 15: {
            string0 = "Poison damage";
            string1 = "<col=979C11>";
            break;
        }
    };
    if (((int1 == 1) && (STRING_LENGTH(string1) > 0))) {
        string0 = `${string1}${string0}</col>`;
    };
    return string0;
}