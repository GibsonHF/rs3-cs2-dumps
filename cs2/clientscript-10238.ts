//
function script10238(int0: struct, string0: string): string {
    var string1 = "";
    switch (int0) {
        case 14688: {
            switch (varbitplayer_45353) {
                case 1: {
                    string1 = `<br><br>No Fear (tier 1) - increases the critical hit chance of Meteor Strike by <col=ffffff>${inttostring((200 / 10), 10)}%</col>.`;
                    break;
                }
                case 2: {
                    string1 = `<br><br>No Fear (tier 2) - increases the critical hit chance of Meteor Strike by <col=ffffff>${inttostring((400 / 10), 10)}%</col>.`;
                    break;
                }
            };
            break;
        }
        case 14719: {
            switch (varbitplayer_45351) {
                case 1: {
                    string1 = "<br><br>Armoured Hide (tier 1) - increases the duration of Barricade by <col=ffffff>1.8</col> seconds.";
                    break;
                }
                case 2: {
                    string1 = "<br><br>Armoured Hide (tier 2) - increases the duration of Barricade by <col=ffffff>3.6</col> seconds.";
                    break;
                }
            };
            break;
        }
        case 14690: {
            switch (varbitplayer_45345) {
                case 1: {
                    string1 = `<br><br>Stubborn (tier 1) - increases each heal from Regenerate to <col=ffffff>${inttostring(3, 10)}%</col> of your maximum life points.`;
                    break;
                }
                case 2: {
                    string1 = `<br><br>Stubborn (tier 2) - increases each heal from Regenerate to <col=ffffff>${inttostring(4, 10)}%</col> of your maximum life points.`;
                    break;
                }
            };
            break;
        }
    };
    if ((STRING_LENGTH(string1) > 0)) {
        var string0 = `${string0}${string1}`;
    };
    return string0;
}