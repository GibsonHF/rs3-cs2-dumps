//
function script21090(): void {
    switch (varbitplayer_61493) {
        case 1: {
            stack(int0);
            script20943();
            if (BRANCH_EQUALS(1)) {
                switch (int1) {
                    case 0: {
                        stack(36467);
                        return;
                    }
                    case 1: {
                        stack(36435);
                        return;
                    }
                    case 2: {
                        stack(36451);
                        return;
                    }
                };
                unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
                stack(36435);
                return;
            };
            switch (int1) {
                case 0: {
                    stack(36459);
                    return;
                }
                case 1: {
                    stack(36427);
                    return;
                }
                case 2: {
                    stack(36443);
                    return;
                }
            };
            unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
            stack(36427);
            return;
        }
        case 0: {
            stack(36419);
            return;
        }
    };
    stack(-1);
    return;
}