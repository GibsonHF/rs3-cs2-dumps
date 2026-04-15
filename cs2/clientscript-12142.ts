//
function script12142(int0: int): void {
    varplayer_5994 = int0;
    var string0 = "";
    switch (RANDOM(5)) {
        case 1: {
            string0 = "Your prototype exploded!";
            break;
        }
        case 2: {
            string0 = "You narrowly avoid the parts that fly off your prototype.";
            break;
        }
        case 3: {
            string0 = "Your prototype flies off the workbench and smashes on the floor.";
            break;
        }
        case 4: {
            string0 = "This prototype doesn't seem to do anything at all.";
            break;
        }
        default: {
            string0 = "Something didn't work correctly in your prototype.";
            break;
        }
    };
    IF_SETTEXT(string0, comp(1708, 97));
    IF_SETONTIMER(callback(script12143, 1, (CLIENTCLOCK() + 10)), comp(1708, 55));
    script12128();
    return;
}