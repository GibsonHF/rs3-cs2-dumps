//
function script768(int0: struct): string {
    if ((int0 == -1 as struct)) {
        return "";
    };
    var string0 = "";
    if (((((struct_getparam(int0, 2806) == 29) && (struct_getparam(int0, 5542) != 11)) && (STRING_LENGTH(struct_getparam(int0, 4650)) == 0)) && (varbitplayer_53546 < 30))) {
        string0 = "Rune Mythos";
        return `Unlocked by completing the '${string0}' quest.`;
    };
    return struct_getparam(int0, 4650);
}