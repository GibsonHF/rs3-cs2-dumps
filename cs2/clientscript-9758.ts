//
function script9758(int0: component): void {
    var int1 = 0;
    var int2 = 100;
    switch (int0) {
        case 59179028: {
            int1 = varbitplayer_459;
            int2 = varbitplayer_451;
            break;
        }
        case 59179038: {
            int1 = varbitplayer_460;
            int2 = varbitplayer_452;
            break;
        }
        case 59179048: {
            int1 = varbitplayer_461;
            int2 = varbitplayer_453;
            break;
        }
        case 59179058: {
            int1 = varbitplayer_462;
            int2 = varbitplayer_454;
            break;
        }
        case 59179068: {
            int1 = varbitplayer_463;
            int2 = varbitplayer_455;
            break;
        }
        case 59179078: {
            int1 = varbitplayer_465;
            int2 = varbitplayer_456;
            break;
        }
    };
    IF_SETTEXT(`x ${inttostring(int1, 10)}`, int0);
    if ((int1 < ((int2 + 1) * 5))) {
        IF_SETCOLOUR(16724736, int0);
    } else if ((int1 == ((int2 + 1) * 5))) {
        IF_SETCOLOUR(16764160, int0);
    } else {
        IF_SETCOLOUR(52224, int0);
    };
    return;
}