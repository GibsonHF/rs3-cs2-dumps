//
function script21092(): void {
    switch (varbitplayer_61493) {
        case 1: {
            stack(int0);
            script20943();
            if (BRANCH_EQUALS(1)) {
                switch (int1) {
                    case 0: {
                        stack(36471);
                        return;
                    }
                    case 1: {
                        stack(36439);
                        return;
                    }
                    case 2: {
                        stack(36455);
                        return;
                    }
                };
                unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
                stack(36439);
                return;
            };
            switch (int1) {
                case 0: {
                    stack(36463);
                    return;
                }
                case 1: {
                    stack(36431);
                    return;
                }
                case 2: {
                    stack(36447);
                    return;
                }
            };
            unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
            stack(36431);
            return;
        }
        case 0: {
            stack(36423);
            return;
        }
    };
    stack(-1);
    return;
}