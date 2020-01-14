class Logger {
    public debug(message: string): void {
        this.log("DEBUG", message);
    }

    public error(message: string): void {
        this.log("ERROR", message);
    }

    public warn(message: string): void {
        this.log("WARN", message);
    }

    public info(message: string): void {
        this.log("INFO", message);
    }

    private log(level: string, message: string): void {
        const dateTime = new Date().toISOString().replace("T", " ");
        console.log(`${dateTime} [${level}]: ` + message);
    }
}

export const log = new Logger();
