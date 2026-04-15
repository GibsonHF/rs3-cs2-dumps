//
function script15244(int0: unknown_int): void {
    if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
        script15226();
        return;
    };
    switch (int0) {
        case 3000: {
            OPENURL("www", "offerwall?wall=runecoins&custom_button=ssarc01&origin=game", 1);
            break;
        }
        case 3001: {
            OPENURL("www", "offerwall?wall=keys&custom_button=ssath03&origin=game", 1);
            break;
        }
    };
    return;
}