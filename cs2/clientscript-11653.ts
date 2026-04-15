//
function script11653(): void {
    var string0 = "";
    if ((varbitplayer_33485 == 1)) {
        string0 = "Happy Hour - Everything!";
    } else {
        switch (varbitplayer_28460) {
            case 0: {
                string0 = "Coconut Shy";
                break;
            }
            case 1: {
                string0 = "Sandcastle Building";
                break;
            }
            case 2: {
                string0 = "Barbeques";
                break;
            }
            case 3: {
                string0 = "Rock Pools";
                break;
            }
            case 4: {
                string0 = "Palm Tree Farming";
                break;
            }
            case 5: {
                string0 = "Body Building";
                break;
            }
            case 6: {
                string0 = "Hook a Duck";
                break;
            }
            case 7: {
                string0 = "Dungeoneering Hole";
                break;
            }
        };
    };
    IF_SETTEXT(`Spotlight Plot:<br>${string0}`, comp(1642, 5));
    return;
}