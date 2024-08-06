import Link from "./../model/Link.js"

const postLink= async(req,res)=>{
    const{  title, target,slug } = req.body;


    const link = new Link({
        target,
        slug, 
         title,
       
});

const savedLink= await link.save();

res.json({
    success:true,
    data: savedLink,
    message:"Link created Succesfully"

});
}

const getSlugRedirect = async(req,res)=>{

    const{ slug }=req.params;
    const link= await Link.findOne({ slug});
    if(!link){
        return res.json({
            success:false,
            message:"Link not found"
        });
        
    }

    link.views=link.views+1;
    await link.save();
 res.redirect(link.target);
    
}
export{postLink, getSlugRedirect };




