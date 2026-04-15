//
function script7485(int0: int): string {
    switch (int0) {
        case 1: {
            return "<col=FFD700>1st";
        }
        case 2: {
            return "<col=C0C0C0>2nd";
        }
        case 3: {
            return "<col=cd7f32>3rd";
        }
    };
    return `${inttostring(int0, 10)}th`;
}