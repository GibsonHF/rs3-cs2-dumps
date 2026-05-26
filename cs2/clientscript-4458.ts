//
function script4458(int0: number, int1: number): void {
    var int2 = script5537(int0);
    switch (int2) {
        case 0:
        case 2:
        case 4: {
            switch (int2) {
                case 0: {
                    IF_SETMODEL(struct_getparam(int1, 7035), 77201505);
                    IF_SETMODEL(struct_getparam(int1, 7038), 77201506);
                    IF_SETMODEL(struct_getparam(int1, 7053), 77201512);
                    IF_SETMODEL(struct_getparam(int1, 7062), 77201518);
                    IF_SETMODEL(struct_getparam(int1, 7071), 77201525);
                    break;
                }
                case 2: {
                    IF_SETMODEL(struct_getparam(int1, 7036), 77201505);
                    IF_SETMODEL(struct_getparam(int1, 7039), 77201506);
                    IF_SETMODEL(struct_getparam(int1, 7054), 77201512);
                    IF_SETMODEL(struct_getparam(int1, 7063), 77201518);
                    IF_SETMODEL(struct_getparam(int1, 7072), 77201525);
                    break;
                }
                case 4: {
                    IF_SETMODEL(struct_getparam(int1, 7037), 77201505);
                    IF_SETMODEL(struct_getparam(int1, 7040), 77201506);
                    IF_SETMODEL(struct_getparam(int1, 7055), 77201512);
                    IF_SETMODEL(struct_getparam(int1, 7064), 77201518);
                    IF_SETMODEL(struct_getparam(int1, 7073), 77201525);
                    break;
                }
            };
            IF_SETHIDE(1, 77201507);
            IF_SETHIDE(1, 77201513);
            IF_SETHIDE(1, 77201519);
            IF_SETHIDE(1, 77201526);
            IF_SETHIDE(0, 77201505);
            IF_SETHIDE(0, 77201506);
            IF_SETHIDE(0, 77201512);
            IF_SETHIDE(0, 77201518);
            IF_SETHIDE(0, 77201525);
            IF_SETMODELANGLE(struct_getparam(int1, 7041), struct_getparam(int1, 7042), struct_getparam(int1, 7043), struct_getparam(int1, 7044), struct_getparam(int1, 7045), struct_getparam(int1, 7046), 77201505);
            IF_SETMODELANGLE(struct_getparam(int1, 7047), struct_getparam(int1, 7048), struct_getparam(int1, 7049), struct_getparam(int1, 7050), struct_getparam(int1, 7051), struct_getparam(int1, 7052), 77201506);
            IF_SETMODELANGLE(struct_getparam(int1, 7056), struct_getparam(int1, 7057), struct_getparam(int1, 7058), struct_getparam(int1, 7059), struct_getparam(int1, 7060), struct_getparam(int1, 7061), 77201512);
            IF_SETMODELANGLE(struct_getparam(int1, 7065), struct_getparam(int1, 7066), struct_getparam(int1, 7067), struct_getparam(int1, 7068), struct_getparam(int1, 7069), struct_getparam(int1, 7070), 77201518);
            IF_SETMODELANGLE(struct_getparam(int1, 7074), struct_getparam(int1, 7075), struct_getparam(int1, 7076), struct_getparam(int1, 7077), struct_getparam(int1, 7078), struct_getparam(int1, 7079), 77201525);
            break;
        }
        case 1:
        case 3: {
            IF_SETHIDE(0, 77201507);
            IF_SETHIDE(0, 77201513);
            IF_SETHIDE(0, 77201519);
            IF_SETHIDE(0, 77201526);
            IF_SETHIDE(1, 77201505);
            IF_SETHIDE(1, 77201506);
            IF_SETHIDE(1, 77201512);
            IF_SETHIDE(1, 77201518);
            IF_SETHIDE(1, 77201525);
            break;
        }
    };
    return;
}