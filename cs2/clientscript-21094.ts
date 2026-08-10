//
function script21094(): void {
    switch (varbitplayer_61493) {
        case 1: {
            stack(int0);
            script20943();
            if (BRANCH_EQUALS(1)) {
                switch (int1) {
                    case 0: {
                        stack(36469);
                        return;
                    }
                    case 1: {
                        stack(36437);
                        return;
                    }
                    case 2: {
                        stack(36453);
                        return;
                    }
                };
                unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
                stack(36437);
                return;
            };
            switch (int1) {
                case 0: {
                    stack(36461);
                    return;
                }
                case 1: {
                    stack(36429);
                    return;
                }
                case 2: {
                    stack(36445);
                    return;
                }
            };
            unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
            stack(36429);
            return;
        }
        case 0: {
            stack(36421);
            return;
        }
    };
    stack(-1);
    return;
}