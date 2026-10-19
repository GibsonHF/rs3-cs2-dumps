//
function script21164(): void {
    if ((((varbitplayer_62213 == 1) && (STAFFMODLEVEL() >= 2)) && (unk11001() != 0))) {
        stack(8);
        return;
    };
    switch (int0) {
        case 0: {
            stack(0);
            return;
        }
        case 1: {
            stack(8);
            return;
        }
        case 2: {
            switch (int1) {
                case 0: {
                    stack(5);
                    return;
                }
                case 4: {
                    stack(4);
                    return;
                }
            };
            stack(2);
            return;
        }
        case 3: {
            switch (int1) {
                case 0: {
                    stack(5);
                    return;
                }
                case 5: {
                    script12478("Invalid display name reply (invalid) unexpected");
                    stack(4);
                    return;
                }
                case 6: {
                    script12478("Invalid display name reply (unavailable) unexpected");
                    stack(4);
                    return;
                }
            };
            stack(7);
            return;
        }
        case 4: {
            switch (int1) {
                case 7:
                case 8:
                case 9: {
                    stack(7);
                    return;
                }
            };
            stack(5);
            return;
        }
    };
    script12478(`Unexpected fallthrough: ${inttostring(int0, 10)} / ${inttostring(int1, 10)}`);
    stack(varclient_8512);
    return;
}