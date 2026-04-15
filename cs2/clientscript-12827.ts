//
function script12827(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 117833768: {
            string0 = "View a list of discoverable birds.";
            break;
        }
        case 117833770: {
            string0 = "View a list of discoverable mushrooms.";
            break;
        }
        case 117833771: {
            string0 = "View a list of discoverable berries.";
            break;
        }
        case 117833772: {
            string0 = "View a list of discoverable Kami Spirits";
            break;
        }
        case 117833773: {
            string0 = "See how many castaways you have spoken to.";
            break;
        }
        case 117833775: {
            string0 = "See which miniquests you have already completed and those you are yet to do.";
            break;
        }
        case 117833763: {
            string0 = "See an overview of your Eastern Lands achievements.";
            break;
        }
        case 117833776: {
            string0 = "Read the tourist guide and begin to understand how life works in the Eastern Lands.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
    IF_SETONMOUSELEAVE(callback(script8805), int0);
    return;
}