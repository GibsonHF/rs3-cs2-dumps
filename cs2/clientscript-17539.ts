//
function script17539(int0: dbrow): [unknown_int, string] {
    var int1 = 1;
    var string0 = "You don't meet the additional requirements for this ritual.";
    switch (int0) {
        case 7656: {
            if ((varbitplayer_53546 < 15)) {
                int1 = 0;
                string0 = "You need to have started 'Rune Mythos' for this ritual.";
            };
            break;
        }
    };
    return [int1, string0];
}