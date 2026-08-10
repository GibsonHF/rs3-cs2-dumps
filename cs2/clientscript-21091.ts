//
function script21091(): void {
    switch (varbitplayer_61493) {
        case 1: {
            stack(int0);
            script20943();
            if (BRANCH_EQUALS(1)) {
                switch (int1) {
                    case 0: {
                        stack(36470);
                        return;
                    }
                    case 1: {
                        stack(36438);
                        return;
                    }
                    case 2: {
                        stack(36454);
                        return;
                    }
                };
                unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
                stack(36438);
                return;
            };
            switch (int1) {
                case 0: {
                    stack(36462);
                    return;
                }
                case 1: {
                    stack(36430);
                    return;
                }
                case 2: {
                    stack(36446);
                    return;
                }
            };
            unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
            stack(36430);
            return;
        }
        case 0: {
            stack(36422);
            return;
        }
    };
    stack(-1);
    return;
}