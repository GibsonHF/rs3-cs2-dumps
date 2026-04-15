//
function script14419(int0: inv, int1: obj, int2: int, string0: string): [string, string, string, string, string, string, string, string, string, string] {
    var string1 = item_getparam(int1, 1264);
    var string2 = item_getparam(int1, 1265);
    var string3 = script13687(string0);
    if (((int0 == 93 as inv) && (STRING_LENGTH(string1) <= 0))) {
        if ((((OC_WEARPOS(int1) != -1) && (item_getparam(int1, 3845) == false)) && (enum_getvalue(33, 1, 15589 as cs2enum, int1) == false))) {
            string1 = OC_IOP(int1, 2);
        } else if (((((item_getparam(int1, 963) > 0) || (item_getparam(int1, 642) > 0)) || (item_getparam(int1, 964) > 0)) && ((OC_MEMBERS(int1) == 0) || (varclient_6689 == true)))) {
            if ((OC_CATEGORY(int1) == 69 as category)) {
                string1 = "Drink";
            } else {
                string1 = "Eat";
            };
        };
    } else if ((int0 == 964 as inv)) {
        string1 = "";
        string2 = "";
    };
    if ((int2 > 5)) {
        return [string3, `${string0}-1`, `${string0}-5`, `${string0}-10`, `${string0}-${inttostring(varplayer_111, 10)}`, `${string0}-X`, `${string0}-All`, string1, string2, "Examine"];
    };
    if ((int2 > 1)) {
        return [string3, `${string0}-1`, `${string0}-5`, "", `${string0}-${inttostring(varplayer_111, 10)}`, `${string0}-X`, `${string0}-All`, string1, string2, "Examine"];
    };
    return ["", `${string0}-1`, "", "", "", "", "", string1, string2, "Examine"];
}