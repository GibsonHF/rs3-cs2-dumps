//
function script7856(): void {
    var int0 = CREATE_NAME_VALIDATE_REPLY();
    if ((int0 == -3)) {
        return;
    };
    IF_SETONTIMER(callback(), comp(1420, 7));
    if ((int0 == 2)) {
        script7845(1, "");
        return;
    };
    switch (int0) {
        case -2:
        case 3: {
            script3213("Error contacting server.");
            break;
        }
        case 5: {
            script3213("Display name already in use. Try a different name or click the randomise button to generate an available one.");
            break;
        }
        case 6: {
            script3213("Display name includes inappropriate content.");
            break;
        }
        case 7: {
            script3213("Display name is banned.");
            break;
        }
        case 8: {
            script3213("Display name is reserved.");
            break;
        }
        case 4: {
            script3213("Please enter a valid display name.");
            break;
        }
        default: {
            script3213("Unexpected server response.");
            break;
        }
    };
    return;
}