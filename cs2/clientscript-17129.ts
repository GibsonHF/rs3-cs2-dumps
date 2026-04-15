//
function script17129(int0: int): [int, string] {
    var int1 = 16776960;
    var string0 = "";
    if ((int0 == 0)) {
        string0 = "Offline";
        int1 = 16711680;
    } else {
        if (((int0 >= 1149) && (int0 < 1200))) {
            string0 = "Beta lobby";
        } else if ((int0 >= 1100)) {
            string0 = `Lobby ${inttostring((int0 - 1099), 10)}`;
        } else if (((int0 >= 200) && (int0 < 210))) {
            string0 = `Beta ${inttostring(int0, 10)}`;
        } else {
            string0 = `World ${inttostring(int0, 10)}`;
        };
        int1 = 16776960;
    };
    return [int1, string0];
}