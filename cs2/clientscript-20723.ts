//
function script20723(): void {
    var int0 = script6431();
    var int1 = 8;
    var int2 = 32;
    int1 = script20724(int1, 0, 17062, "", 18904, "Place", "", int2);
    if ((int0 == 1)) {
        int1 = script20724(int1, 1, 17062, "", 18904, "Reposition", "", int2);
    };
    int1 = script20724(int1, 2, 17061, "", 18908, "Rotate Left (Up)", "Rotate Left", int2);
    int1 = script20724(int1, 3, 17061, "", 18908, "Rotate Right (Down)", "Rotate Right", int2);
    switch (MAP_LANG()) {
        case 0: {
            int2 = 32;
            break;
        }
        case 2: {
            int2 = 55;
            break;
        }
        case 1: {
            int2 = 55;
            break;
        }
        case 3: {
            int2 = 32;
            break;
        }
    };
    int1 = script20724(int1, 5, 17061, "del", -1, "Return to Storage", "", int2);
    int1 = script20724(int1, 4, 17063, "esc", -1, "Cancel", "", int2);
    int2 = 32;
    if ((int0 == 0)) {
        int1 = script20724(int1, 6, 17063, "Alt", -1, "Hold + Mouse scroll to zoom camera", "", int2);
        int1 = script20724(int1, 7, 17063, "Alt", -1, "Hold + Click to move", "", int2);
    };
    return;
}