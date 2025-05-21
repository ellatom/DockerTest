// API helper methods

const RETRIES = 3;
const DELAY = 500;

// delay before next try and than retry - if succeded return
export async function retry(
                            fn: () => Promise<any>,
                            RETRIES = this.RETRIES,
                            DELAY = this.DELAY) {
                                
    for (let i = 0; i < RETRIES; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === RETRIES - 1) throw err;
            await new Promise((res) => setTimeout(res, DELAY));
        }
    }
}