//
function script21093(): void {
    switch (varbitplayer_61493) {
        case 1: {
            stack(int0);
            script20943();
            if (BRANCH_EQUALS(1)) {
                switch (int1) {
                    case 0: {
                        stack(36468);
                        return;
                    }
                    case 1: {
                        stack(36436);
                        return;
                    }
                    case 2: {
                        stack(36452);
                        return;
                    }
                };
                unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
                stack(36436);
                return;
            };
            switch (int1) {
                case 0: {
                    stack(36460);
                    return;
                }
                case 1: {
                    stack(36428);
                    return;
                }
                case 2: {
                    stack(36444);
                    return;
                }
            };
            unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
            stack(36428);
            return;
        }
        case 0: {
            stack(36420);
            return;
        }
    };
    stack(-1);
    return;
}