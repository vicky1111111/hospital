import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/Blb/insert',
            data: {
                "blbh": VO.blbh,
                "jzkh": VO.jzkh,
                "zdrq": VO.zdrq,
                "ygbh": VO.ygbh,
                "zdjg":VO.zdjg,
                "zlff": VO.zlff,
                "cfbh": VO.cfbh,
                "picture": VO.picture,
                

                }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Blb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/Blb/update',
            // data:supporterData
            data: {
                "blbh": VO.blbh,
                "jzkh": VO.jzkh,
                "zdrq": VO.zdrq,
                "ygbh": VO.ygbh,
                "zdjg":VO.zdjg,
                "zlff": VO.zlff,
                "cfbh": VO.cfbh,
                "picture": VO.picture,
                
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Blb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Blb/selectByName/' + name
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Blb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Blb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    login(usersVO){
        return axios({
            method: 'post',
            url: '/api/Blb/login',
            data: {
                    "name": usersVO.name,
                    "pwd": usersVO.pwd,
            },
        
        })
    },
}
        
          

