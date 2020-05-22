exports.get404 = (req,res,next)=>{
    res.render('404', {
        someTitle: 'HEY!!!! PAGE NOT FOUND!',
        pageTitle: 'Page not found'
    });
}