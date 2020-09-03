import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(ghbVO) {
        return axios({
            method: 'post',
            url: '/api/Ghb/insert',
            data: {
                "ghbh":ghbVO.ghbh,
                "jzkh":ghbVO.jzkh,
                "ksbh":ghbVO.ksbh,
                "ghlx": ghbVO.ghlx,
                "ghrq":ghbVO.ghrq,
                "ghfy": ghbVO.ghfy,
                "bzxx": ghbVO.bzxx,
                "czry": ghbVO.czry,

                }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Ghb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(ghbVO) {
        return axios({
            method: 'post',
            url: '/api/Ghb/update',
            // data:supporterData
            data: {
                "ghbh":ghbVO.ghbh,
                "jzkh":ghbVO.jzkh,
                "ksbh":ghbVO.ksbh,
                "ghlx": ghbVO.ghlx,
                "ghrq":ghbVO.ghrq,
                "ghfy": ghbVO.ghfy,
                "bzxx": ghbVO.bzxx,
                "czry": ghbVO.czry,
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Ghb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Ghb/selectByName/' + name
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Ghb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Ghb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    login(ghbVO){
        return axios({
            method: 'post',
            url: '/api/Ghb/login',
            data: {
                    "name": ghbVO.name,
                    "pwd": ghbVO.pwd,
            },
        
        })
    },
}
        
          

