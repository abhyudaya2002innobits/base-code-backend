class APIResponse {
    statusCode: number;
    data: any;
    message: string;
    success: boolean;

    constructor(statusCode: number, data: any, message = "success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400; // Assigning a boolean value based on the statusCode
    }
}
