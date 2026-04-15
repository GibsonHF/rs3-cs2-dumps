//
function script1814(string0: string): string {
    var int0 = STRING_LENGTH(string0);
    if ((int0 <= 0)) {
        return string0;
    };
    var string1 = strconcat(" ", string0);
    string1 = script2332(string1, " a", " A");
    string1 = script2332(string1, " b", " B");
    string1 = script2332(string1, " c", " C");
    string1 = script2332(string1, " d", " D");
    string1 = script2332(string1, " e", " E");
    string1 = script2332(string1, " f", " F");
    string1 = script2332(string1, " g", " G");
    string1 = script2332(string1, " h", " H");
    string1 = script2332(string1, " i", " I");
    string1 = script2332(string1, " j", " J");
    string1 = script2332(string1, " k", " K");
    string1 = script2332(string1, " l", " L");
    string1 = script2332(string1, " m", " M");
    string1 = script2332(string1, " n", " N");
    string1 = script2332(string1, " o", " O");
    string1 = script2332(string1, " p", " P");
    string1 = script2332(string1, " q", " Q");
    string1 = script2332(string1, " r", " R");
    string1 = script2332(string1, " s", " S");
    string1 = script2332(string1, " t", " T");
    string1 = script2332(string1, " u", " U");
    string1 = script2332(string1, " v", " V");
    string1 = script2332(string1, " w", " W");
    string1 = script2332(string1, " x", " X");
    string1 = script2332(string1, " y", " Y");
    string1 = script2332(string1, " z", " Z");
    return SUBSTRING(string1, 1, (int0 + 1));
}