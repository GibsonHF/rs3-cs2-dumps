//
function script18166(): string {
    var string0 = "00 : 00 : 00";
    var int0 = (varclient_6727 + varclient_7339);
    var int1 = (varclient_6728 + varclient_7340);
    if ((int1 > 59)) {
        int0 = (int0 + 1);
        int1 = (int1 - 60);
    };
    if (((int0 + 1) > 0)) {
        return `<col=CDE1FF>${script5729((int0 / 60), MODULO(int0, 60), int1, true, true)}`;
    };
    return string0;
}