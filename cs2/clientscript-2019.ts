//
function script2019(int0: int): [string, string, string, string, string] {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    switch (int0) {
        case 1: {
            [string0, string1, string2, string3] = script20520(6);
            break;
        }
        case 2: {
            [string0, string1, string2, string3] = script20520(7);
            break;
        }
        case 11: {
            [string0, string1, string2, string3] = script20520(12);
            break;
        }
        case 12: {
            [string0, string1, string2, string3] = script20520(13);
            break;
        }
        case 3: {
            string0 = "Discard Changes";
            string1 = "Are you sure you want to discard the changes you have made?<br><br>Any unsaved will be reverted.";
            string2 = "Discard";
            string3 = "Cancel";
            break;
        }
        case 4: {
            string0 = "Discard Changes";
            string1 = "Are you sure you wish to discard your changes and exit?<br><br>Any unsaved will be reverted.";
            string2 = "Discard";
            string3 = "Cancel";
            break;
        }
        case 6: {
            string0 = "Confirm Logout";
            string1 = "Please confirm where to logout to.<br>Click the cross to continue playing.";
            string2 = "Logout";
            string3 = "Exit to Lobby";
            break;
        }
        case 7: {
            string0 = "Reset Keybinds?";
            string1 = "Doing this will reset all keybinds to their default values.";
            string2 = "Reset";
            string3 = "Cancel";
            break;
        }
        case 8: {
            string0 = "Delete Friend?";
            string1 = `Are you sure you want to delete ${varclient_3936}?`;
            string2 = "Accept";
            string3 = "Cancel";
            break;
        }
        case 9: {
            if ((varbitplayer_27168 == 0)) {
                string0 = "Switch to Classic Mode";
                string1 = "Switching to Classic Mode will change your combat mode to replicate the pre-EoC game. Do you want to switch?";
                string2 = "Switch";
                string3 = "Cancel";
            } else {
                string0 = "Switch to EoC";
                string1 = "Switching to EoC will change your combat mode to the more modern version. Do you want to switch?";
                string2 = "Accept";
                string3 = "Cancel";
            };
            string4 = "Don't show this again";
            break;
        }
        case 10: {
            if ((varbitplayer_27169 == 0)) {
                string0 = "Switch to Classic";
                string1 = "Switching to Classic will change your interface system to a traditional, fixed layout. Do you want to switch?";
                string2 = "Switch";
                string3 = "Cancel";
            } else {
                string0 = "Switch to Modern";
                string1 = "Switching to Modern will change your interface system to an advanced interface mode where all interface components can be moved and resized. Do you want to switch?";
                string2 = "Accept";
                string3 = "Cancel";
            };
            string4 = "Don't show this again";
            break;
        }
        case 13: {
            string0 = "Reset to Default";
            string1 = "Are you sure you wish to reset all accessibility settings to their default values?";
            string2 = "Reset";
            string3 = "Cancel";
            break;
        }
    };
    return [string0, string1, string2, string3, string4];
}