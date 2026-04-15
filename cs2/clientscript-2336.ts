//
function script2336(int0: component, int1: int): void {
    var string0 = "";
    switch (int0) {
        case 68091907: {
            if ((varbitplayer_21649 == 0)) {
                string0 = "Resist arrest; Using this perk will drop a smoke bomb that will stun guards that are chasing you.";
            } else {
                string0 = "Friendly wave; This perk causes all townsfolk in the area to wave or otherwise animate, which might catch out robbers.";
            };
            break;
        }
        case 68091909: {
            if ((varbitplayer_21649 == 0)) {
                string0 = "Great escape; This perk puts a spade in the jail you can use to escape.";
            } else {
                string0 = "Security sensor; Places a sensor which can detect up to two robbers before being used up.";
            };
            break;
        }
        case 68091911: {
            if ((varbitplayer_21649 == 0)) {
                string0 = "Decoy; Places a clone of your character that can distract guards.";
            } else {
                string0 = "Undercover cop; Disguises your character as a harmless civilian for 30 seconds.";
            };
            break;
        }
        case 68091913: {
            if ((varbitplayer_21649 == 0)) {
                string0 = "Perform the 'wave' emote. Respond to a guards 'Friendly wave' ability!";
            } else {
                string0 = "Perform the 'wave' emote.";
            };
            break;
        }
    };
    script8800(string0, int0, int1);
    return;
}