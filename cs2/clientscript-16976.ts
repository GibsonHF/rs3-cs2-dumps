//
function script16976(): void {
    switch (varbitplayer_52106) {
        case 0: {
            IF_SETHIDE(1, 69992498);
            IF_SETHIDE(1, 69992448);
            IF_SETHIDE(1, 69992449);
            IF_SETHIDE(1, 69992452);
            IF_SETHIDE(1, 69992453);
            IF_SETHIDE(1, 69992455);
            IF_SETHIDE(1, 69992456);
            break;
        }
        case 1:
        case 2: {
            IF_SETHIDE(1, 69992498);
            IF_SETHIDE(0, 69992448);
            IF_SETHIDE(0, 69992449);
            IF_SETHIDE(1, 69992452);
            IF_SETHIDE(1, 69992453);
            IF_SETHIDE(1, 69992455);
            IF_SETHIDE(1, 69992456);
            break;
        }
        case 3:
        case 4: {
            IF_SETHIDE(1, 69992498);
            IF_SETHIDE(0, 69992452);
            IF_SETHIDE(0, 69992453);
            IF_SETHIDE(1, 69992455);
            IF_SETHIDE(1, 69992456);
            break;
        }
        case 5:
        case 6: {
            IF_SETHIDE(1, 69992498);
            IF_SETHIDE(0, 69992455);
            IF_SETHIDE(0, 69992456);
            break;
        }
        case 7: {
            IF_SETHIDE(1, 69992498);
            break;
        }
        case 8: {
            IF_SETHIDE(0, 69992498);
            break;
        }
    };
    return;
}