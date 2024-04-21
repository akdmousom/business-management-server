import express, {Request, Response}  from "express";
const app = express();
const port = 5000;




app.get('/health', async(req:Request,res:Response)=>{
    res.send('Server is running...❤❤')
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

export default app