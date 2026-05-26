//[clientscript,boardgames_options_onload]
function script1405(): void {
    var string0 = "";
    switch (varbitplayer_3954) {
        case 1: {
            string0 = "Options: Draughts";
            break;
        }
        case 2: {
            string0 = "Options: Runelink";
            break;
        }
        case 3: {
            string0 = "Options: Runesquares";
            break;
        }
        case 4: {
            string0 = "Options: Runeversi";
            break;
        }
    };
    script9554(49545260, 49545264, 49545261, string0, 21218);
    script1407();
    script1408();
    script1409();
    return;
}