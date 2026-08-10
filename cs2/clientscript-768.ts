//
function script768(int0: number): string {
    if ((int0 == -1)) {
        return "";
    };
    var string0 = "";
    switch (int0) {
        case 19251:
        case 46276:
        case 19254:
        case 46275:
        case 14707:
        case 48324: {
            script20987();
            if (BRANCH_EQUALS(1)) {
                return "Locked by the 'Higher Power' relic.";
            };
            break;
        }
    };
    if (((((struct_getparam(int0, 2806) == 29) && (struct_getparam(int0, 5542) != 11)) && (STRING_LENGTH(struct_getparam(int0, 4650)) == 0)) && (varbitplayer_53546 < 30))) {
        string0 = "Rune Mythos";
        return `Unlocked by completing the '${string0}' quest.`;
    };
    return struct_getparam(int0, 4650);
}