//
function script3109(int0: int, int1: unknown_int, int2: unknown_int): string {
    var string0 = "Fairy Ring";
    var string1 = "Code: ? ? ?";
    if ((script20175() == 0)) {
        string1 = "Gain access to the Fairy Ring network by completing the quest:<br>'Fairy Tale II - Cure a Queen'";
    } else if ((int0 == 500)) {
        string1 = "";
    } else if (((int0 == 330) && (varbitplayer_52991 < 2))) {
        string1 = `Requires tier ${inttostring(2, 10)} Grove Cabin.`;
    } else if (((script3104(int0) == 1) && (script3101(int0) == 1))) {
        string1 = `Code: ${enum_getvalue(0, 36, 15117 as cs2enum, int0)}`;
    };
    if ((STRING_LENGTH(string1) > 0)) {
        return `${string0}<br>${string1}`;
    };
    return string0;
}