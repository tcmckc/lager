import Post from '../interfaces/post';
import ErrorMessage from '../interfaces/errormessage';

async function getPosts(): Promise<Post[]/* | ErrorMessage*/> {
    try {
        const response = await fetch("https://ladda.emilfolino.se/");
        const result = await response.json();

        return result.data;
    } catch (error) {
        return {
            error: error.message,
            status: error.status,
        };
        
    }
}

export { getPosts };