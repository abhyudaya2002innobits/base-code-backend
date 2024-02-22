

class APIError extends Error{
    success: boolean;
    statuscode: number;
    data:any;
    stack: string | undefined;
    errors: never[];
    
    constructor(
        statuscode: number,
        message:"something went wrong",
        errors=[],
        stack=''
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.success=false;
        this.errors=errors
    }
}

export {APIError}