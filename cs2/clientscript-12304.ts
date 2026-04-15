//
function script12304(): string {
    var int0 = script12303();
    if ((int0 < 1)) {
        return "";
    };
    var string0 = script47((10000 / int0));
    var int1 = STRING_LENGTH(string0);
    return `${SUBSTRING(string0, 0, (int1 - 2))}.${SUBSTRING(string0, (int1 - 2), int1)}%`;
}