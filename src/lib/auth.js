const validate = (handler) => {
    return (req, res) => {
        if(true){
            console.log('User logged in');
            handler(req,res);
        }else{
            res.json({error: 'please login'})
        }
    }
}

export default validate;