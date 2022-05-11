export const useLocalStorage = (stateName: string, data?: {}) => {
    if (data) {
        try {
            const serializedState = JSON.stringify(data);
            localStorage.setItem(stateName, serializedState);
        } catch {
            // ignore write errors
        }
    }

    try {
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};