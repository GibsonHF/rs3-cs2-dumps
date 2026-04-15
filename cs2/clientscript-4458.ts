//
function script4458(int0: struct, int1: struct): void {
    var int2 = script5537(int0);
    switch (int2) {
        case 0:
        case 2:
        case 4: {
            switch (int2) {
                case 0: {
                    IF_SETMODEL(struct_getparam(int1, 7035), comp(1178, 97));
                    IF_SETMODEL(struct_getparam(int1, 7038), comp(1178, 98));
                    IF_SETMODEL(struct_getparam(int1, 7053), comp(1178, 104));
                    IF_SETMODEL(struct_getparam(int1, 7062), comp(1178, 110));
                    IF_SETMODEL(struct_getparam(int1, 7071), comp(1178, 117));
                    break;
                }
                case 2: {
                    IF_SETMODEL(struct_getparam(int1, 7036), comp(1178, 97));
                    IF_SETMODEL(struct_getparam(int1, 7039), comp(1178, 98));
                    IF_SETMODEL(struct_getparam(int1, 7054), comp(1178, 104));
                    IF_SETMODEL(struct_getparam(int1, 7063), comp(1178, 110));
                    IF_SETMODEL(struct_getparam(int1, 7072), comp(1178, 117));
                    break;
                }
                case 4: {
                    IF_SETMODEL(struct_getparam(int1, 7037), comp(1178, 97));
                    IF_SETMODEL(struct_getparam(int1, 7040), comp(1178, 98));
                    IF_SETMODEL(struct_getparam(int1, 7055), comp(1178, 104));
                    IF_SETMODEL(struct_getparam(int1, 7064), comp(1178, 110));
                    IF_SETMODEL(struct_getparam(int1, 7073), comp(1178, 117));
                    break;
                }
            };
            IF_SETHIDE(true, comp(1178, 99));
            IF_SETHIDE(true, comp(1178, 105));
            IF_SETHIDE(true, comp(1178, 111));
            IF_SETHIDE(true, comp(1178, 118));
            IF_SETHIDE(false, comp(1178, 97));
            IF_SETHIDE(false, comp(1178, 98));
            IF_SETHIDE(false, comp(1178, 104));
            IF_SETHIDE(false, comp(1178, 110));
            IF_SETHIDE(false, comp(1178, 117));
            IF_SETMODELANGLE(struct_getparam(int1, 7041), struct_getparam(int1, 7042), struct_getparam(int1, 7043), struct_getparam(int1, 7044), struct_getparam(int1, 7045), struct_getparam(int1, 7046), comp(1178, 97));
            IF_SETMODELANGLE(struct_getparam(int1, 7047), struct_getparam(int1, 7048), struct_getparam(int1, 7049), struct_getparam(int1, 7050), struct_getparam(int1, 7051), struct_getparam(int1, 7052), comp(1178, 98));
            IF_SETMODELANGLE(struct_getparam(int1, 7056), struct_getparam(int1, 7057), struct_getparam(int1, 7058), struct_getparam(int1, 7059), struct_getparam(int1, 7060), struct_getparam(int1, 7061), comp(1178, 104));
            IF_SETMODELANGLE(struct_getparam(int1, 7065), struct_getparam(int1, 7066), struct_getparam(int1, 7067), struct_getparam(int1, 7068), struct_getparam(int1, 7069), struct_getparam(int1, 7070), comp(1178, 110));
            IF_SETMODELANGLE(struct_getparam(int1, 7074), struct_getparam(int1, 7075), struct_getparam(int1, 7076), struct_getparam(int1, 7077), struct_getparam(int1, 7078), struct_getparam(int1, 7079), comp(1178, 117));
            break;
        }
        case 1:
        case 3: {
            IF_SETHIDE(false, comp(1178, 99));
            IF_SETHIDE(false, comp(1178, 105));
            IF_SETHIDE(false, comp(1178, 111));
            IF_SETHIDE(false, comp(1178, 118));
            IF_SETHIDE(true, comp(1178, 97));
            IF_SETHIDE(true, comp(1178, 98));
            IF_SETHIDE(true, comp(1178, 104));
            IF_SETHIDE(true, comp(1178, 110));
            IF_SETHIDE(true, comp(1178, 117));
            break;
        }
    };
    return;
}