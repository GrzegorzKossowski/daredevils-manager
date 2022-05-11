export function loadState(stateName: string) {
    try {
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export function saveState(name: string, state: {}) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(name, serializedState);
    } catch {
        // ignore write errors
    }
}
