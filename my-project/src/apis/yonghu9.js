import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/Ygb/insert',
            data: {
                "ygbh": VO.ygbh,
                "ygxm": VO.ygxm,
                "ygxb": VO.ygxb,
                "ygnl": VO.ygnl,

                "dzyx":VO.dzyx,
                "ygdh": VO.ygdh,
                "ksbh": VO.ksbh,
                "ygjs": VO.ygjs,

                "ygzw": VO.ygzw,
                "qxdj": VO.qxdj,
                "ygjj": VO.ygjj,
                "ygmm":VO.ygmm,

                }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Ygb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/Ygb/update',
            // data:supporterData
            data: {
                "ygbh": VO.ygbh,
                "ygxm": VO.ygxm,
                "ygxb": VO.ygxb,
                "ygnl": VO.ygnl,

                "dzyx":VO.dzyx,
                "ygdh": VO.ygdh,
                "ksbh": VO.ksbh,
                "ygjs": VO.ygjs,

                "ygzw": VO.ygzw,
                "qxdj": VO.qxdj,
                "ygjj": VO.ygjj,
                "ygmm":VO.ygmm,

            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Ygb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Ygb/selectByName/' + name
        })
    },
    //根据id查询用户信息
    selectByksbh(id) {
        return axios({
            method: 'get',
            url: '/api/Ygb/selectByksbh/' +id
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Ygb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Ygb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    login(VO){
        return axios({
            method: 'post',
            url: '/api/Ygb/login',
            data: {
                    "ygbh": VO.ygbh,
                    "ygmm": VO.ygmm,
            },
        
        })
    },
}
        
          

