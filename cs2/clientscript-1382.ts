//[clientscript,worldmap_onkey]
function script1382(int0: unknown_int, int1: unknown_int): void {
    switch (int0) {
        case 96: {
            script1603(-1, 0);
            break;
        }
        case 97: {
            script1603(1, 0);
            break;
        }
        case 98: {
            script1603(0, 1);
            break;
        }
        case 99: {
            script1603(0, -1);
            break;
        }
        case 13: {
            script1898();
            break;
        }
    };
    return;
}