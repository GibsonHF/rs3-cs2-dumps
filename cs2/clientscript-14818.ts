//
function script14818(int0: component, int1: component): void {
    var int2 = script14589((varbitplayer_46468 + 1));
    var string0 = "-";
    if ((int2 != -1 as dbrow)) {
        string0 = dbrow_getfield(int2, 380944, 0);
        script14724("Achievement", int0, -1);
    } else {
        IF_SETOP(1, "", int0);
    };
    IF_SETTEXT(string0, int1);
    return;
}