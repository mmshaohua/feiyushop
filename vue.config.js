module.exports = {
    devServer:{
       proxy:{
            "/handleTrans.cdo":{
                target:"https://m.feiyu007.com",
                changeOrigin:true
            }
       }
        
    }
}



//http-proxy-middleware  服务端代理




/*  当前文件必须在项目的根目录下面创建*/


