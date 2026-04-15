//
function script6893(int0: int, int1: obj, string0: string): string {
    var string1 = "";
    if ((OC_STACKABLE(int1) == 0)) {
        string1 = `<col=ff9040>${OC_NAME(int1)} <col=ffffff>x <col=fff000>${inttostring(int0, 10)}`;
    } else if ((int0 < 100000)) {
        string1 = `<col=ff9040>${OC_NAME(int1)}<col=ffffff> x <col=ffff00>${TOSTRING_LOCALISED(int0, 1)}`;
    } else if ((int0 < 10000000)) {
        string1 = `<col=ff9040>${OC_NAME(int1)}<col=ffffff> x <col=ffffff>${TOSTRING_LOCALISED((int0 / 1000), 1)}K (${TOSTRING_LOCALISED(int0, 1)})`;
    } else {
        string1 = `<col=ff9040>${OC_NAME(int1)}<col=ffffff> x <col=00ff80>${TOSTRING_LOCALISED((int0 / 1000000), 1)}M (${TOSTRING_LOCALISED(int0, 1)})`;
    };
    if ((STRING_LENGTH(string0) > 0)) {
        return strconcat(strconcat(string0, "<br>"), string1);
    };
    return string1;
}