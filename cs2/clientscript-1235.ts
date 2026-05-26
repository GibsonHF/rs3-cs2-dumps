//
function script1235(int0: number): void {
    IF_SETHIDE(0, 11862017);
    switch (varclient_180) {
        case 1: {
            IF_SETMODELANGLE(0, 0, 510, 762, 0, 410, int0);
            break;
        }
        case 2: {
            IF_SETMODELANGLE(0, 0, 514, 1241, 0, 410, int0);
            break;
        }
        case 3: {
            IF_SETMODELANGLE(0, 0, 512, 1536, 1250, 410, int0);
            break;
        }
        case 4: {
            IF_SETMODELANGLE(0, 0, 512, 0, 1250, 410, int0);
            break;
        }
        case 5: {
            IF_SETMODELANGLE(0, 0, 512, 512, 1250, 410, int0);
            break;
        }
        case 6: {
            IF_SETMODELANGLE(0, 0, 512, 1024, 1250, 410, int0);
            break;
        }
        default: {
            IF_SETHIDE(1, 11862017);
            break;
        }
    };
    return;
}