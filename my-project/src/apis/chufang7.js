import axios from 'axios'
import Cookies from 'js-cookie'

export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/Cfb/insert',
            data: {
                "id": VO.id,
                "cfbh": VO.cfbh,
                "jzkh": VO.jzkh,
                "ygbh": VO.ygbh,
                "ypbh": VO.ypbh,
                
                "ypsl": VO.ypsl,
                "ypmc": VO.ypmc,
                "ypgn": VO.ypgn,
                "ypjg": VO.ypjg,

                "ypkc": VO.ypkc,
                "scdw": VO.scdw,
                "scrq": VO.scrq,
                "gqrq": VO.gqrq,

                }

        })
    },

   
    //根据id删除用户信息
    deleteById(para) {
        return axios({
            method: 'get',
            url: '/api/Cfb//deleteById/' + para.cfbh+ '/' + para.ypbh
        })
    },
    deleteBycfbh(id) {
        return axios({
            method: 'get',
            url: '/api/Cfb/deleteBycfbh/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/Cfb/update',
            // data:supporterData
            data: {
               
                "cfbh": VO.cfbh,
                "jzkh": VO.jzkh,
                "ygbh": VO.ygbh,
                "ypbh": VO.ypbh,
                
                "ypsl": VO.ypsl,
                "ypmc": VO.ypmc,
                "ypgn": VO.ypgn,
                "ypjg": VO.ypjg,

                "ypkc": VO.ypkc,
                "scdw": VO.scdw,
                "scrq": VO.scrq,
                "gqrq": VO.gqrq,
            


            }
        })
    },
    
    selectBymoney(id) {
        return axios({
            method: 'get',
            url: '/api/Cfb/selectBymoney/'+ id
            
        })
    },
    selectBycfbh(id) {
        return axios({
            method: 'get',
            url: '/api/Cfb/selectBycfbh/'+ id
            
        })
    },
     //分页
     selectById(para) {
        return axios({
            method: 'get',
            url: '/api/Cfb/selectById/'+ para.cfbh + '/' +para.pageNum + '/' + para.pageSize
            
        })
    },

    //分页
    selectByName(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Cfb/selectByName/'+ pageVo.jzkh + '/' +pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Cfb/listALL'
        })
    },
 getexcel() {
        return axios({
            method: 'get',
            url: '/api/Cfb/getexcel'
        })
    },
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Cfb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
}
        
          

